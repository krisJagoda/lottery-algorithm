import { range } from 'rxjs';
import { Stopwatch } from './utils/stopwatch';
import { TryAgainAlgorithm } from './algorithms/algorithm-v1';

class Lottery {

    private numbers: number[];
    private numbersToDraw: number;
    private algorithm: DrawAlgorithm;
    private results: number[];
    private durations: number[];

    constructor(max: number, numbersToDraw: number) {
        if (max < 1) { throw new Error("Max has cannot be 0"); }
        if (numbersToDraw < 1) { throw new Error("NumbersToDraw cannot be 0"); }

        this.durations = new Array();
        this.numbers = new Array();
        this.results = new Array();
        this.numbersToDraw = numbersToDraw;

        this.initializeNumbers(max);

        this.algorithm = new TryAgainAlgorithm(this.numbers)
    }

    initializeNumbers(max: number) {
        range(0, max).subscribe(n => this.numbers.push(n));
    }

    public run() {
        console.info("initialized array " + this.numbers);
        var count = 0;

        do {
            var stopWatch = new Stopwatch();
            stopWatch.startWatch();

            var result = this.algorithm.drawNumber();
            this.results.push(result);

            stopWatch.stopWatch();
            this.durations.push(stopWatch.getDuration());
            count++;
        } while (count < this.numbersToDraw);
    }

    getDurations():number[] {
        return this.durations;
    }

    getResults():number[] {
        return this.results;
    }

}
export { Lottery };
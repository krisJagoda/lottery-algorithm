import { range } from 'rxjs';

class Lottery {

    private numbers: Number[];

    constructor(max: number) {
        if (max < 1) { throw new Error("Max has cannot be 0"); }
        this.numbers = new Array();

        range(0, max).subscribe(n => this.numbers.push(n));
    }

    public run() {
        console.info("initialized array " + this.numbers);
    }

}
export { Lottery };
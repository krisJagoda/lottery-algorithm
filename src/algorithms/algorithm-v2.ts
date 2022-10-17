import {DrawAlgorithm} from "./interface";

class MutatingSourceAlgorithm extends DrawAlgorithm {

    private runningNumbers: number[];
    private drawnNumbers: number[];

    constructor() {
        super();
        this.runningNumbers = [];
        this.drawnNumbers = [];
    }

    init(numbers: number[]): void {
        super.init(numbers);
        this.runningNumbers = numbers;
    }

    drawNumber(): number {
        // Gets the array getRandomIndex
        let index = this.getRandomIndex();

        // Draws a number from the working copy of numbers array
        let number = this.runningNumbers[index];

        // Stores the number and return
        this.drawnNumbers.push(number);

        // Deletes the number from the working copy array
        this.runningNumbers.splice(index, 1);
        //console.log(`Remaining numbers: ${this.getRemainingNumbers()}`);

        return number;
    }

    getRandomIndex(): number {
        return Math.floor(Math.random() * this.runningNumbers.length);
    }

    getRemainingNumbers(): number {
        return this.runningNumbers.length;
    }
}
export { MutatingSourceAlgorithm };
import {DrawAlgorithm} from "./interface";

class MutatingSourceAlgorithm extends DrawAlgorithm {

    private runningNumbers: number[];

    constructor() {
        super();
        this.runningNumbers = [];
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

        // Deletes the number from the working copy array
        this.runningNumbers.splice(index, 1);

        return number;
    }

    getRandomIndex(): number {
        return Math.floor(Math.random() * this.runningNumbers.length);
    }
}
export { MutatingSourceAlgorithm };
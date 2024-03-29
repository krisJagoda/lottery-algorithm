import {DrawAlgorithm} from "./interface";

class TryAgainAlgorithm extends DrawAlgorithm {

    private drawnNumbers: number[];

    constructor() {
        super();
        this.drawnNumbers = [];
    }

    drawNumber(): number {
        // Draws a number from the original array
        // Keep trying until it wasn't already drawn
        let number: number;
        do {
            number = this.numbers[this.getRandomIndex()];
        } while (this.drawnNumbers.indexOf(number) !== -1)

        // Stores the number and return
        this.drawnNumbers.push(number);
        return number;
    }

    getRandomIndex(): number {
        return Math.floor(Math.random() * this.numbers.length);
    }
}
export { TryAgainAlgorithm };
class TryAgainAlgorithm implements DrawAlgorithm {

    private numbers: number[];
    private drawedNumbers: number[];

    constructor(numbers:number[]) {
        this.numbers = numbers;
        this.drawedNumbers = new Array();
    }

    drawNumber(): number {
        // Draws a number from the original array
        // Keep trying until it wasn't already drawed
        var number: number;
        do {
            number = this.numbers[this.getRandomIndex()];
        } while (this.drawedNumbers.indexOf(number) != -1)

        // Stores the number and return
        this.drawedNumbers.push(number);
        return number;
    }

    getRandomIndex(): number {
        return Math.floor(Math.random() * this.numbers.length);
    }
}
export { TryAgainAlgorithm };
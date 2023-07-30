export abstract class DrawAlgorithm {
    protected numbers: number[];

    constructor() {
        this.numbers = [];
    }

    init(numbers: number[]) {
        this.numbers = numbers;
    }

    abstract drawNumber(): number;
}
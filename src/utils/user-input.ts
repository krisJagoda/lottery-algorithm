export class UserInput {
    private upperBoundary: number = 0;
    private numbersToDraw: number = 0;

    public run() {
        const readlineSync = require('readline-sync');

        this.upperBoundary = readlineSync.question('Enter the maximum number to draw from: ');
        console.log(`The maximum value you have set is: ${this.upperBoundary}`);

        this.numbersToDraw = readlineSync.question('Enter numbers to draw: ');
        console.log(`Number of drawn values you have set is: ${this.numbersToDraw}`);
    }

    public setUpperBoundary() {
        return this.upperBoundary;
    }
    public setNumbersToDraw() {
        return this.numbersToDraw;
    }
}






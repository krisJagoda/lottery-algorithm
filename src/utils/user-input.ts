export class UserInput {
    private upperBoundary: number = 0;
    private numbersToDraw: number = 0;
    private pattern = /^\d+$/;
    private readlineSync = require('readline-sync');

    public run() {
        this.getUpperBoundaryNumberFromUser();
        this.getNumberOfDrawnNumberFromUser();
    }

    private getUpperBoundaryNumberFromUser(): void {
        let isInitialised: boolean = true;

        while (isInitialised) {
            const userInput = this.readlineSync.question('Enter the maximum number to draw from: ');
            if (this.pattern.test(userInput)) {
                console.log(`The maximum value you have set is: ${userInput}`);
                this.upperBoundary = parseInt(userInput);
                isInitialised = false;
            } else {
                console.log('You need to enter a numeric value! Re-try!');
            }
        }
    }

    private getNumberOfDrawnNumberFromUser(): void {
        let isInitialised: boolean = true;

        while (isInitialised) {
            const userInput = this.readlineSync.question('Enter numbers to draw: ');
            if (this.pattern.test(userInput)) {
                console.log(`Number of drawn values you have set is: ${userInput}`);
                this.numbersToDraw = parseInt(userInput);
                isInitialised = false;
            } else {
                console.log('You need to enter a numeric value! Re-try!');
            }
        }
    }

    public setUpperBoundary() {
        return this.upperBoundary;
    }

    public setNumbersToDraw() {
        return this.numbersToDraw;
    }
}






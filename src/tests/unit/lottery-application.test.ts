import {Lottery} from "../../lottery-application";

describe('Lottery constructor testing', () => {
    it('should throw exception if first argument is 0 or below 0',  () => {
        try {
            new Lottery(0, 10);
            new Lottery(-1, 10);
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('Max cannot be 0 or a negative integer.');
        }
    });

    it('should throw exception if second argument is 0 or below 0',  () => {
        try {
            new Lottery(10, 0);
            new Lottery(10, -10);
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('NumbersToDraw cannot be 0 or a negative integer.');
        }
    });

    it('should throw exception second argument is bigger than first argument',  () => {
        try {
            new Lottery(2, 10);
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('Numbers to draw cannot be bigger than max numbers in lottery.');
        }
    });

});

import { Lottery } from "./lottery-application";

console.log("* Initializing Lottery Application *");

const upperBoundary = 60;
const numbersToDraw = 6;

const lottery = new Lottery(upperBoundary, numbersToDraw);

lottery.run();

console.log("** Result **");
console.log(lottery.getResults());

console.log("** Duration **");
console.log(lottery.getDurations());


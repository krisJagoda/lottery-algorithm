import { Lottery } from "./lottery-application";

console.log("* Initializing Lottery Application *");

const upperBoundary = 60;

const lottery = new Lottery(upperBoundary);

lottery.run();
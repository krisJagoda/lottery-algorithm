import { Lottery } from "./lottery-application";
import {FileExplorer} from "./components/FileExplorer";

const upperBoundary = 2000;
const numbersToDraw = 1999;
const lottery = new Lottery(upperBoundary, numbersToDraw);
const fileCreator = new FileExplorer('lottery-algorithm');
const filePrefix = fileCreator.createFileName();

console.log("* Initializing Lottery Application *");

let log = '***** Lottery application log *****\n\n';

log += 'Generating numbers from 0 to ' + upperBoundary + '\n';
log += 'Numbers to draw: ' + numbersToDraw + '\n';

console.log("** Running **");

lottery.run();

log += '** Result **\n';
log += lottery.getResults();
log += '\n\n';
log += '** Statistics **\n';
log += lottery.getDurations();
log += '\n\n';
log += `TOTAL DURATION ${lottery.totalDuration} IN MILLISECONDS.`

const timestamp = new Date().toISOString();
const file = `${filePrefix}${timestamp}.txt`;

fileCreator.writeToFile(file, log);



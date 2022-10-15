import { Lottery } from "./lottery-application";
import * as fs from "fs";
import {writeFile} from "fs";

const upperBoundary = 60;
const numbersToDraw = 6;
const lottery = new Lottery(upperBoundary, numbersToDraw);
const dir = './results';

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

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
const timestamp = new Date().toISOString();
const fileName = `${dir}/lottery-results_${timestamp}.txt`;
writeFile(fileName, log, () => console.log('Check result file ' + fileName));



import { Lottery } from "./lottery-application";
import { writeFile } from 'fs';

console.log("* Initializing Lottery Application *");

var log = '***** Lottery application log *****\n\n';

const upperBoundary = 6000000;
const numbersToDraw = 6000000;

log += 'Generating numbers from 0 to ' + upperBoundary + '\n';
log += 'Numbers to draw: ' + numbersToDraw + '\n';

const lottery = new Lottery(upperBoundary, numbersToDraw);

console.log("** Running **");

lottery.run();

log += '** Result **\n';
log += lottery.getResults();
log += '\n\n';
log += '** Statistics **\n';
log += lottery.getDurations();
log += '\n\n';
log += 'TOTAL DURATION: ' + lottery.totalDuration;

var timestamp = Date.now();
var filename = './results/lottery-result' + timestamp + '.txt';
writeFile(filename, log, () => console.log('Check result file ' + filename));

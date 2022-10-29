import { Lottery } from "./lottery-application";
import * as fs from "fs";
import {writeFile} from "fs";
import { MutatingSourceAlgorithm } from "./algorithms/algorithm-v2";
import { TryAgainAlgorithm } from "./algorithms/algorithm-v1";

const upperBoundary = 1_000_000;
const numbersToDraw = 999_000;

const numbersPerLine = 50;

const lottery = new Lottery(upperBoundary, numbersToDraw, new MutatingSourceAlgorithm());
const dir = './results';

console.log("* Initializing Lottery Application *");

let log = '***** Lottery application log *****\n\n';

log += 'Generating numbers from 0 to ' + upperBoundary + '\n';
log += 'Numbers to draw: ' + numbersToDraw + '\n';

console.log("** Running **");

lottery.run();

log += '** Result **\n';

let results = lottery.getResults();
let lastIndex = 0;

for (let i = 0; i < results.length; i++) {
    if (i % numbersPerLine === 0) {
        let line = `${results.slice(lastIndex, i)}\n`
        log+= line;
        lastIndex = i;
    }
    if (i === results.length -1) {
        let line = `${results.slice(lastIndex, i)}\n`
        log+= line;
    }
}

log += '\n\n';
log += '** Statistics **\n';

const durations = lottery.getDurations();
lastIndex = 0;
for (let i = 0; i < durations.length; i++) {
    if (i % numbersPerLine === 0) {
        let line = `${durations.slice(lastIndex, i)}\n`
        log+= line;
        lastIndex = i;
    }
    if (i === durations.length -1) {
        let line = `${durations.slice(lastIndex, i)}\n`
        log+= line;
    }
}
log += '\n\n';
log += `TOTAL DURATION ${lottery.totalDuration} IN MILLISECONDS.`

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
const timestamp = new Date().toISOString();
const fileName = `${dir}/lottery-results_${timestamp}.txt`;
writeFile(fileName, log, () => console.log('Check result file ' + fileName));

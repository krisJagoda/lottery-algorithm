import * as fs from "fs";
import {writeFile} from "fs";

class FileExplorer {

    private fileName: string;
    private dir = './results';

    constructor(text: string, shallCreateDir: boolean = true) {
        this.fileName = text;
        this.createDir(shallCreateDir);
    }

    createDir = (input: boolean) => {

        if (!input && !fs.existsSync(this.dir)){
            throw new Error('The directory does not exist or has not been indicated to be created.');
        }
        if (!fs.existsSync(this.dir)){
            fs.mkdirSync(this.dir);
        }
    }

    createFileName = () => {

        if (this.fileName.trim().length === 0){
            throw new Error('Text cannot be empty.');
        }

        return `${this.dir}/${this.fileName}_`;
    }

    writeToFile(file: string, log: string) {
        try {
            writeFile(file, log, () => console.log('Check result file ' + file));
        } catch (e) {
            console.log(e.message);
        }
    }
}

export {FileExplorer};

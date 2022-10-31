import * as fs from "fs";
import {writeFile} from "fs";
import {IsDataType} from "./IsDataType";
import {DataTypes} from "./DataTypes";


export class FileExplorer implements IsDataType {
    private dir : string = './results'

    constructor(
        private fileName: string,
        private shallCreateDir: boolean = true,
    ) {
        this.fileName = fileName;
        this.createDir(shallCreateDir);
    }

    public createDir = (input: boolean = true) => {

        if (!input && !fs.existsSync(this.dir)){
            throw new Error('The directory does not exist or has not been indicated to be created.');
        }
        if (!fs.existsSync(this.dir)){
            fs.mkdirSync(this.dir);
        }
    }

    public createFileName = () => {

        if (this.fileName.trim().length === 0){
            throw new Error('Text cannot be empty.');
        }

        return `${this.dir}/${this.fileName}_`;
    }

    isDataType(file: string, isDataType: DataTypes): string {
        return `${file}.${isDataType}`;
    }

    public writeToFile(fileName: string, dataType: DataTypes = DataTypes.TXT, log: string) {
        const file = this.isDataType(fileName, dataType);

        try {
            writeFile(file, log, () => console.log('Check result file ' + file));
        } catch (e) {
            console.log(e.message);
        }
    }
}


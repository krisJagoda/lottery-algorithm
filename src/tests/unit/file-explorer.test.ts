import {FileExplorer} from "../../components/file-explorer";
import * as fs from "fs";
import {exists} from "fs";

const text = 'test';
const shallCreateDir = true;

it('should throw exception if root dir does not exist and the caller does not want to have it created',  () => {
    try {
        new FileExplorer(text, !shallCreateDir);
    } catch (err) {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toBe('The directory does not exist or has not been indicated to be created.');
    }
});

//need to mock fs - TO DO - testing fs write is more complicated.
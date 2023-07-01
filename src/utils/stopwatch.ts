class Stopwatch {

    private _start: number = 0;
    private _end: number = 0;

    startWatch() {
        this._start = Date.now();
    }

    stopWatch() {
        this._end = Date.now();
    }

    getDuration(): number {
        return this._end - this._start;
    }

    get start(): number {
        return this._start;
    }

    get end(): number {
        return this._end;
    }

}

export {Stopwatch};

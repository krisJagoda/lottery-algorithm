class Stopwatch {

    private start:number = 0;
    private end:number = 0;

    startWatch() {
        this.start = Date.now();
    }

    stopWatch() {
        this.end = Date.now();
    }

    getDuration(): number {
        return this.start - this.end;
    }
}
export { Stopwatch };
class Stopwatch {

    private start: number = 0;
    private end: number = 0;

    startWatch() {
        this.start = new Date().getMilliseconds();
    }

    stopWatch() {
        this.end = new Date().getMilliseconds();
    }

    getDuration(): number {
        return this.end - this.start;
    }
}

export {Stopwatch};

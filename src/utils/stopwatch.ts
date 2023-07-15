class Stopwatch {

    private start: number = 0;
    private end: number = 0;

    startWatch() {
        this.start = new Date().getTime();
    }

    stopWatch() {
        this.end = new Date().getTime();
    }

    getDuration(): number {
        return this.end - this.start;
    }

    getDurationWithTrace() {
        const duration = this.end - this.start;
        console.debug("End      : " + this.end);
        console.debug("Start    : " + this.start);
        console.debug("Duration : " + duration);

        return duration;
    }
}

export {Stopwatch};

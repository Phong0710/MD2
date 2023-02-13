class StopWatch{
    private _startTime : number;
    private _endTime : number;

    constructor(startTime: number, endTime: number) {
        this._startTime = startTime;
        this._endTime = endTime;
    }

    getstartTime(): number {
        return this._startTime;
    }

    getendTime(): number {
        return this._endTime;
    }
    start(getstartTime:StopWatch){
        return Date.now()
    }
    stop(getendTime:StopWatch){
        return Date.now()
    }
    getElapsedTime(){
        return (this.getendTime()-this.getstartTime())/1000
    }
}
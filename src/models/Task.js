// обычная модель
export default class Task {
    constructor(newModel){
        this.id = newModel.id ? newModel.id : null;
        this.taskName =  newModel.taskName ? newModel.taskName : "";
        this.startTime =  newModel.startTime ? newModel.startTime : 0;
        this.endTime =  newModel.endTime ? newModel.endTime : 0;

        return {
            id: this.id,
            taskName: this.taskName,
            startTime: this.startTime,
            endTime: this.endTime
        }
    }
}
class Stage
{
    vusers: number;
    rampup: number;
    duration: number;
    constructor(vusers: number, rampup: number, duration: number)
    {
        this.vusers = vusers;
        this.rampup = rampup;
        this.duration = duration;
    }
}

class Operation
{
    operationName: string;
    stages: Stage[];
    rampDown: number;
    constructor(operationName: string)
    {
        this.operationName = operationName;
        this.stages = [];
        this.rampDown = 0;
    }

    addNewStage()
    {
        console.log('addNewOperation')
        this.stages.push(new Stage(20, 5, 5))
    }

    changeStage(stageIndex: number, stageData: Stage)
    {
        console.log('changeStage')
        this.stages[stageIndex] = stageData
    }

    deleteStage(stageIndex: number)
    {
        var name = this.stages.splice(stageIndex, 1)
        console.log(`name = ${JSON.stringify(name)}`)
    }
}

class TestPlan
{
    testPlanName: string;
    operations: Operation[];
    constructor(testPlanName: string)
    {
        this.testPlanName = testPlanName;
        this.operations = [];
    }
}


const oper = new Operation('qweasd');
oper.addNewStage()
oper.addNewStage()
oper.changeStage(1, new Stage(10, 10, 10))
oper.addNewStage()
oper.addNewStage()
oper.changeStage(1, new Stage(30, 10, 10))
console.log(oper)
console.log(`oper = ${JSON.stringify(oper)}`)
oper.deleteStage(0)
console.log(`oper = ${JSON.stringify(oper)}`)
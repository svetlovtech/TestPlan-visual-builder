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

    addNewEmptyStage()
    {
        console.log('addNewEmptyStage')
        this.stages.push(new Stage(20, 5, 5))
    }

    addNewStage(stageData: Stage)
    {
        console.log('addNewStage')
        this.stages.push(stageData)
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

    addNewOperation(operation: Operation){
        console.log('addNewOperation')
        this.operations.push(operation)
    }
}


let testPlan = new TestPlan('My new testplan')
for (let i = 0; i < 10; i++) {
    let operation = new Operation(`UC_0${i}`)
    console.log(`operation = ${JSON.stringify(operation)}`)
    for (let j = 0; j < 10; j++) {
        operation.addNewStage(new Stage(20, 5, 10))
    }
    testPlan.addNewOperation(operation)
}
console.log(`testPlan = ${JSON.stringify(testPlan)}`)
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
        let name = this.stages.splice(stageIndex, 1)
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

    addNewEmptyOperation(operationName: string)
    {
        console.log(`operationName = ${operationName}`)
        this.addNewOperation(new Operation(operationName))
    }

    addNewOperation(operation: Operation)
    {
        console.log(`operation = ${JSON.stringify(operation)}`)
        this.operations.push(operation)
    }

    getSeriesData()
    {
        let seriesData = []
        for (let i = 0; i < this.operations.length; i++) {
            let data = []
            for (let j = 0; j < this.operations[i].stages.length; j++) {
                data.push(this.operations[i].stages[j].vusers)
            }

            let series = {
                name: this.operations[i].operationName,
                data: data
            }
            seriesData.push(series)
        }
        return seriesData
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
console.log(`testPlan.getSeriesData() = ${JSON.stringify(testPlan.getSeriesData())}`)
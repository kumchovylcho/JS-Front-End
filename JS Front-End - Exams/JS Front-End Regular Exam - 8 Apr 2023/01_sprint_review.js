function solve(list) {

    function addInitialData() {
        const data = {};

        const iterations = parseInt(list.shift());
        for (let i = 0; i < iterations; i++) {
            const [assignee, taskId, title, status, estimatedPoints] = list.shift().split(":");

            if (!data.hasOwnProperty(assignee)) {
                data[assignee] = {};
                data[assignee].taskIds = [];
            }

            data[assignee].taskIds.push({
                taskId: taskId,
                title: title,
                status: status,
                estimatedPoints: parseInt(estimatedPoints)
                });
            }

        return data;
    }

    function findTaskIdAndChangeStatus(id, newStatus) {
        for (const taskIds of Object.values(tasks)) {
            for (const data of Object.values(taskIds)) {
                for (const task of data) {
                    if (task.taskId === id) {
                        task.status = newStatus
                        return true;
                    }
                }
            }
        }
        return false;
    }

    function addNew(assignee, taskId, title, status, estimatedPoints) {
        if (!tasks.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`)
            return;
        }

        tasks[assignee].taskIds.push({
            taskId: taskId,
            title: title,
            status: status,
            estimatedPoints: parseInt(estimatedPoints)
        })
    }

    function changeStatus(assignee, taskId, newStatus) {
        if (!tasks.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }

        if (!findTaskIdAndChangeStatus(taskId, newStatus)) {
            console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
        }
    }

    function removeTask(assignee, index) {
        if (!tasks.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }

        index = parseInt(index);
        if (index > tasks[assignee].taskIds.length - 1 || index < 0) {
            console.log("Index is out of range!");
            return;
        }

        tasks[assignee].taskIds.splice(index, 1);
    }

    function showResults() {
        const statusPoints = {
            "ToDo": {"points": 0, name: "ToDo"},
            "In Progress": {"points": 0, name: "In Progress"},
            "Code Review": {"points": 0, name: "Code Review"},
            "Done": {"points": 0, name: "Done Points"},
        };

        for (const taskIds of Object.values(tasks)) {
            for (const data of Object.values(taskIds)) {
                for (const task of data) {
                    statusPoints[task.status]["points"] += task.estimatedPoints;
                }
            }
        }

        for (const info of Object.values(statusPoints)) {
            console.log(`${info.name}: ${info.points}pts`)
        }

        let message = "Sprint was unsuccessful...";

        const notDonePoints = statusPoints["ToDo"]["points"] +
            statusPoints["In Progress"]["points"] +
            statusPoints["Code Review"]["points"];

        if (statusPoints["Done"]["points"] >= notDonePoints) {
            message = "Sprint was successful!";
        }

        console.log(message);
    }


    const tasks = addInitialData();

    const operations = {
        "Add New": addNew,
        "Change Status": changeStatus,
        "Remove Task": removeTask,
    };

    const iterations = list.length;
    for (let i = 0; i < iterations; i++) {
        const [command, ...info] = list.shift().split(":");

        operations[command](...info);
    }

    showResults();
}

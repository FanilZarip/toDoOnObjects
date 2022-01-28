// Сегодня напишем простой самый простой TODO лист без графического интерфейса.
// Хранилищем будет объект, а имена задач - ключами. 
// const list = {
//  "create a new practice task": "In Progress",
//  "make a bed": "Done",
//  "write a post": "To Do",
// }
// Функция changeStatus - будет менять статус задачи 
// changeStatus("write a post", "Done")
// Функция addTask - добавляет новую задачу
// addTask('have a walk')
// Функция deleteTask - удаляет задачу
// deleteTask('have a walk')
// Функция showList будет выводить весь список дел в виде 
//. Todo: 
//  "create a new practice task",
//  "make a bed",
// In Progress: 
//  "write a post"
// Done:
//  -
// Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль

const list = {};
const statusList = {
    todo:'Todo',
    inProgress:'In Progress',
    done:'Done',
};

function addTask(task) {
    list[task] = statusList.todo;

}

function changeStatus(task, newStatus) {

    const isCorrectData = (task in list);

    if (isCorrectData) {
        for (const status in statusList) {
            if (newStatus === statusList[status]) {
                list[task] = newStatus;
            }
        }
    }

    return;
}

function deleteTask(task) {
    delete list[task];
}

function showList() {
    sortByTaskStatus(statusList.todo);
    sortByTaskStatus(statusList.inProgress);
    sortByTaskStatus(statusList.done);
}

function sortByTaskStatus(taskStatus) {

    const statusTitle = taskStatus + ":";
    let taskList = null;
    
    console.log(statusTitle);
    for (const key in list) {
        if (list[key] === taskStatus) {
            taskList = "'" + key + "'" + ",";
            console.log(taskList);
        }
    }
    if (taskList !== null) {
        return;
    } else {
        console.log('-');
    }

}

console.log("Sorted 'TODO List' untill adding Tasks:")
showList();

addTask('Done work day');
addTask('Make Todo');
addTask('Learn Objects');
addTask('Go to Bed');
addTask('Close NoteBook');

changeStatus("task", statusList.inProgress);
changeStatus("Make Todo", statusList.done);
changeStatus("Learn Objects", statusList.inProgress);
changeStatus("Done work day", '23Done');

deleteTask('Close NoteBook');
// deleteTask('CloseNoteBook');

console.log("TODO List:");
console.log(list);

console.log("Sorted 'TODO List' after adding Tasks:");
showList();

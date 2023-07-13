import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type todolistsType = {
    id: string;
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    // function removeTask(todolistId:string, id: string) {
    //     let filteredTasks = tasks[todolistId].filter(t =>  t.id != id );
    //     setTodolists(filteredTasks);
    //
    // }

    // function addTask(todolistId: string, title: string) {
    //     // let task = {id: v1(), title: title, isDone: false};
    //     // let newTasks = [task, ...tasks];
    //     // setTasks(newTasks);
    // }

    const addTask = (todolistId: string, title: string) => {
        let task = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistId]: [task, ...tasks[todolistId]]})

    }
    // function changeStatus(taskId: string, isDone: boolean) {
    //     // let task = tasks.find(t => t.id === taskId);
    //     // if (task) {
    //     //     task.isDone = isDone;
    //     // }
    //     //
    //     // setTasks([...tasks]);
    // }
    const changeStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        setTasks({
            ...tasks, [todolistId]: tasks[todolistId]
                .map(t => t.id === taskId ? {...t, isDone: isDone} : t)
        })
    }
    // let tasksForTodolist = tasks;
    //filter не используем , использовать надо map, при filter не будет работать создание {...t, filter: value}
    const changeFilter = (todolistId: string, value: FilterValuesType) => {
        // let filterTodolist = todolists.filter(t => todolistId === t.id ? t.filter = value: t)
        let filteredTodolist = todolists.map(t => todolistId === t.id ? {...t, filter: value} : t)
        setTodolists(filteredTodolist)

    }
    // создаем копию объекта tasks, по todolistId находим нужный массив тасок, и затем фильтруем tasks[todolistId], хранит нужный нам массив тасок.
    const removeTask = (todolistId: string, id: string) => {
        let filteredTasks = {...tasks, [todolistId]: tasks[todolistId].filter(f => f.id !== id)}
        setTasks(filteredTasks);

    }

    return (
        <div className="App">

            {todolists.map((mapTodolists) => {

                    let tasksForTodolist = tasks[mapTodolists.id];

                    if (mapTodolists.filter === "active") {
                        tasksForTodolist = tasks[mapTodolists.id].filter(t => !t.isDone);
                    }
                    if (mapTodolists.filter === "completed") {
                        tasksForTodolist = tasks[mapTodolists.id].filter(t => t.isDone);
                    }


                    return (
                        <Todolist
                            key={mapTodolists.id}
                            todolistId={mapTodolists.id}
                            title={mapTodolists.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={mapTodolists.filter}
                        />
                    )
                }
            )
            }


        </div>
    );
}

export default App;

import { useState } from "react";
import TaskFormRow from "./TaskFormRow";
import TaskRow from './TaskRow';

const TaskManager = () => {

    let [tasks, setTasks] = useState([
        { id: 1, desp: 'Pay Electricity Bills', status: 'DONE' },
        { id: 2, desp: 'Clear Water Bills', status: 'PLANNED' },
        { id: 3, desp: 'Refuel the vehicle', status: 'DONE' }
    ]);

    const add = task => {
        setTasks([...tasks, task]);
    }

    const deleteById = id => {
        setTasks(tasks.filter(t => t.id !== id));
    }

    const markEditable = id => {
        setTasks(tasks.map(t => t.id != id ? t : { ...t, isEditable: true }));
    }

    const unMarkEditable = id => {
        setTasks(tasks.map(t => t.id != id ? t : { ...t, isEditable: undefined }));
    }

    const update = task => {
        setTasks(tasks.map(t => t.id != task.id ? t : { ...task, isEditable: undefined }));
    }

    return (
        <section className="container-fluid p-4">
            <h4>To Do's</h4>

            <div className="col-sm-9 p-2 mx-auto">
                <div className="row p-1 fw-bold border-bottom border-primary">
                    <div className="col-2">
                        Task#
                    </div>
                    <div className="col">
                        Description
                    </div>
                    <div className="col-3">
                        Status
                    </div>
                    <div className="col-2">

                    </div>
                </div>
                <TaskFormRow add={add} />
                {(!tasks || tasks.length == 0) ?
                    (
                        <div className="row p-1">
                            <div className="col alert alert-info">
                                No Records Found
                            </div>
                        </div>
                    ) :
                    (
                        tasks.map(t =>
                            t.isEditable ?
                                <TaskFormRow key={t.id} t={t} update={update} unMarkEditable={unMarkEditable} /> :
                                <TaskRow key={t.id} t={t} deleteById={deleteById} markEditable={markEditable} />)
                    )
                }
            </div>
        </section>
    );
}

export default TaskManager;
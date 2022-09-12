import { Component } from "react";
import TaskRow from './TaskRow';

class TaskManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks:[
                {id:1,desp:'Pay Electricity Bills',status:'DONE'},
                {id:2,desp:'Clear Water Bills',status:'PLANNED'},
                {id:3,desp:'Refuel the vehicle',status:'DONE'}
            ]
        };
    }

    render(){
        return (
            <section className="container-fluid p-4">
                <h4>To Dos</h4>

                {(!this.state.tasks || this.state.tasks.length===0) ?
                    <p><strong>No tasks to display</strong></p> :
                    (
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tasks.map(t => <TaskRow key={t.id} t={t} />)
                                }
                            </tbody>
                        </table>
                    )
                }
            </section>
        );
    }
}

export default TaskManager;
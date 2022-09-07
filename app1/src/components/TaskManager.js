import { Component } from "react";
import '../styles/TaskManager.css';

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
            <section className="tasks">
                <h4>To Dos</h4>

                {(!this.state.tasks || this.state.tasks.length===0) ?
                    <p><strong>No tasks to display</strong></p> :
                    (
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tasks.map(t => (
                                        <tr>
                                            <td>{t.id}</td>
                                            <td>{t.desp}</td>
                                            <td>{t.status}</td>
                                        </tr>
                                    ))
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
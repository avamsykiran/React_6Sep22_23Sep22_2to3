import { Component } from "react";
import TaskFormRow from "./TaskFormRow";
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

    add = task => {
        this.setState({tasks:[...this.state.tasks,task]});
    }

    deleteById = id => {
        this.setState({tasks:this.state.tasks.filter(t => t.id!==id)});
    }

    render(){

        let {tasks} = this.state;

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
                    <TaskFormRow add={this.add} />
                    { (!tasks || tasks.length==0 ) ?
                       (
                            <div className="row p-1">
                                <div className="col alert alert-info">
                                    No Records Found
                                </div>
                            </div>
                       ) :
                       (
                        tasks.map( t => <TaskRow key={t.id} t={t} deleteById={this.deleteById} /> )
                       )
                    }
                </div>
            </section>
        );
    }
}

export default TaskManager;
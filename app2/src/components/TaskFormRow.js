import { Component } from "react";

class TaskFormRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: props.t ? {...props.t} :{ id: 0, desp: '', status: "PLANNED" }
        }
    }

    setField = event => {
        let fieldName = event.target.name;
        let fieldValue = event.target.type==="number"? parseInt(event.target.value) : event.target.value;
        this.setState({task:{...this.state.task,[fieldName]:fieldValue}});
    }

    handleFormSubmit = event => {
        if(this.state.task.isEditable){
            this.props.update({...this.state.task});
        }else{
            this.props.add({...this.state.task});
            this.setState({task: { id: 0, desp: '', status: "PLANNED" }});
        }
        event.preventDefault();
    }

    reset = event => {
        if(this.state.task.isEditable){
            this.props.unMarkEditable(this.state.task.id);
        }else{
            this.setState({task: { id: 0, desp: '', status: "PLANNED" }});
        }        
    }

    render() {
        let { task } = this.state;

        return (
            <form className="row p-1 border-bottom" onSubmit={this.handleFormSubmit}>
                <div className="col-2">
                    <input type="number" className="form-control" value={task.id} name="id" onChange={this.setField}/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" value={task.desp} name="desp" onChange={this.setField}/>
                </div>
                <div className="col-3">
                    <select className="form-control" value={task.status} name="status" onChange={this.setField}>
                        <option value="PLANNED">PLANNED</option>
                        <option value="DONE">DONE</option>
                    </select>
                </div>
                <div className="col-2">
                    <button className="btn btn-sm btn-primary">
                        {task.isEditable?"SAVE":"ADD"}
                    </button>
                    <button className="btn btn-sm btn-danger" type="button" onClick={this.reset}>
                        {task.isEditable?"CANCEL":"RESET"}
                    </button>
                </div>
            </form>
        );
    }
}

export default TaskFormRow;
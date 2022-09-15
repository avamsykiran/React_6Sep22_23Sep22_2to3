import {Component} from 'react'

class CounterCC extends Component {
    constructor(props){
        super(props);
        this.state={
            steps:0,
            laps:0
        }
    }

    componentDidMount(){
        this.setState({steps:1});
    }

    componentDidUpdate(){
        if(this.state.steps<0){
            this.setState({steps:0});
        }else if(this.state.steps===10){
            this.setState({steps:0,laps:this.state.laps+1});
        }
    }

    stepUp = event => this.setState({steps:this.state.steps+1})
    
    stepDown = event => this.setState({steps:this.state.steps-1})

    render(){
        let {steps,laps} = this.state;

        return (
            <div className="col mx-auto text-center">                
                <button onClick={this.stepUp} className='btn btn-sm btn-primary'><strong>++</strong></button>
                <strong> {steps} / {laps} </strong> 
                <button onClick={this.stepDown} className='btn btn-sm btn-secondary'><strong>--</strong></button>
            </div>
        );
    }
}

export default CounterCC;
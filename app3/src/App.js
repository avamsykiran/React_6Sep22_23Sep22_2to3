import CounterCC from "./components/CounterCC";
import CounterFC from "./components/CounterFC";

const App = () => (
  <div className="container-fluid p-4">
    <h3>Life Cycle Methods Demo and Hooks Demo</h3>
    <div className="col-sm-6 mx-auto mt-4 p-4">
      <div className="row">
        <CounterCC />
        <CounterFC />
      </div>
    </div>
  </div>
)

export default App;

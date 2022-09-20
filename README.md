ReactJS
---------------------------------------------------------------------

    is a javascrpt library to develop single page applications.

    Pre-Requisites

        HTML 5
            All html typography elements
            Form Controls and Validation Attributes
            Media Elements
            Html 5 api - WebStorage.

        CSS  3
            css - proeprties of text,img,table,list,box-model
            selectors

        Bootstrap 5 (optional)

        Javascript (ECMAScript 6)
            JS standard classes like String,Math,Object ..etc.,
            JS Functions    function, closure, call back, arrow function
            JS Arrays       array, type of arrays, array prototype functions like reduce,filter,find,sort ..etc
            JS OOP          class, object, constructor, member functions, static functions, prototypes, inheretence
            JS Asynchronous async and await, Promsie, setTimeout, setInterval ..etc
            ES6 Concepts    modules, template literals, spreed operator, for each, rest params, default params,
                            destructured assignemnt.

    Lab Setup

        NodeJS      > 14        node --version
        VSCode      latest

    Single Page Application

        Server                                                  Client / Browser

            spa-bundle          <-----------------First REQ--
            (index.html + JS)   -----spa-bundle (RESP)------------> the index.html is loaded along with
                                                                    the assosiated JS code.

                                                                    any event, link, form submition..etc
                                                                    are handled on the client itself
                                                                    by the JS code.

                                                                    the js will generate the html and will
                                                                    replace the html on the index.html with
                                                                    new one when ever needed and to what ever extent
                                                                    needed.

            Rest api            <--------------------REQ---------- whenever the app needs data or data related operation...
                            --------------data.xml/data.json -----> that data is received by the JS code ....

    Why NodeJS?

        1. compose the code                                     IDE             VSCode
        2. compile, manage dependencies, package the code       build tool      npm
        3. test your app                                        testing tool    jest

        tool slike npm or jest are javascript based tools needed on the developer machine.
        hence we need NodeJS on the developer machine.

   Creating a ReactJS project

        npx create-react-app app-name

    To execute 

        npm start

    To test

        npm test

    To build

        npm build

    React Components

        A component is a user - defiend html element (tag).

        component = state + props + behaviours + template

            state       is used to hold data related to the component.
            props       are attributes of the custom-tag an used to share data from parent component
                        to the child component.
            behaviours  are methods used to handlke the events in the component.
            template    is the html dom to be rendered on the screen for this component.

        Class Components

            class Dashboard extends React.Component{
                constructor(props){
                    super(props);
                    this.state = {};                    
                }

                render(){
                    return aSingleJSXElement;
                }
            }

            <Dashboard />

        Functional Components

            also known as state-less component is a javascript function that returns a JSXElement and
            may accept the props

            const MyComp = () => <div></div> ;

        High Order Components

    JSX -   Javascript eXtended.

        it is a combination of javascript + html.

        javascript

            let message = "Hello welcome everybody";
            let pObj = document.createElement("p");
            p.textContent = message;

            let friends = ["Vamsy","Sagar","Srinu","Suseela"];

            let domObj = null;

            if(!friends || friends.length===0){
                domObj = document.createElement("p");
                domObj.textContent = "No friends to display";
            }else{
                domObj = document.createElement("ol");
                for(let f of friends){
                    let liObj = document.createElement("li");
                    liObj.textContent=f;
                    domObj.append(liObj);
                }
            }

        JSX

            let message = "Hello welcome everybody";
            let pObj = <p>{message}</p> ;

            
            let friends = ["Vamsy","Sagar","Srinu","Suseela"];

            let domObj = (!friends || friends.length===0) ?
                            <p>No friends to display </p> :
                            (
                                <ol>
                                    {friends.map(f => <li>{f}</li>)}
                                </ol>
                            );

            'class' attribute is not allowed, 'className' is used instead.
            all html elements are to be in lower-case
            all built-in or custome react elements must be init-caped.

    Assignemnt#1: Create a react app to display the below data on table:

        emps : [
            {id:101,firstName:'Vamsy',lastName:'Aripaka',salary:55600,joinDate:new Date('2022-01-01')},
            {id:102,firstName:'Suseela',lastName:'Aripaka',salary:45600,joinDate:new Date('2021-01-01')},
            {id:103,firstName:'Sagar',lastName:'Aripaka',salary:35600,joinDate:new Date('2022-01-01')},
            {id:104,firstName:'Indhikaa',lastName:'Aripaka',salary:85600,joinDate:new Date('2020-01-01')},
            {id:105,firstName:'Srinu',lastName:'Dachepalli',salary:65600,joinDate:new Date('2020-01-01')}
        ];

    React State

        State is not directly mutable or is directly immutable.
        React.Component offers 'setState({field:value})' and only using this method
        we can mofiy the state of a component.
        'setState' should not be called insdie the 'render' method.

    React Component Life Cycle

        constructor()
                ↓
            render()
                | 
                ↓
        componentDidMount()
                | 
                ↓
                |-------------------------------------------------------|
                |  nothing happend until some event occurs              |←----------|
                |   if an event that occured has invoked setState ?     |           |
                |-------------------------------------------------------|           |
                                |                                                   |
                                ↓                                                   |
                            render()                                                |
                                |                                                   |
                                ↓                                                   |
                        componentDidUpdate()                                        |
                                |--------------------------------------------------→|

    React Hooks

        a Hook is a function from react library that provides state management and
        life cycle methods for functional components.

        useState            is a fucntion that accepts an initial value for a field
                            and an array of two items - [reader,writer]

                            reader is sued to read teh valeu of the field
                            writer is sued to chagne the value of the field and
                            each time writer is used, the component get rendered again.

                            let [x,setX] = useState(0)

                            console.log(x);
                            setX(100);

        useEffect(callBack,arrayOfDependencies)

            if the arrayOfDependencies is empty, then the callBack is equal to componentDidMount
                        means that the callBack executes once after the first render()

            if the arrayOfDependencies has any fields, then the callBack is equal to componentDidUpdate
                        means that the callBack exeuvtes everytime after the render() and
                            when the field in the arrayOfDependencies get modifed.

    Central State Managment Using Redux

        npm install redux react-redux --save

        redux is a state management tool.

            store       is a global object that holds all the state of the applciation.
                        and one app will have only one store.

                        const myStore = createStore(myReducer);

            reducer     is a pure javascript function that takes oldState and action
                        as params and returns the modifiedState.

                        const reducer  = (oldState,action) => {
                            //we have to write code to modify the oldState into modifiedState
                            //based on the action.
                            return modifeidState;
                        }

            action      is an object that indicates what operation shall be
                        done on the oldState. This action object has two properties
                            type        the operation like add or delete or update ...etc.,
                            payload     the data needed to complete the operation.

                        const action = { type:'',payload:null } ;

            disptach    is a method used by components to send an action to the reducer


        react-redux is a library used to integration redux with react components.

            Provider        is a in-built component sued to wrap a state 
                            around the top-level component.

                                <Provider store={myStore}>
                                    <App />
                                </Provider>

            useSelector     is a hook used to extract requried portion of the state from the store.

                            let shoppingList = useSelector( state => state.shoppingCart )

            useDisptach     is a hook used to extract the 'dispatch' method.

                            cosnt dispatch = useDispatch();


            store   -------(state)-----------------------------------
            ↑                                       |               |
            |                                       |               |
            |                                   useSelector     useSelector
            |                                       ↓               ↓
            |                                   Component1      Component2
            |                                       |               |               
            |                                       |               |
            |                                   useDispatch       useDispatch
            |                               dispatch(action)     dispatch(action)
            |                                       |               |
            |                                       ↓               ↓
            |---(modified state)--- reducer ←---(action)-------------

    json-server

        npm install json-server --save

        json-server --watch ./data.json --port 9090


    Integrating Rest-api using axios

        npm install axios --save

        axios.get(url)  : Promise
        axios.put(url,reqBody)  : Promise
        axios.post(url,reqBody)  : Promise
        axios.delete(url)  : Promise

    Integrating axios with redux using redux-thunk

        npm install redux-thunk --save

        actionThunks        are function that return a function.

        action can an object or a function.

            store   -------(state)-----------------------------------
            ↑                                       |               |
            |                                       |               |
            |                                   useSelector     useSelector
            |                                       ↓               ↓
            |                                   Component1      Component2
            |                                       |               |               
            |                                       |               |
            |                                   useDispatch       useDispatch
            |                             dispatch(actionObj)  dispatch(actionFunction)
            |                                       |               |
            |                                       ↓               |
            |---(modified state)--- reducer ←-|←-(actionObj)      ----------(action Fucntion)----------
                                              |                   |                                   |
                                              |←-(waitActionObj)--|   dispatch(waitActionObj)         |
                                              |                   | axiosCall                         |
                                              |←-(dataActionObj)--|     .then(...)                    |  
                                              |←-(errActionObj)---|     .catch(...)                   |  
                                                                  |                                   |
                                                                  -------------------------------------  

const Home = () => {
    return (
        <section className="container-fluid p-4">
            <h4>Hai! We welcome you to our reactjs SPA!</h4>

            <p className='alert alert-info fs-bold p-4'>
                <strong>SPA - Single Page Application </strong> is an application
                that has only one page and each and every activity happens with -in
                that page. The javascript assosiated with that page handles all events
                and user operations including back-end commincation and dynamically
                alters the html content of that page.
            </p>

            <p>This demo appliction is a task maangement app. The app offers create, retrive , 
                update and delete operations of taks for a user through which one can track the 
                tasks and their completion status.
            </p>

            <p> AXIOS is employed for rest-api calls and the json-server is serving
                the fake rest end points for this demo application. 
            </p>

            <p> Redux and Redux Thunk are employed for centraliuzed state management.</p>
        </section>
    );
};

export default Home;
import './App.scss';
import routes from "./routes";

function App(props) {
    console.log("props", props);
    return (
        <>
            { routes }
        </>
    );
}

export default App;
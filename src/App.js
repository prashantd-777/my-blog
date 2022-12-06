import {
    Route, BrowserRouter, Routes
} from "react-router-dom";
import Login from "./Pages/Login";
import Layout from "./Layout";
import './App.scss';

function App() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<Layout/>}/>
                    <Route exact path={"/login"} element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
import {
    Route, BrowserRouter, Routes
} from "react-router-dom";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Layout from "./Layout";
import './App.scss';

function App() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<Layout/>}/>
                    <Route exact path={"/login"} element={<Login/>}/>
                    <Route exact path={"/register"} element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
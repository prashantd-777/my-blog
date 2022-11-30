import './App.scss';
import {
    Route, BrowserRouter, Routes
} from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/dashboard";

function App() {
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<Dashboard/>}/>
                    <Route exact path={"/login"} element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
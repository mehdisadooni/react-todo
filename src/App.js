import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

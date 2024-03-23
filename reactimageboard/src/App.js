import './App.css';

import {
    Route, Routes, BrowserRouter
} from "react-router-dom";
import Information from "./Information";
import PostPage from "./PostPage";
import HighScores from "./HighScores";
import NavigationBar from "./NavBar";

function App() {
    return (
        <>
            <div className="holder">
                <BrowserRouter>
                    <NavigationBar />
                    <Routes>

                        <Route path="/" element={<HighScores contentPage={0}/>}/>

                        <Route path="/post/:id" element={<PostPage/>}/>
                        <Route path="/post/0" element={<Information/>}/>
                        <Route path="/about" element={<Information/>}/>

                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;

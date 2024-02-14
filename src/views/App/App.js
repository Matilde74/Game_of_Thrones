import React from "react";
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";
import Houses from "../Houses/Houses";
import Characters from "../Characters/Characters";
import CharacterDetail from "../CharacterDetail/CharacterDetail";
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {

    return (
        <BrowserRouter>
            <MainTemplate
                footerCourseName="Tecnologie e Applicazioni dei Sistemi Distribuiti"
                footerCourseLink="https://elearning.unimib.it/course/index.php?categoryid=3588"
            >
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Houses' element={<Houses/>}/>
                    <Route path='/Characters' element={<Characters/>}/>
                    <Route path="/Characters/:number" element={<CharacterDetail/>}/>

                </Routes>
            </MainTemplate>
        </BrowserRouter>

    );
}
export default App;

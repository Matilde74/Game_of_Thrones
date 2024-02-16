import React from "react";
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";
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
                    <Route path='/characters' element={<Characters/>}/>
                    <Route path="/characters/:number" element={<CharacterDetail/>}/>

                </Routes>
            </MainTemplate>
        </BrowserRouter>

    );
}
export default App;

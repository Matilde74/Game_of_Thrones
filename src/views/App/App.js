import React from "react";
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";
import Characters from "../Characters/Characters";
import CharacterDetail from "../CharacterDetail/CharacterDetail";
import Info from "../Info/Info";
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
    const nav = [
        {url: "/", text: "Home", exact: true},
        {url: "/characters", text: "Characters", exact: false},
        {url: "/info", text: "Info", exact: true}
    ];

    return (
        <BrowserRouter basename="game_of_thrones">
            <MainTemplate
                footerCourseName="Teoria e Tecnologia della Comunicazione"
                footerCourseLink="https://elearning.unimib.it/course/index.php?categoryid=3588"
                navItems={nav}
            >
                <Routes>
                    <Route path="/matilde74.github.io" element={<Home/>}/>
                    <Route path="/characters" element={<Characters/>}/>
                    <Route path="/characters/:number" element={<CharacterDetail/>}/>
                    <Route path="/info" element={<Info/>}/>
                </Routes>
            </MainTemplate>
        </BrowserRouter>

    );
}
export default App;

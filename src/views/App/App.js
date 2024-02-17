import React from "react";
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Home from "../Home/Home";
import Characters from "../Characters/Characters";
import CharacterDetail from "../CharacterDetail/CharacterDetail";
import Info from "../Info/Info";
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
    const nav = [
        {url: "/matilde74.github.io/game_of_thrones/", text: "Home", exact: true},
        {url: "/matilde74.github.io/game_of_thrones/characters", text: "Characters", exact: false},
        {url: "/matilde74.github.io/game_of_thrones/info", text: "Info", exact: true}
    ];

    return (
        <BrowserRouter>
            <MainTemplate
                footerCourseName="Teoria e Tecnologia della Comunicazione"
                footerCourseLink="https://elearning.unimib.it/course/index.php?categoryid=3588"
                navItems={nav}
            >
                <Routes>
                    <Route path='/matilde74.github.io/game_of_thrones' element={<Home/>}/>
                    <Route path='/matilde74.github.io/game_of_thrones/characters' element={<Characters/>}/>
                    <Route path="/matilde74.github.io/game_of_thrones/characters/:number" element={<CharacterDetail/>}/>
                    <Route path="/info" element={<Info/>}/>
                </Routes>
            </MainTemplate>
        </BrowserRouter>

    );
}
export default App;

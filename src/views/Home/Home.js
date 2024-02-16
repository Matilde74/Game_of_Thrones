import React from "react";
import HousesData from "../../assets/data/houses.json";
import CharactersCard from "../../components/CharactersCard/CharactersCard";
import {NavLink} from "react-router-dom";
import style from "./Home.module.css";



function Home (){
    const HouseCardsCol = HousesData.map((house) => {
        return (
            <div key={house.id} className='col-2'>
                <NavLink to={`/characters`} >
                    <CharactersCard
                        name={house.name}
                        image={house.imageUrl}
                     />
                </NavLink>
                

            </div>
        )
    });


    return (
        <div className={style.prova}>
            <div className="container">
                <div className="row">
                    <div className="col d-flex align-items-center justify-content-center">
                        <NavLink className="button" to="/characters"> Discover the Characters!</NavLink>
                    </div>

                </div>
                <div className="row pt-5 ">
                    <div className="col text-center h5 d-flex align-items-center justify-content-evenly pt-5">
                        {HouseCardsCol.slice(0,4)}
                    </div>

                </div>

                <div className="row ">
                    <div className="col text-center h5 d-flex align-items-center justify-content-evenly px-0">
                        {HouseCardsCol.slice(4,7)}
                    </div>
                </div>
            </div>
        </div>

    )
};



export default Home;
import React from "react";
import HousesData from "../../assets/data/houses.json";
import {NavLink} from "react-router-dom";
import style from "./Home.module.css";
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";
import {characterDefaultImage} from "../../utility/utility";



function Home (){
    const HouseCardsCol = HousesData.map((house) => {
        return (
            <div className="col-2 shadow">
                <NavLink to={"/characters/"}>
                    <Card className={style.card}>
                      <CardImg onError={(event) => characterDefaultImage(event)} loading="lazy"
                             className={style.img} src={house.imageUrl} alt={house.name}/>
                      <CardBody className="text-center justify-content-center align-items-center">
                            <CardTitle className={style.cardtitle}>{house.name} </CardTitle>

                      </CardBody>
                    </Card>
                </NavLink>
            </div>
        )
    });


    return (
        <div className={style.space}>
            <div className= "container">
                <div className="row">
                    <div className="col d-flex align-items-center justify-content-center ">
                        <NavLink className={style.button} to="/characters"> Discover the Characters</NavLink>
                    </div>

                </div>
                <div className="row ">
                    <div className="col h5 d-flex align-items-center justify-content-evenly pt-5">
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
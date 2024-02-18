import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {characterDefaultImage} from "../../utility/utility";
import style from './CharactersCard.module.css';

function CharactersCard(props) {
    const {firstname, lastname, image,} = props;

    return (
        <div>
            <Card className={style.card}>
                <CardImg onError={(event) => characterDefaultImage(event)} loading="lazy"
                         className={style.img} src={image} alt={firstname + lastname}/>
                <CardBody className="text-center justify-content-center align-items-center">
                    <CardTitle className={style.cardtitle}>{firstname} </CardTitle>
                    <CardTitle className={style.cardtitle}>{lastname} </CardTitle>

                </CardBody>
            </Card>
        </div>
    )
}

export default CharactersCard;
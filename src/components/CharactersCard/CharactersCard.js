import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {characterDefaultImage} from "../../utility/utility";
import style from './CharactersCard.module.css';

function CharactersCard(props) {
    const {name, image, house, title} = props;

    return (
        <div>
            <Card className={style.card}>
                <CardImg onError={(event) => characterDefaultImage(event)} loading="lazy"
                         className="w-75 align-self-center justify-content-center" src={image} alt={name}/>
                <CardBody className="text-center">
                    <CardTitle className="pb-3">{name} </CardTitle>
                    <CardText>

                        {house}
                    </CardText>
                    <CardText>
                        {title}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default CharactersCard;
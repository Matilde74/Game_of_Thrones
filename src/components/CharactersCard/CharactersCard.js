import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {characterDefaultImage} from "../../utility/utility";
//import {NavLink} from "react-router-dom";//

function CharactersCard(props) {
    const {name, image, house} = props;

    return (
        //<NavLink to={`/pokedex/${number}`}>//
            <Card>
                <CardImg onError={(event) => characterDefaultImage(event)} loading="lazy" top
                         width="100%" src={image} alt={name}/>
                <CardBody className="text-center">
                    <CardTitle>{name}</CardTitle>
                    <CardText>
                        {house}
                    </CardText>
                    <div>
                    </div>
                </CardBody>
            </Card>
        //</NavLink>//
    )
}

export default CharactersCard;
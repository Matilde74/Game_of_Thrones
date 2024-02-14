import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {characterDefaultImage} from "../../utility/utility";
import {NavLink} from "react-router-dom";

function CharactersCard(props) {
    const {name, image, house, title, number} = props;

    return (
        <NavLink to={`/Characters/${number}`}>
            <Card>
                <CardImg onError={(event) => characterDefaultImage(event)} loading="lazy"
                         width="100%" src={image} alt={name}/>
                <CardBody className="text-center">
                    <CardTitle>{name}</CardTitle>
                    <CardText>
                        {house}
                    </CardText>
                    <CardText>
                        {title}
                    </CardText>
                    <div>
                    </div>
                </CardBody>
            </Card>
        </NavLink>
    )
}

export default CharactersCard;
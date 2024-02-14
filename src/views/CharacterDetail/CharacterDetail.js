import React from "react";
import CharactersListData from "../../assets/data/characters.json";
import {characterDefaultImage} from "../../utility/utility";
import {getcharacterQuote} from "../../utility/utility";
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    CardSubtitle
} from "reactstrap";
import { useParams} from "react-router-dom";

function CharacterDetail () {
    let {number} = useParams();
    let id = parseInt(number);

    const currentCharacter= CharactersListData.filter((character) =>
        character.id === id
    )[0];



    return (
        <Card
            style={{
                width: '18rem'
            }}
        >
            <CardBody>
                <CardTitle tag="h5">
                    {currentCharacter.fullName}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {currentCharacter.family}
                </CardSubtitle>
            </CardBody>
            <img
                alt={currentCharacter.fullName}
                src={currentCharacter.imageUrl}
                width="100%"
            />
            <CardBody>
                <CardText>
                    {getcharacterQuote(currentCharacter.fullName)}
                </CardText>
            </CardBody>
        </Card>
    )
}
export default CharacterDetail;
















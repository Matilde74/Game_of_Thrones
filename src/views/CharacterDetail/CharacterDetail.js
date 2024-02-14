import React, {useEffect, useState} from "react";
import CharactersListData from "../../assets/data/characters.json";
import {characterDefaultImage} from "../../utility/utility";
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

    const [characterQuote, setCharacterQuote] = useState([]);

    const quoteName = (firstName) => currentCharacter.firstName.toLowerCase();

    useEffect(() => {

        let isMounted = true;

        fetch(`https://api.gameofthronesquotes.xyz/v1/author/${quoteName()}`)
            .then(res => res.json())/*Quando arriva la risposta, la interpeta come json*/
            .then(res => { /*prende la risposta*/

                if (isMounted)
                    setCharacterQuote(res);
            })
            .catch((error) => console.log("Error" + error));


        return () => {
            isMounted = false;
        }

    }, [id]);

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
                    {characterQuote.sentence}
                </CardText>
            </CardBody>
        </Card>
    )
}
export default CharacterDetail;

















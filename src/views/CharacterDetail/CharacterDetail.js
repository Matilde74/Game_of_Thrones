import React, {useEffect, useState} from "react";
import CharactersListData from "../../assets/data/characters.json";
import {characterDefaultImage} from "../../utility/utility";
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    CardSubtitle,
} from "reactstrap";
import {NavLink, useParams} from "react-router-dom";

function CharacterDetail () {
    let {number} = useParams();
    let id = parseInt(number);

    const currentCharacter= CharactersListData.filter((character) =>
        character.id === id
    )[0];


    const [characterQuote, setCharacterQuote] = useState([]);
    const [characterData, setCharacterData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [spouse, setSpouse] = useState([]);

    const quoteName = (firstName) => currentCharacter.firstName.toLowerCase();
    let dataName = (fullName) => currentCharacter.id_API;

    useEffect(() => {

        let isMounted = true;

        fetch(`https://api.gameofthronesquotes.xyz/v1/author/${quoteName()}`)
            .then(res => res.json())/*Quando arriva la risposta, la interpeta come json*/
            .then(res => { /*prende la risposta*/

                if (isMounted)
                    setCharacterQuote(res);


            })
            .catch((error) => console.log("Error" + error));

        fetch(`https://www.anapioficeandfire.com/api/characters/${dataName()}`)
            .then(res => res.json())/*Quando arriva la risposta, la interpeta come json*/
            .then(res => { /*prende la risposta*/

                if (isMounted)
                   setCharacterData(res);
                    console.log(res);
                    setIsLoading(false);
            })
            .catch((error) => console.log("Error" + error));


        if (characterData.spouse !== "") {
            fetch(characterData.spouse)
                .then(res => res.json())
                .then(res => {
                    // Puoi gestire i dati del coniuge qui
                    setSpouse(res);
                    console.log(res);
                })
                .catch((error) => console.log("Errore nel recupero dei dati del coniuge:", error));
        } else setSpouse('');





        return () => {
            isMounted = false;
        }

    }, [id, characterData.spouse]);




    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div>

                        {id - 1 !== 0 &&
                            <NavLink
                                     to={`/Characters/${id - 1}`}>&lt; Prev</NavLink>
                        }

                        {id + 1 <= Object.keys(CharactersListData).length &&
                            <NavLink
                                     to={`/Characters/${id + 1}`}>Next &gt;</NavLink>
                        }

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                {currentCharacter.firstName + " " + currentCharacter.lastName}
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
                            <CardText className="fst-italic">
                                {
                                    characterQuote.sentence
                                }
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <div>

                            {characterData.born && characterData.born != "" &&
                                <div>
                                    Born: {characterData.born}
                                </div>
                            }


                            {characterData.titles && characterData.titles != "" &&
                                <div> Titles:
                                    <ul>
                                        {characterData.titles.map ((element, index) => (
                                            <li key={index}> {element}</li>
                                        ))}
                                    </ul>
                                </div>

                            }


                            {characterData.aliases && characterData.aliases != "" &&
                                <div> Aliases:
                                    <ul>
                                        {characterData.aliases.map((element, index) => (
                                            <li key={index}> {element}</li>
                                        ))}
                                    </ul>
                                </div>
                            }

                            {characterData.spouse !== "" &&
                                <div> Spouse: {spouse.name}</div>
                            }

                            {spouse.titles  && spouse.titles != "" &&
                                <ul>
                                    {spouse.titles.map((element, index) => (
                                        <li key={index}> {element}</li>
                                    ))}
                                </ul>
                            }



                            <div> TV Series: </div>

                            {characterData.tvSeries && characterData.tvSeries != "" &&
                                <ul>
                                    {characterData.tvSeries.map((element, index) => (
                                        <li key={index}> {element}</li>
                                    ))}
                                </ul>
                            }


                            {characterData.playedBy && characterData.playedBy != "" &&
                                <div>
                                    Played by:
                                    <ul>
                                        {characterData.playedBy.map((element, index) => (
                                            <li key={index}> {element}</li>
                                        ))}
                                    </ul>
                                </div>

                            }








                        </div>


                        )}

                </div>
            </div>
        </div>

    )
}
export default CharacterDetail;

















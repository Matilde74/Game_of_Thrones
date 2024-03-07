import React, {useEffect, useState} from "react";
import CharactersListData from "../../assets/data/characters.json";
import style from "./CharacterDetail.module.css";
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    CardSubtitle,
    CardHeader,
    ListGroup,
    ListGroupItem
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
    let dataName = (id_API) => currentCharacter.id_API;

    useEffect(() => {

        let isMounted = true;

        setCharacterQuote([]);
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
        <div className={style.sfondo}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div>

                            {id - 1 !== -1 &&
                                <NavLink className="button ms-5"
                                         to={`/Characters/${id - 1}`}> &lt; Prev</NavLink>
                            }

                            {id + 1 <= CharactersListData.length - 1 &&
                                <NavLink className="button me-5 float-end"
                                         to={`/Characters/${id + 1}`}>Next &gt;</NavLink>
                            }

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex align-items-baseline justify-content-center">
                        <Card
                            style={{
                                width: '18rem'
                            }}
                            className={style.card}
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
                            <img className={style.img}
                                 alt={currentCharacter.fullName}
                                 src={currentCharacter.imageUrl}
                                 width="100%"
                            />
                            <CardBody>
                                <CardText className={style.italic}>
                                    {characterQuote.sentence && characterQuote.sentence !== "" &&
                                        <div>
                                            {characterQuote.sentence}
                                        </div>
                                    }
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col pt-3">
                        {isLoading ? (
                            <div>Loading...</div>
                        ) : (
                            <Card
                                style={{
                                    width: '18rem'
                                }}
                                className={style.card}
                            >
                                <CardHeader>
                                    Titles
                                </CardHeader>
                                <CardBody className="text-decoration-none">
                                    {characterData.titles && characterData.titles != "" &&
                                        <CardText className={style.list}>
                                            <ul>
                                                {characterData.titles.map ((element, index) => (
                                                    <li key={index}> {element}</li>
                                                ))}
                                            </ul>
                                        </CardText>
                                    }
                                </CardBody>
                            </Card>)}
                            <ListGroup className={style.group}>

                                {characterData.born && characterData.born !== "" &&
                                    <ListGroupItem className={style.list}>
                                        <p>Born:</p> {characterData.born}
                                    </ListGroupItem>
                                }





                                {characterData.aliases && characterData.aliases != "" &&
                                    <ListGroupItem className={style.list}>
                                        <p> Aliases: </p>
                                        <ul>
                                            {characterData.aliases.map((element, index) => (
                                                <li key={index}> {element}</li>
                                            ))}
                                        </ul>
                                    </ListGroupItem>
                                }

                                {characterData.spouse !== "" && spouse.titles  && spouse.titles != "" &&
                                    <ListGroupItem className={style.list}>
                                        <p>Spouse: </p> <div className={style.italic}>{spouse.name}</div>
                                        <ul>
                                            {spouse.titles.map((element, index) => (
                                                <li key={index}> {element}</li>
                                            ))}
                                        </ul>
                                    </ListGroupItem>
                                }


                                {characterData.tvSeries && characterData.tvSeries != "" &&
                                    <ListGroupItem className={style.list}>
                                        <p>TV Series:</p>
                                        <ul>
                                            {characterData.tvSeries.map((element, index) => (
                                                <li key={index}> {element}</li>
                                            ))}
                                        </ul>
                                    </ListGroupItem>

                                }


                                {characterData.playedBy && characterData.playedBy != "" &&
                                    <ListGroupItem className={style.list}>
                                        <p>Played by:</p>
                                        <ul>
                                            {characterData.playedBy.map((element, index) => (
                                                <li key={index}> {element}</li>
                                            ))}
                                        </ul>
                                    </ListGroupItem>

                                }
                            </ListGroup>
                        )}
                    </div>
                </div>
            </div>
        </div>


    )
}
export default CharacterDetail;

















import React from "react";
import CharactersCard from "../CharactersCard/CharactersCard";
import {NavLink} from "react-router-dom";

function CharactersCardsGrid(props) {
    const {CharactersList, col} = props;


    const CharactersCardsCol = CharactersList.map((character) => {
        return (
            <div key={character.id} className=" d-flex align-items-center justify-content-center">
                <NavLink to={`/characters/${character.id}`}>
                    <CharactersCard
                       name={character.fullName}
                       image={character.imageUrl}
                       house={character.family}
                       title={character.title}
                 />
                </NavLink>
            </div>
        )
    });

    return (
        <div className={`row 
                row-cols-${col.xs}
                row-cols-sm-${col.sm}
                row-cols-md-${col.md}
                row-cols-lg-${col.lg}
                row-cols-xl-${col.xl}
                
        `}>
            {CharactersCardsCol}
        </div>
    )
}

export default CharactersCardsGrid;



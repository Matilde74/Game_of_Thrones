import React from 'react';
//import CharactersTable from "../../components/PokemonTable/PokemonTable";//
import CharactersCardsGrid from "../../components/CharactersCardsGrid/CharactersCardsGrid";
import CharactersListData from "../../assets/data/characters.json";

function Characters() {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <CharactersCardsGrid
                        CharactersList={CharactersListData}
                        col={{xs:1, sm:2, md:3, lg:4, xl:5}}
                    />
                </div>
            </div>

        </div>

    )

}

export default Characters;
import React, {useState} from 'react';
import style from "./Characters.module.css";
import CharactersCardsGrid from "../../components/CharactersCardsGrid/CharactersCardsGrid";
import CharacterTable from "../../components/CharacterTable/CharacterTable";
import FilterButton from "../../components/FilterButton/FilterButton";
import CharactersListData from "../../assets/data/characters.json";
import clsx from 'clsx';

function Characters() {
    const [displayGrid, setDisplayGrid] = useState("true");
    const [filter, setFilter] = useState('Tutti');

    const filteringMap = {
        Tutti: () => true,
        Stark: characters => characters.family === "House Stark of Winterfell" && characters.hide(characters.family !== "House Stark of Winterfell"),
        Targaryen: characters => characters.family === "House Targaryen of King's Landing",
        Lannister: characters => characters.family === "House Lannister of Casterly Rock",
        Baratheon: characters => characters.family === "House Baratheon of Storm's End",
        Greyjoy: characters => characters.family === "House Greyjoy of Pyke",
        Martell: characters => characters.family === "House Nymeros Martell of Sunspear",
        Tyrell: characters => characters.family === "House Tyrell of Highgarden",
    }

    const filterName = Object.keys(filteringMap);
    const filteredCharacters = CharactersListData.filter(filteringMap[filter]);


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">

                    <div className={style.switch}>

                        <div className={clsx(style.option, {[style.active]: displayGrid})}
                             onClick={() => setDisplayGrid(true)}>
                            Grid
                        </div>

                        <div className={clsx(style.option, {[style.active]: !displayGrid})}
                             onClick={() => setDisplayGrid(false)}>
                            Table
                        </div>

                    </div>


                </div>
            </div>
            <div className="row">
                <div className=" d-flex justify-content-between">
                    {filterName.map (filterName => {
                            return (
                                <FilterButton
                                    key={filterName}
                                    name={filterName}
                                    pressed={filterName === filter}
                                    setFilter={setFilter}
                                />
                            )
                        }
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {displayGrid ?
                        <CharactersCardsGrid
                            CharactersList={filteredCharacters}
                            col={{xs:1, sm:2, md:3, lg:4, xl:5}}
                        /> :
                        <CharacterTable
                            CharactersList = {filteredCharacters}
                        />

                    }
                </div>
            </div>

        </div>

    )

}

export default Characters;
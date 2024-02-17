import React from "react";
import {NavLink} from "react-router-dom";
import {characterDefaultImage} from "../../utility/utility";
import style from "./CharacterTable.module.css";

function CharacterTable(props) {
    const {CharactersList} = props;

    const CharacterTr = CharactersList ? CharactersList.map((character) => {
        return (
            <tr key={character.id}>
                <td >
                    <img onError={(event) => characterDefaultImage(event)} src={character.imageUrl}
                         alt={character.fullName} className={style.img}
                         loading="lazy"
                    />
                </td>
                <td>{character.fullName}</td>
                <td>{character.family}</td>
                <td>{character.title}</td>
                <td><NavLink to={`/characters/${character.id}`}  className="button">Know More</NavLink></td>
            </tr>
        );
    }) : null;

    return (
        <table>
            <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Family</th>
                <th>Title</th>
                <th>Info</th>
            </tr>
            </thead>
            <tbody>
            {CharacterTr}
            </tbody>
        </table>
    )
}

export default CharacterTable;
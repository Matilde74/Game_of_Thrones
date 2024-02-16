import React from 'react';
import Button from "../Button/Button"

function FilterButton (props) {
    return (
        <Button
            type={props.pressed ? 'default' : 'outlined'}
            text={props.name}
            onClick={() => props.setFilter(props.name)}
        />
    )
}

export default FilterButton
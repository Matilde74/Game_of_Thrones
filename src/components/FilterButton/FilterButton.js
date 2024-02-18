import React from 'react';

function FilterButton (props) {
    return (
        <div className="buttonWrapper">
            <button
                className={props.pressed ? 'default' : 'outlined'}
                onClick={props.setFilter(props.name)}
            >
                {props.name}
            </button>
        </div>
    )
}

export default FilterButton


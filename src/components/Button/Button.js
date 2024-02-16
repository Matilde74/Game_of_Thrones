import React from 'react'


function Button ({ text, type, onClick }) {
    return (
        <div className="buttonWrapper">
            <button
                className={`button ${type || 'default'}`}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}

export default Button
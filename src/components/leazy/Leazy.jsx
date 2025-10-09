import React from 'react'
import "./leazy.scss"
import { Atom } from 'react-loading-indicators'

const Leazy = () => {
    return (
        <div className='leazy'>
            <div className="leazy-card">
                <Atom color={["#b19f00", "#e4cd00", "#ffe818", "#ffed4b"]} />
            </div>
        </div>
    )
}

export default Leazy
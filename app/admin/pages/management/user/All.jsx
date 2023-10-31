import React from 'react'
import setup from './config/setup'
const { route_prefix } = setup;
function All() {
    return (
        <div>
            <div>
                <a href={`#/${route_prefix}/create`}> Create</a>
            </div>
            all blog
        </div>
    )
}

export default All
import React from 'react'
import setup from './config/setup';
const { route_prefix } = setup;

function Create() {
    return (
        <>
            <a href={`#/${route_prefix}/create`} className='btn btn-success'>back</a>
            <div>Create blog</div>
        </>
    )
}

export default Create
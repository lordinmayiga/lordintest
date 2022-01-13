import React from 'react'
import {Link} from "react-router-dom"

function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <h2>Looks like you're lost. Go <Link to="/">Home</Link></h2>
        </div>
    )
}

export default NotFound

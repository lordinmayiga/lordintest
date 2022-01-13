import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h2>Lordin Mayiga</h2><h1>Site</h1>is<h1>Live, </h1><h1 style={{fontSize: "70px"}}>Baby!</h1>
            <Link to="/quotes">See quotes</Link>
        </div>
    )
}

export default Home

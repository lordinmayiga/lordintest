import React, {useState} from 'react'

function Prasie() {
    const [quote, setQuote] = useState("Being normal is boring")
    const praises = ["Become the president of the united states of America",
     "Be you, everyone else is taken",
    "You better lose yourself to the music",
    "Being normal is boring",
    "It's your moment, you better enjoy it",
    "This love trianlge's got us in a wreck, tangled",
    "Stop clicking me!!!"]
    return (
        <div>
            <h1>{quote}</h1>
            <button onClick={(e)=>setQuote(praises[Math.floor(Math.random()*praises.length)])}>Change Quote</button>
        </div>
    )
}

export default Prasie

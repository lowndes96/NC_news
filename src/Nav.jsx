import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import { getTopics } from "./api"

function Nav() {
    const [allTopics, setAllTopics] = useState([])

    useEffect(()=>{
        getTopics().then((data) => {
            setAllTopics(data.topics)
        })
        .catch((err) => {console.log(err)})
    },[])

    return <nav>
            <Link to='/'className="active" >Home</Link>
        {allTopics.map((topic) => {
            return <Link to='/by-topic' key={topic.slug}>{topic.slug}</Link>
        })}
    </nav>
}

export default Nav
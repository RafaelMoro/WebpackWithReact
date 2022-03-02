import React from 'react'
import {Card} from './Card'
import { useInitialState } from '@utils/getData'
import '@styles/main.css'

const App = () => {
    
    const person = useInitialState()
    
    return(
        <div className="About">
            {person && <Card person={person} />}
        </div>
    )
}

export default App
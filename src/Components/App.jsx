import React from 'react'
import {Card} from './Card'
import { useInitialState } from '../utils/getData'

const App = () => {
    const person = useInitialState()
    return(
        <div className="About">
            <Card person={person} />
        </div>
    )
}

export default App
import React from 'react'

const useInitialState = () => {
    const API = process.env.API;
    const [person, setPerson] = React.useState('')

    React.useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setPerson(data.results[0]))
    }, [])
    return person
}

export {useInitialState}
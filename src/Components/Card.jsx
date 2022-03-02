import React from 'react'

const Card = ({person}) => {
    return (
        <div className="card">
                <div className="card_details">
                    <div className="card_photo center circle">
                        <img src={person.picture.large} alt={person.name.first} />
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" /*style=enable-background:new -580 439 577.9 194;*/>
                            <circle cx="50" cy="50" r="40" />
                        </svg>
                    </div>
                    <p className="card_title">Hi, My name is</p>
                    <p className="card_value">{person.name.first} {person.name.last}</p>
                </div>
                <div className="card_userdata">
                    <ul>
                        <li>{person.email}</li>
                        <li>{person.location.country}</li>
                    </ul>
                </div>
                <div className="card_social">
                    <a href="https://twitter.com/gndx">
                        <img src="" />
                    </a>
                    <a href="https://github.com/gndx">
                        <img src="" />
                    </a>
                    <a href="https://instagram.com/gndx">
                        <img src="" />
                    </a>
                </div>
            </div>
    )
}
export {Card}


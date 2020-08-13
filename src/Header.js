import React from 'react'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <img className="header__logo"
                src="https://previews.123rf.com/images/saicle/saicle1710/saicle171000175/88316421-abstract-tech-futuristic-web-header-banner-dark-blue-vector-background.jpg"
                alt=""
            />
            <div className="centered">
                <h1 className="name_last__name">Roberto Palacios</h1>
            </div>
        </header>

    )
}

export default Header

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import headerStyles from "../styles/header.module.scss"

const Header = ({ siteTitle }) => (
    <header className={headerStyles.header}>
        <h1 className={headerStyles.logo}>Logo</h1>
        <nav>
            <ul className={headerStyles.linklist}>
                <li>
                    <Link to="/" className={headerStyles.linkelements}>Home</Link>
                </li>
                <li>
                    <Link to="/services" className={headerStyles.linkelements}>Services</Link>
                </li>
                <li>
                    <Link to="/products" className={headerStyles.linkelements}>Products</Link>
                </li>
                <li>
                    <Link to="/news" className={headerStyles.linkelements}>News</Link>
                </li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: `Implement Me`,
}

export default Header
import React from "react"
import { Link } from "gatsby"

import footerStyles from "../styles/footer.module.scss"

const Footer = () => (
    <footer>
        <div>
            <p>Lily prototype footer</p>
            <p>Reach out <Link to="/contact">here</Link></p>
        </div>
    </footer>
)

export default Footer
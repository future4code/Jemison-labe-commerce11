import React from "react";
import { FooterPai } from './styled'
import facebook from '../img/facebook.png'
import insta from '../img/insta.png'

function Footer() {
    return (
        <FooterPai>
            <span>
                <h3>Siga-nos nas redes sociais</h3>
            </span>
            <a href="https://www.facebook.com/" target="_blank">
                <img src={facebook} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
                <img src={insta} />
            </a>
        </FooterPai>
    )
}

export default Footer;
import React from "react";
import "./style.css";

function Footer() {
    return (
        <div class="navbar justify-content-center">
            <span class="navbar-brand footer-font text-color">Copyright &copy;2020 | Chase
          Johnston</span>
            <span >
                <a class="fab fa-github fa-lg icon-color pr-3" href="https://github.com/johnstoc13" target="_blank"></a>
                <a class="fab fa-linkedin fa-lg icon-color pr-3" href="https://www.linkedin.com/in/chase-johnston8"
                    target="_blank"></a>
                <a class="fas fa-envelope fa-lg icon-color" href="mailto:chasej@live.com" target="_blank"></a>
            </span>
        </div>
    )
}

export default Footer;
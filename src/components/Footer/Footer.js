import React from "react";
import style from "./Footer.module.css";
import disco from "../../assets/images/disco.png";
import unimib from "../../assets/images/unimib.png";
import {NavLink} from "react-router-dom";

function Footer(props) {
    const {courseName, courseLink, navItems} = props;

    const itemList = navItems.map((item) => {
        return (
            <li key={item.url} className="nav-item px-5">
                <NavLink exact={item.exact}
                         to={item.url}>
                    {item.text}
                </NavLink>
            </li>
        )
    });

    return(
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex align-items-center justify-content-center">
                        <nav>
                            <ul className="nav">
                                {itemList}
                            </ul>

                        </nav>
                    </div>

                    <div className="col-md-auto">
                        <div className={`d-flex ${style.copyright}`}>

                            <div id={style.course}>
                                <a href={courseLink} target="_blank">
                                    {courseName}
                                </a>
                            </div>

                            <div id={style.disco} className={style.logo}>
                                <a href="https://www.disco.unimib.it/it" target="_blank">
                                    <img src={disco} alt="disco"/>
                                </a>
                            </div>

                            <div id={style.unimib} className={style.logo}>
                                <a href="https://www.unimib.it/" target="_blank">
                                    <img src={unimib} alt="unimib"/>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import style from "./Header.module.css"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import {NavLink} from "react-router-dom";

function Header(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args} expand={"lg"} >
                <NavbarBrand href="/" className={style.brand} >
                        Game of Thrones
                </NavbarBrand>
                <div className={style.menu}>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem className="px-2">
                                <NavLink to={"/"} className={style.element} >
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem className="px-2">
                                <NavLink to={"/characters"} className={style.element} >
                                    Characters
                                </NavLink>
                            </NavItem>
                            <NavItem className="px-2">
                                <NavLink to={"/info"} className={style.element} >
                                    Info
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;
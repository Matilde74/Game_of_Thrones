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
    NavLink,
} from 'reactstrap';

function Header(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args} expand={"lg"} >
                <NavbarBrand className={style.brand} href="/">Game of Thrones</NavbarBrand>
                <div className={style.menu}>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem className="px-2">
                                <NavLink className={style.element} to={"https://Matilde74np.github.io/game_of_thrones"}>Home</NavLink>
                            </NavItem>
                            <NavItem className="px-2">
                                <NavLink className={style.element} to={"/characters"}>Characters</NavLink>
                            </NavItem>
                            <NavItem className="px-2">
                                <NavLink className={style.element} to={"/info"}>
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
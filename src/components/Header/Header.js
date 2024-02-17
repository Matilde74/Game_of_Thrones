import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import style from "./Header.module.css";
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
    const [isOpen, setIsOpen, navItems] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const itemList = navItems.map((item) => {
        return (

            <NavLink exact={item.exact}
                     to={item.url}>
                {item.text}
            </NavLink>
        )
    });

    return (
        <div>
            <Navbar {...args} expand={"lg"} >
                <NavbarBrand className={style.brand} href="/">Game of Thrones</NavbarBrand>
                <div className={style.menu}>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem className="px-2">
                                {itemList}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;
import React from "react";
import { Navbar, Dropdown } from "react-bootstrap";
const Header = () => {
    return(
        <>
        <Navbar className="navigation font-weight-bold px-5">
            <a className="fw-bold" href="/">Home</a>
            <Dropdown className="btn_projects font-weight-bold">
                <Dropdown.Toggle variant="font-weight-bold" id="dropdown-basic">
                    Projects
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">P1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">P2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">P3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Navbar>
        </>
    )
}

export default Header;
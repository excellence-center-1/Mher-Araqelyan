import React, { useContext } from "react";
import { Context } from "../index";
import { LOGIN_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom"
import "./styles/NavBar.css"

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
        navigate(LOGIN_ROUTE);
    }
    return (
        <nav className="navbar fixed-top" style={{ backgroundColor: '#a0ceec' }}>
            <div className="container-fluid">
                <div className="d-flex flex-column ">
                    <span className="navbar-brand mb-0 h1" >Your Video Gallery</span>
                    <span className="navbar-brand mb-0 " style={{ fontSize: '1rem' }}>
                        {user.user.email}
                    </span>
                </div>
                <Button
                    variant={"outline-light"}
                    onClick={() => logOut()}
                    className="mt-2 ml-2"
                    style={{ width: '8%' }}
                >
                    Logout
                </Button>
            </div>
        </nav>
    );
});

export default NavBar;

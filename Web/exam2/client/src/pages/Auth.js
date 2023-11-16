import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation,useNavigate} from "react-router-dom";
import {GALLERY_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try{
            let data;
            if (isLogin) {
              const data = await login(email,password);
              console.log(data)
            } else {
              const data = await registration(email, password);
              console.log(data)
            }
            user.setUser(user)
            user.setIsAuth(true)
            
            navigate(GALLERY_ROUTE)
        } catch (e){
            alert(e.response.data.message)
        }

    } 

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Sign In' : "Sign Up"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3  ml-3 mr-15">
                        {isLogin ?
                            <div>
                                Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Sign Up!</NavLink>
                            </div>
                            :
                            <div>
                                Have an account? <NavLink to={LOGIN_ROUTE}>Sign In!</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
    
                            onClick={click} 
                        >
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { GALLERY_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import "./styles/Auth.css";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(GALLERY_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="m-auto">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
        <form className="form">
          <input
            className="form-control"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="form-control"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <div className="link">
            {isLogin ? (
              <p>
                Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Sign Up!</NavLink>
              </p>
            ) : (
              <p>
                Have an account? <NavLink to={LOGIN_ROUTE}>Sign In!</NavLink>
              </p>
            )}
          </div>
          <div className="button-container">
            <button className="btn" type="button" onClick={click}>
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Auth;

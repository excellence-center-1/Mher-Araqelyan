import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import {LOGIN_ROUTE } from "../utils/consts";
import { authRoutes,publicRoutes } from "../routes";
import {observer} from "mobx-react-lite";
import { Context } from "../index";
const AppRouter = observer( () => {
    const {user}= useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
           <Route path='' element={<Navigate to={LOGIN_ROUTE} />} />
        </Routes>
    )
})
export default AppRouter;
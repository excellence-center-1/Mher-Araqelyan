import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { Spinner } from "react-bootstrap";
import { Context } from "./index";
import { check } from "./http/userAPI";

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

    useEffect(() => {
    check().then(data => {
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])  

   /* if (loading) {
    return <Spinner animation={"grow"} />
  }  */ 
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;

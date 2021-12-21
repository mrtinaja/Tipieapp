import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, login } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/auth.css";

export const Auth = (props) => {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user,error /*TODO renderizar cartel de error con error.message*/] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      history.replace("/");
    }
  }, [user, history]);

  return (
    <div className="login">
      <h1 className="Title">Login</h1>
      <div>
        <label>Email <input className= "label" name="email" type="text" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address"/></label>
        <br></br>
        <label>Password<input className= "label" name="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/></label>
        <br></br>
        <button value="Login" className="submit-button" onClick={()=>login(email, password)}>Login</button>
      </div>
    </div>
    );
}

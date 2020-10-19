import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import {auth,provider} from '../../firebase'


function Login() {


    const signIn=e =>{
        auth.signInWithPopup(provider)
        .catch(err=>alert(err.message))
    }

  return (
    <div className="login">
      <div className="login__logo">
      <img
          src="https://i.ibb.co/DbVLPMD/pngegg.png"
          alt="imessage logo"
        />
        <h1> iMessage clone</h1>
        <small>By SebastianLB</small>
      </div>
      <Button onClick={signIn}>sign in</Button>
    </div>
  );
}

export default Login;

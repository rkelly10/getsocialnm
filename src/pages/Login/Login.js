import React, { useEffect, useState } from "react";
import Parse from "parse";
import { Link } from "react-router-dom";
import {LoginForm} from "../../components/User/LoginForm"
import { doUserLogOut } from '../../services/LoginService';



const Login = props => {

  const [flag, setFlag] = useState(false);

  const isLoggedIn = Parse.User.current();


  useEffect(() => {
    if (isLoggedIn) {
        console.log("BAD");
        setFlag(false);
    }
    else {
        console.log("GOOD");
        setFlag(true);
    }
  }, [isLoggedIn, flag]);

  function handleLogOut(e) {
    e.preventDefault();
    doUserLogOut();
    console.log('Log Out.');
  }


  if(!flag) {
    return (
      <div className="info">
      <h1>SAMPLE SITE LOGIN</h1>
        {
          <div>
            <p>
          Click below to Log Out of your account.
          </p>
          <button onClick={handleLogOut}>Log Out</button>
          </div>
        }
      </div>
    );
  }

  return (
    <div className="info">
      <h1>SAMPLE SITE LOGIN</h1>
      <h2 className="subtitle">Login to Your Account</h2>

      <p>
        Enter username and password to Login.
      </p>
      < LoginForm />
      < br />
      <p>
        Don't have an account? Click Register below to sign up.
      </p>
      <Link to="/Register">
        <button>Register</button>
      </Link>
      < br />
    </div>
  );
};

export default Login;
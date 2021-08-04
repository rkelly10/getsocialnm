import React, { useEffect, useState } from "react";
import { createUser } from "../../services/LoginService";
import RegisterForm from "../../components/User/RegisterForm";
import Parse from "parse";

const Register = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully registered!`
          );
        }
        // TODO: redirect user to main app
        setAdd(false);
      });
    }
  }, [newUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  const [flag, setFlag] = useState(false);

  const isLoggedIn = Parse.User.current();

  // set logged in flag
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

  if(!flag) {
    return (
      <div className="info">
      <h1>Get Social NM</h1>
        {
          <div>
            <p>
          Cannot Register new account while logged into new account. Log out to make new account.
          </p>
          </div>
        }
      </div>
    );
  }

  return (
    <div>
      <RegisterForm
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default Register;

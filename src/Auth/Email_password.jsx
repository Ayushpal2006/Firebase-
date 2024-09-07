import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const Email_password = () => {
  const auth = getAuth(app);
  const putDat = ()=>{
    createUserWithEmailAndPassword(auth, "Ayushpal@gmail.com", "ayush@1234")
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
  }

  return <div>
    <button onClick={putDat}>User with emal and password</button>
  </div>;
};

export default Email_password;

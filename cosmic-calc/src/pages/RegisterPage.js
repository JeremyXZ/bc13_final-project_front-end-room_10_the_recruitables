import React from "react";
import { auth, createUserDocument } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBarLogin from "../components/navBar/NavBarLogin";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [score, setScore] = useState(0);
  const [, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  let navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        score
      );
      await createUserDocument(user, { displayName: registerName });
      setRegisterEmail("");
      setRegisterPassword("");
      setRegisterName("");
      setScore(0);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <NavBarLogin /> */}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="name"
          value={registerName}
          onChange={(e) => setRegisterName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

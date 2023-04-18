import React, { useState } from "react";
import { Register } from "./Component/Page/SignUp";
import { Login } from "./Component/Page/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
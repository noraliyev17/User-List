import React, { useState } from "react";
import "./style.scss";
import FormInput from "../../UI/FormInput";
import Button from "../../UI/Button";
import { api } from "../../api/api";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
const index = () => {
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  const addUser = (e) => {

    e.preventDefault();

    const newUser = {
      id: uuidv4(),
      username: username,
      surname :surname,
      age: age,
    };

    const check = {
      username: username.trim().length === 0,
      surname: surname.trim().length === 0,
      age: age.trim().length === 0,
    };

    if (check.username || check.age  || check.surname) {
      toast.error("Please enter username and surname or age");
    } else {
      api.addUser(newUser);
      setUsername('')
      setAge('')
      toast.success("New User added successfully");
    }
  };

  return (
    <div className="home card bg-light shadow-lg p-5 mt-5 mx-auto w-75">
      <h1>Enter your information ⬇</h1>

      <form action="#" onSubmit={(e)=> addUser(e)}>
        <FormInput
          type="text"
          labelText={"Enter your name"}
          pl={"NAME"}
          fo={"user"}
          val={username}
          setVal={setUsername}
        />

        <FormInput
          type="text"
          labelText={"Enter your surname"}
          pl={"SURNAME"}
          fo={"surname"}
          val={surname}
          setVal={setSurname}
        />


        <FormInput
          type="number"
          labelText={"Enter your age"}
          pl={"AGE"}
          fo={"userage"}
          val={age}
          setVal={setAge}
        />   
        

        <Button type="submit" btn="btn btn-success p-3 w-100 mt-3">
          Add User
        </Button>
        <ToastContainer/>
      </form>
    </div>
  );
};

export default index;
<h1>Home</h1>;

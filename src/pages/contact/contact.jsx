import { Link } from "react-router-dom";
import style from "./contact.module.scss";
import { useState } from "react";
import "../../App.css";
const Contact = () => {
  const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");

    const changeName = (evt) => {
      setName(evt.target.value);
  };
  const changeEmail = (evt) => {
    setName(evt.target.value);
};
const changeMessage = (evt) => {
  setName(evt.target.value);
};
const Sent = (evt) => {
  evt.preventDefault();
};

return (
    <div className="container-fluid">
      <h2 className="text-center m-4">Contact Us</h2>
      <div className="row justify-content-center m-5">
        <div className="col-sm-6">
          <form action="mail.php" method="post" autocomplete="off" />

          <label for="name" onChange={changeName}>Your Name</label>
          <input type="text" name="name" placeholder="Your Name" />

          <label for="email" onChange={changeEmail}>Email</label>
          <input type="email" name="email" placeholder="Email" />

          <label for="message" onChange={changeMessage }>Message</label>
          <textarea name="message" placeholder="Message"></textarea>

          <input type="submit" onClick={Sent} value="Submit" />

          <form />
        </div>
      </div>
    </div>
  );
};
export default Contact;

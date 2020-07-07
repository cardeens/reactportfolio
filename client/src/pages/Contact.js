import React, { useState } from "react";
import axios from "axios";




function Contact() {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")

function handleName(event) {
  setName(event.target.value)
}

function handleEmail(event) {
  setEmail(event.target.value)
}

function handleMessage(event) {
  setMessage(event.target.value)
}



  function handleSubmit(event) {
    event.preventDefault()
    console.log(name)
    console.log(email)
    console.log(message)
    
    const emailData = {
      name: name,
      email: email,
      message: message
    }

    axios.post('/send', emailData)

    setName("")
    setEmail("")
    setMessage("")

    alert("Thanks for your message! I will respond as soon as possible.")
    
  }

  return (
    <div className="container p-3 my-3">
      <h1>Drop a Line...</h1>
      <hr></hr>
      <form action="/action_page.php">
        <div className="form-group">
          <label for="name">Name:</label>
          <input type="name" className="form-control" placeholder="Enter Full Name" id="name" onChange={handleName} value={name} />
        </div>
        <div className="form-group">
          <label for="email">Email Address:</label>
          <input type="email" className="form-control" placeholder="Enter Email" id="email" onChange={handleEmail} value={email} />
        </div>
        <div className="form-group">
          <label for="message">Message:</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Enter Message" onChange={handleMessage} value={message} />
        </div>
        <button type="submit" className="btn btn-dark" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
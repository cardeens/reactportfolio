import React from "react";

function Contact() {
  return (
    <div class="container p-3 my-3">
    <h1>Drop a Line...</h1>
    <hr></hr>
    <form action="/action_page.php">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="name" class="form-control" placeholder="Enter Name" id="name" />
      </div>
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input type="email" class="form-control" placeholder="Enter email" id="email" />
        </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <input type="message" class="form-control" placeholder="Enter message" id="message" />
      </div>
      <button type="submit" class="btn btn-dark">Submit</button>
    </form>
  </div>
  );
}

export default Contact;
import React from "react";

function About() {
  return (
    <div className="container p-3 my-3">
    <h1>About Me</h1>
    <hr></hr>
    <div className="row">
      <div className="col-md-4">
        <div className="jjimage">
          <img className="img img-thumbnail" src="images/headshot.jpg" alt="JJ Headshot" />
        </div>
      </div>
      <div className="col-md-8">
          <h3>Background</h3>
          <p>My full name is Jordan Jayson Cardenas, though most know me by JJ. In 1994, I was born just outside of Denver, CO where most of my family was based, and moved to the Bay Area shortly after. My interest in technology beginning in college, when I studied marketing at Seattle University and began internships in the high-tech space.</p>
          <p>
            In my free time, I enjoy working with music and recently learned how to be a sound engineer at a Seattle-based recording studio. I hope to continue building these skills to help musicians bring their work to life. I am also an avid fan of the Seahawks and Sounders, and love to spend time with family and friends whenever I can. </p>
            <br></br>
            <h3>Experience</h3>
          <p>
          After graduating in 2015, I began my first full-time job as an account executive at a staffing and professional services firm, where I managed our high-tech accounts such as Microsoft and Facebook. Shortly after, I started as a marketing specialist at Xevo, which at the time was a small tech startup by the name of UIEvolution. During my time at the company we rebranded, brought an innovative new connected-car solution to market, scored partnerships with major automakers such as General Motors and Fiat-Chrysler Automotive, and were ultimately acquired by Lear Corporation. After almost four years of growing my marketing skills and technical knowledge with the company, I moved to a marketing strategy consulting firm named Lenati where I worked on several high-visibility marketing projects within the Microsoft account.</p>
          <p>
          During my time at Lenati I decided to pivot my career and began learning how to code. I enrolled in a certificate program at the University of Washington for full-stack development. During my time at the program I learned the key fundamentals to becoming a web developer and built experience working with several programming languages.</p>
          <br></br>
          <h3>Languages</h3>
          <h5>Browser-Based Techologies</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap & Foundation</li>
            <li>Handlebars</li>
            <li>React.js</li>
          </ul>
          <h5>API Interaction</h5>
          <ul>
            <li>API</li>
            <li>JSON</li>
            <li>AJAX</li>
          </ul>
          <h5>Databases & Server Side Development</h5>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>User Authentication</li>
            <li>MERN Stack</li>
          </ul>
          
      </div>
    </div>
  </div>
  );
}

export default About;

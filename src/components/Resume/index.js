import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Access my full work history <a href="https://www.linkedin.com/in/cheryl-muschallik/" class="orange" target="_blank">VIA LINKEDIN</a>. 
        </p>

        <div class="container">
          <div class="row">
            <div class="col-6 just"> 
            <h3 class="pink">Development</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>APIs</li>
          <li>Node</li>
          <li>MySQL</li>
          <li>REST</li>
        </ul></div>
            <div class="col-6 pink">  <h3>Relevant Experience</h3>
        <ul className="skills">
          <li>Non-profits</li>
          <li>Fundraising</li>
          <li>Digital Marketing</li>
          <li>Email Marketing</li>
          <li>Donation Forms</li>
          <li>Event Registration</li>
          <li>CRA Compliance</li>

        </ul>
      </div></div>

          </div>
        </div>
       
      
    </section>
  );
}

export default Resume;

import React from 'react';
import aboutImg from '../../assets/img/Portfoliocartoon.png';
function About() {
  return (
    <section className="my-5">
      <div className="my-2">


      <div class="container">
        <div class="row">
          <div class="col-6"> 
          <p>I discovered a love for building for the internet early. I taught myself rudimentary code in my parents basement, <em>for fun.</em></p> 
          
          <p>I turned this hobby into a passion, and then into a career. I have specialized in digital technology in the non-profit field for many years. I've helped launch numberous new sites for dozens of different Canadian charities. I have experience in all the typical tools of the trade: Raiser's Edge, Luminate Online, NXT OLX, to name a few.</p>
      </div>

      <div class="col-6"> 
      <img src={aboutImg} alt={"aboutImg"}/> 

      </div>

        </div>
      </div>
       
       
      </div>
    </section>
  );
}

export default About;

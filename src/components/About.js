import React from "react";
import Links from './Links'

function About({bio,github,linkedin}) {
  
let bioHolder = <p>{bio}</p>
  if(!bio){bioHolder = null}
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioHolder}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     <Links github={github} linkedin={linkedin}/>
    </div>
  );
}

export default About;

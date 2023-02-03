import React from "react";
import Links from './Links'

function About({bio,githubArg1,linkedinArg1}) {
  
let bioHolder = <p>{bio}</p>
  if(!bio){bioHolder = null}
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioHolder}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     <Links githubArg2={githubArg1} linkedinArg2={linkedinArg1}/>
    </div>
  );
}

export default About;

import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Project({ project }) {

  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      <img
        src={require(`../../assets/projects/${name}.jpg`)}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text text-center">
        <h3 className="pb-4">
          {removeHyphensAndCapitalize(name)}{' '}        </h3>

<div class="row pb-3">  
<a href={repo}>
            Access on GitHub          
            </a></div>
        
            <div class="row">  
            <a href={link}>View Application</a>
</div>
        <p><em>{description}</em></p>
      </div>
    </div>
  );
}

export default Project;

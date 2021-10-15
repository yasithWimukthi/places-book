import React from 'react';

import '../../../../../../../Downloads/[GigaCourse.com] Udemy - React, NodeJS, Express & MongoDB - The MERN Fullstack Guide/5. React.js - Building the Frontend/5.3 Avatar/Avatar/Avatar.css';

const Avatar = props => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;

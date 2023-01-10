import React from 'react';
import './SideBarOptions.css';
const SideBarOptions = ({ title, Icon }) => {
  return (
    <div className="sidebaroptions">
      {Icon && <Icon className="sidebareOptions__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SideBarOptions;

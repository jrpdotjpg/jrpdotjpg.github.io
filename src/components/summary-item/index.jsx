import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name_link: 'font-semibold text-blue-500 pb-1',
  name_nolink: 'font-semibold text-grey-900 pb-1',
  name_link_hover: 'hover:underline hover:text-blue-600',
  description: 'text-md text-gray-600 font-light',
};

const SummaryItem = ({ name, description, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`
          ${link ? classes.name_link : classes.name_nolink} 
          ${link ? classes.name_link_hover : ''}
        `}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;

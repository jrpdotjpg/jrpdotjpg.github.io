import { Link } from 'gatsby';
import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjMore = ({ projects }) => {
  return (
    <Section title="Project Posts">
      {projects.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          internal
        />
      ))}
      {projects.length >= 5 && (
        <Link className="text-gray-500 text-sm hover:text-black" to="/project">
          View more projects &rarr;
        </Link>
      )}
    </Section>
  );
};

export default SectionProjMore;

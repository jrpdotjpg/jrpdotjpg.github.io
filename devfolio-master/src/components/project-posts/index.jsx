import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const ProjectPosts = ({ posts }) => {
  return (
    <Section title="All Project Posts">
      {posts.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          link={post.node.fields.slug}
          internal
        />
      ))}
    </Section>
  );
};

export default ProjectPosts;

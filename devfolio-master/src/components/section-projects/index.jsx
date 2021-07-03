// import { Link } from 'gatsby';
// import React from 'react';

// import Section from '../section';
// import SummaryItem from '../summary-item';

// // const SectionProjects = ({ projects }) => {
// //   if (!projects.length) return null;

// //   return (
// //     <Section title="Projects">
// //       {projects.map((project) => (
// //         <SummaryItem
// //           key={project.name}
// //           name={project.name}
// //           description={project.description}
// //           link={project.link}
// //         />
// //       ))}
// //     </Section>
// //   );
// // };

// // export default SectionProjects;

// const SectionProjects = ({ projects }) => {
//   return (
//     <Section title="In more detail...">
//       {projects.map((project) => (
//         <SummaryItem
//           key={project.node.fields.slug}
//           name={project.node.frontmatter.title}
//           description={project.node.frontmatter.description}
//           link={project.node.fields.slug}
//           internal
//         />
//       ))}
//       {projects.length >= 5 && (
//         <Link className="text-gray-500 text-sm hover:text-black" to="/blog">
//           View projects &rarr;
//         </Link>
//       )}
//     </Section>
//   );
// };

// export default SectionProjects;

import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
        />
      ))}
    </Section>
  );
};

export default SectionProjects;
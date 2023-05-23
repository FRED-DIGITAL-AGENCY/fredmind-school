/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import bulb from 'assets/images/icons/bulb-2.png';
import diamond from 'assets/images/icons/diamond.png';
import help from 'assets/images/icons/help.png';
import award from 'assets/images/icons/award.png';

const data = [
  {
    id: 1,
    icon: bulb,
    title: 'Updated Curriculum ',
    description: `Our modules are well-structured with up-to-date information, and relevant course content to align with your learning goals.`,
  },
  {
    id: 2,
    icon: diamond,
    title: 'Stellar User Experience ',
    description: `The functionality of our learning platform helps you learn from anywhere. We offer a virtual-first, self paced program that runs in cohorts.`,
  },
  {
    id: 3,
    icon: help,
    title: 'Expert Tutors',
    description: `Our instructors/facilitators are seasoned industry leaders with relevant industry experience, academic credentials, and a strong track record in teaching the subject matter.`,
  },
  {
    id: 4,
    icon: award,
    title: 'Progress Tracking',
    description: `Our course helps you assess your progress and provides you with real-time feedback through quizzes, assignments, or projects to gauge your understanding.`,
  },
    {
    id: 5,
    icon: help,
    title: 'Support & Community',
    description: `You get to connect with fellow learners through discussion forums, group projects, networking events to foster collaboration.`,
  },
];

const UsefulFeatures = () => {
  return (
    <Box as="section" id="useful-features" variant="section.usefulFeatures">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Unlock your potential, Learn with Us"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature
              key={item.id}
              data={item}
              className="feature-item"
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UsefulFeatures;

const styles = {
  heading: {
    marginBottom: 80,
  },
  features: {
    gap: 60,
    display: ['grid'],
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)'],
    '.feature-item': {
      display: ['block', 'block', 'block', 'block', 'flex'],
      px: ['15px', 0],
      maxWidth: ['none'],
      figure: {
        minWidth: '90px',
        m: [
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 26px 0 0',
        ],
      },
    },
  },
};

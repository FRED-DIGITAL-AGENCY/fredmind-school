/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import bulb from 'assets/images/icons/bulb.png';
import dart from 'assets/images/icons/dart.png';
import rocket from 'assets/images/icons/rocket.png';
import trophy from 'assets/images/icons/trophy.png';

const data = [
  {
    id: 1,
    icon: rocket,
    title: 'Learn with Confidence',
    description: 'At our institution, we understand the importance of our students" reputations, which is why we"ve collaborated with certified industry professionals to review and certify all of our online courses and training.',
  },
  {
    id: 2,
    icon: dart,
    title: 'Our Mission',
    description: 'Our mission is to equip Africans with the latest real-time standards and support them in reaching their full potential.',
  },
  {
    id: 3,
     icon: bulb,
    title: 'Our Vision',
    description: 'We aspire to create the most extensive compilation of digital platform, resources and opportunities available, with the aim of benefiting the digital industry in Nigeria and across Africa.',
  },
  {
    id: 4,
    icon: trophy,
    title: 'Award history',
    description: `Lorem`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="ultimate-feature" variant="section.ultimateFeature">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Our Community"
          description="The tech industry is currently one of the most rapidly expanding sectors globally, and its dynamic and ever-changing landscape attracts a plethora of individuals seeking to enter this field.
Fredmind Digital School is an education platform focused on imparting high-demand skills and driven by a strong set of values. Its mission is to empower African millennials to overcome poverty, achieve career success, and live their dream lives.

"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
    ],
  },
};

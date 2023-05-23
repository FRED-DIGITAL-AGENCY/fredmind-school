/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'How can I enroll?',
    contents: (
      <div>
      All you have to do is sign up here (link to school page) and follow the instructions!

      </div>
    ),
  },
  {
    title: 'I’m not sure what course to take, what do I do?',
    contents: (
      <div>
       We have created this guide to help you through this process. If you’re still clueless , you can reach out to us here. school@fredminddigital.com
      </div>
    ),
  },
  {
    title: `What qualification do I need to get accepted?`,
    contents: (
      <div>
      No qualification is needed at all. Come as you are.
      </div>
    ),
  },
  {
    title: `How much is tuition?`,
    contents: (
      <div>
      Tuition varies by course. Check out yours here.

      </div>
    ),
  },
  {
    title: `Can I start classes immediately after I enroll?
`,
    contents: (
      <div>
     We run a cohort-based program which means that you can totally sign up but classes won’t start until the next cohort.


      </div>
    ),
  },
  
  {
    title: `Can I get a refund of my tuition fee?`,
    contents: (
      <div>
      No, you can’t. You can only transfer your enrollment to another course within your   school

      </div>
    ),
  },
];
export default function Faq() {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
        <SectionHeader
          title="Do you have any quesiton"
          description="Our support team ready to help you, please contact with them"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </Box>
  );
}

/** @jsx jsx */
import { useState } from 'react';
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import { LearnMore } from 'components/link';
import videoBanner from 'assets/images/video.png';
import Play from 'assets/images/icons/play.png';
import Modal, { CloseButton } from 'components/modal/modal';
import ResponsiveIframe from 'components/responsive-iframe';

const IntroVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box as="section" sx={styles.section} variant="section.introVideo">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="   Equip Yourself for a World of Opportunities."
          description=" Grab Your Seat & Get a Chilled Drink. Let’s Learn and Earn. We have Been Waiting for You
            You are at the right place. Let’s Talk
            A “hold-my-hand”, step-by-step process to learn in-demand high income skill from beginner 
            to Mastery, even if it is your first time. No degree or prior tech experience required."
        />
        <Box sx={styles.explore}>
          <LearnMore path="#!" label="Explore More" />
        </Box>
        <Box sx={styles.videoWrapper}>
          <Modal isOpen={isOpen}>
            <CloseButton
              onClick={() => setIsOpen(false)}
              size="24px"
              color="#fff"
            />
            <ResponsiveIframe
              src="https://youtube.com"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </Modal>

          <Image
            src={videoBanner}
            className="video-banner"
            alt="video banner"
          />
          <Button
            variant="text"
            sx={styles.playPause}
            onClick={() => setIsOpen(true)}
          >
            <Image src={Play} alt="play" /> Watch Full video
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default IntroVideo;

const styles = {
  heading: {
    maxWidth: '620px',
    mb: [5],
    h2: {
      letterSpacing: 'heading',
    },
  },
  explore: {
    textAlign: ['center'],
    mb: [6],
  },
  videoWrapper: {
    textAlign: 'center',
    position: 'relative',
    '.video-banner': {
      maxWidth: ['100%', '100%', '100%', '100%', '100%', '80%', '100%'],
    },
  },
  playPause: {
    color: 'white',
    fontWeight: 700,
    position: 'absolute',
    padding: '0px',
    bottom: [40, 40, 40, 70, 100],
    left: '50%',
    transform: 'translateX(-50%)',
    ':focus': {
      outline: 0,
    },
    img: {
      mr: '16px',
    },
  },
};

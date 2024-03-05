import styles from './Footer.module.scss';
import { FbIcon, InstagramIcon, Linkedin, TwitterIcon } from '~/assets/icons';
import { Button } from '~/ui/Button';

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.communicationButtonsWrapper}>
        <Button isIcon={true}>
          <FbIcon />
        </Button>
        <Button isIcon={true}>
          <TwitterIcon />
        </Button>
        <Button isIcon={true}>
          <InstagramIcon />
        </Button>
        <Button isIcon={true}>
          <Linkedin />
        </Button>
      </div>
      <div className={styles.footerText}>
        Copyright ©2020 All rights reserved
      </div>
    </footer>
  );
}

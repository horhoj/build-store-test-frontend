import styles from './AboutBlock.module.scss';
import johnAvatar from '~/assets/john-avatar.png';
import { Button } from '~/ui/Button';

export function AboutBlock() {
  return (
    <div className={styles.aboutBlock}>
      <div className={styles.aboutAvatarWrapper}>
        <img src={johnAvatar} className={styles.aboutAvatar} />
      </div>
      <div className={styles.aboutDataWrapper}>
        <div className={styles.aboutTitle}>
          Hi, I am John, Creative Technologist
        </div>
        <div className={styles.aboutText}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
        <div className={styles.aboutButtonWrapper}>
          <Button className={styles.aboutDownloadButton}>
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}

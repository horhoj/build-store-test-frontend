import styles from './FeatureWorksBlock.module.scss';
import { FeatureWorksBlockData } from './FeatureWorksBlockData';

interface FeatureWorksBlockProps {
  children?: React.ReactNode;
}
export function FeatureWorksBlock({ children }: FeatureWorksBlockProps) {
  return (
    <div className={styles.FeatureWorksBlock}>
      <div className={styles.title}>Featured works</div>
      <div className={styles.featList}>
        {FeatureWorksBlockData.map((feat) => (
          <div key={feat.id} className={styles.featCard}>
            <div className={styles.featCardImgWrapper}>
              <img
                src={feat.imgSrc}
                alt="feat img"
                className={styles.featCardImg}
              />
            </div>
            <div className={styles.featCardData}>
              <div className={styles.featCardTitle}>{feat.title}</div>
              <div className={styles.featCardDescription}>
                <div className={styles.featCardYear}>{feat.year}</div>
                <div className={styles.featCardType}>{feat.type}</div>
              </div>
              <div>{feat.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

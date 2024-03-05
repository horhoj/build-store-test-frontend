import { AboutBlock } from '../../components/AboutBlock';
import { FeatureWorksBlock } from '../../components/FeatureWorksBlock';
import { RecentPostsBlock } from '../../components/RecentPostsBlock';
import styles from './MainPage.module.scss';
import { WorkLayout } from '~/features/layouts/WorkLayout';

export function MainPage() {
  return (
    <WorkLayout>
      <AboutBlock />
      <RecentPostsBlock />
      <FeatureWorksBlock />
    </WorkLayout>
  );
}

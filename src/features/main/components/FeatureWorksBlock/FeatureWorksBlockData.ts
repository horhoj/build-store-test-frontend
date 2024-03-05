import { getUUID } from '~/utils/getUUID';
import featImg1 from '~/assets/feat-img-1.png';
import featImg2 from '~/assets/feat-img-2.png';
import featImg3 from '~/assets/feat-img-3.png';

export interface FeatureWorkBlocksDataItem {
  id: string;
  title: string;
  year: number;
  type: string;
  text: string;
  imgSrc: string;
}

export const FeatureWorksBlockData: FeatureWorkBlocksDataItem[] = [
  {
    id: getUUID(),
    title: 'Designing Dashboards',
    year: 2020,
    type: 'Dashboard',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    imgSrc: featImg1,
  },

  {
    id: getUUID(),
    title: 'Vibrant Portraits of 2020',
    year: 2019,
    type: 'Illustration',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    imgSrc: featImg2,
  },

  {
    id: getUUID(),
    title: '36 Days of Malayalam type',
    year: 2018,
    type: 'Typography',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    imgSrc: featImg3,
  },
];

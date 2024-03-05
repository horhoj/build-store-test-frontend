import { getUUID } from '~/utils/getUUID';

export interface RecentPostDataItem {
  id: string;
  title: string;
  date: string;
  description: string;
  text: string;
}

export const RecentPostsData: RecentPostDataItem[] = [
  {
    id: getUUID(),
    title: 'Making a design system from scratch',
    date: '12 Feb 2020',
    description: 'Design, Pattern',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    id: getUUID(),
    title: 'Creating pixel perfect icons in Figma',

    date: '12 Feb 2020',
    description: 'Design, Pattern',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
];

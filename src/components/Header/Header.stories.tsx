import { StoryFn, Meta } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {},
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header />;

export const Default = Template.bind({});

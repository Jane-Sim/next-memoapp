import { ComponentMeta, ComponentStory } from '@storybook/react';
import Title from '.';

export default {
  title: 'Atoms/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const MainTitleRendering = Template.bind({});
MainTitleRendering.args = {
  styleType: 'MainTitle',
  children: 'This is Main Ttitle',
};

export const SubTitleRendering = Template.bind({});
SubTitleRendering.args = {
  styleType: 'SubTitle',
  children: 'This is Sub Title',
};

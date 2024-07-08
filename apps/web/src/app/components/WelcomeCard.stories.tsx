import type { Meta, StoryObj } from '@storybook/react';
import WelcomeCard from './WelcomeCard';

const meta: Meta<typeof WelcomeCard> = {
  title: 'Web/WelcomeCard',
  component: WelcomeCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof WelcomeCard>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    title: 'Custom Welcome',
    description: 'This is a custom description for the WelcomeCard.',
    buttonText: 'Custom Button',
  },
};

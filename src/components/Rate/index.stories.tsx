import type { Meta, StoryObj } from "@storybook/react";
import { Rate } from ".";

const meta: Meta<typeof Rate> = {
  component: Rate,
  tags: ["autodocs"],
  args: {
    count: 5,
    defaultValue: 0,
    allowHalf: false,
    allowClear: true,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Rate>;

export const Default: Story = {};

export const WithValue: Story = {
  args: { defaultValue: 3 },
};

export const HalfStar: Story = {
  args: { defaultValue: 2.5, allowHalf: true },
};

export const AllHalfValues: Story = {
  args: { defaultValue: 4.5, allowHalf: true },
};

export const Disabled: Story = {
  args: { defaultValue: 3, disabled: true },
};

export const NoClear: Story = {
  args: { defaultValue: 3, allowClear: false },
};

export const TenStars: Story = {
  args: { count: 10, defaultValue: 7 },
};

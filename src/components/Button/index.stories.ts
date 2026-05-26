import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    type: "default",
    size: "default",
    shape: "default",
    danger: false,
    ghost: false,
    loading: false,
    block: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { type: "primary" },
};

export const Default: Story = {
  args: { type: "default" },
};

export const Dashed: Story = {
  args: { type: "dashed" },
};

export const Text: Story = {
  args: { type: "text" },
};

export const Link: Story = {
  args: { type: "link" },
};

export const Large: Story = {
  args: { type: "primary", size: "large" },
};

export const Small: Story = {
  args: { type: "primary", size: "small" },
};

export const Round: Story = {
  args: { type: "primary", shape: "round" },
};

export const Circle: Story = {
  args: { type: "primary", shape: "circle", children: "A" },
};

export const Danger: Story = {
  args: { type: "primary", danger: true },
};

export const DangerDefault: Story = {
  args: { type: "default", danger: true },
};

export const Ghost: Story = {
  args: { type: "primary", ghost: true },
};

export const Loading: Story = {
  args: { type: "primary", loading: true },
};

export const Disabled: Story = {
  args: { type: "primary", disabled: true },
};

export const Block: Story = {
  args: { type: "primary", block: true },
};

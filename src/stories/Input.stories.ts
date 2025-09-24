import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";
import { Input } from "../components/Input/Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Label",
  },
};

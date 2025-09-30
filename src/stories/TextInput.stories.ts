import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";
import { TextInput } from "../components/Input/TextInput/TextInput";

const meta = {
  title: "Atoms/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Label",
  },
};

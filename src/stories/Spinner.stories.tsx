import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "../components/Spinner/Spinner";

const meta = {
  title: "Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

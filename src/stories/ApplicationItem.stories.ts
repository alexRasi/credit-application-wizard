import type { Meta, StoryObj } from "@storybook/react-vite";
import { ApplicationItem } from "../components/ApplicationItem/ApplicationItem";

const meta = {
  title: "Molecules/ApplicationItem",
  component: ApplicationItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    email: "john.doe@mail.com",
    employmentType: "Full time",
    income: 1000,
    onDelete: () => alert("Delete clicked"),
  },
} satisfies Meta<typeof ApplicationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { CustomCard } from "./Card";

const meta: Meta<typeof CustomCard> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Card",
  component: CustomCard,
};

export default meta;
type Story = StoryObj<typeof CustomCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <CustomCard label="Card" color="warning" />,
};

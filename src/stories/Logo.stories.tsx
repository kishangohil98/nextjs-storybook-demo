import Logo from "../components/Logo";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import login from "../assets/login.svg";

export default {
  title: "Example/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Small = Template.bind({});

Small.args = {
  src: login,
  width: 100,
};

export const Big = Template.bind({});
Big.args = {
  src: login,
  width: 300,
};

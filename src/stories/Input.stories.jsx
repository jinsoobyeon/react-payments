import Input from "../components/Input";

export default {
  title: "Components/Input",
  component: Input,
};

export const Text = () => <Input type="text" />;
export const Number = () => <Input type="number" />;
export const Password = () => <Input type="password" />;

interface SomeCopmProps {
  children: (props: { name: string; doSomething: ()=>void}) => JSX.Element;
  name: string;
}

const SomeComp = ({ children, name }: SomeCopmProps) => {
  const doSomething = () => {
    console.log("hehehe")
  }
  return children({ name, doSomething });
};

export default SomeComp;
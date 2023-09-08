import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  if (children.length <= maxChars) return <p>{children}</p>;

  return (
    <p>
      {show ? children : children.substring(0, maxChars)}...
      <button onClick={handleClick}>{show ? "Less" : "More"}</button>
    </p>
  );
};

export default ExpandableText;

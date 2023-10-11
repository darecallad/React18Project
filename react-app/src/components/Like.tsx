import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [state, setState] = useState(false);

  function toggle() {
    setState(!state);
  }

  if (state) return <AiFillHeart color="red" size={20} />;

  return <AiOutlineHeart size={20} />;
};

export default Like;

import create from "./http-serves";
export interface User {
  id: number;
  name: string;
}

export default create("/users");

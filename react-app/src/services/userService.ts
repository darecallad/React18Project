import create from "./http-serves";
export interface Users {
  id: number;
  name: string;
}

export default create("/users");

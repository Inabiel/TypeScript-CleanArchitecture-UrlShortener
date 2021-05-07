import { Irole } from "./Irole";

export class Url implements Irole {
  id: number;
  name: string;

  constructor(props?: { id: number; name: string }) {
    this.id = props.id;
    this.name = props.name;
  }
}

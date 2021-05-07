import { Iuser } from "./Iuser";

export class User implements Iuser {
  id: string;
  name: string;
  email: string;
  password: string;
  roleId: number;

  constructor(props?: {
    name: string;
    id: string;
    email: string;
    password: string;
    roleId: number;
  }) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.roleId = props.roleId;
  }
}

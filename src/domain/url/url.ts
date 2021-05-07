import { Iurl } from "./Iurl";

export class Url implements Iurl {
  Hash: string;
  originalUrl: string;
  createdAt: Date;
  updatedAt: Date;
  userId?: string | null;

  constructor(props?: {
    Hash: string;
    originalUrl: string;
    createdAt: Date;
    updatedAt: Date;
    userId?: string | null;
  }) {
    this.Hash = props.Hash;
    this.originalUrl = props.Hash;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.userId = props.userId;
  }
}

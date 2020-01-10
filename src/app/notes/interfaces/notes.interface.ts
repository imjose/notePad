// import { User } from './user.interface';

export interface Notes {
  name: string;
  content: string;
  ownerUID: string;
  modifiedDate: Date;
  isPublic: boolean;
  sharedWith: string[];
}

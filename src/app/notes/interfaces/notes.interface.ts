// import { User } from './user.interface';

export interface Notes {
  id?: string;
  name: string;
  content: string;
  ownerUID: string;
  canEdit?: boolean;
  modifiedDate: number;
  isPublic: boolean;
  sharedWith: string[];
}

// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type InvoiceItem = {
  id: number;
  name: string;
  value: number;
};

export type Invoice = {
  id: number;
  name: string;
  createdAt: number;
  items: InvoiceItem[];
};

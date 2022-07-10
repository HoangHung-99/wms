import {Contact, Points, Product} from 'app/theme/Interface';

export type Node = {
  tripId: string;
  point: Points;
  contacts: Array<Contact>;
  bills: string;
  products: Array<Product>;
  note: string;
};

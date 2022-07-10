import {Points} from 'app/theme/Interface/model/Points';
import {TripType} from 'app/theme/Interface';

export type Trip = {
  id: string;
  duration: string;
  company: string;
  weight: string;
  type: TripType;
  points: Array<Points>;
};

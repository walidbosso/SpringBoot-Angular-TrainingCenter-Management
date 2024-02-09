import { Formator } from 'app/model/formator.model';
import { Formation } from '../formation/formation';

export interface Demande {
  id?: number;
  formateur: Formator;
  formation: Formation;
}

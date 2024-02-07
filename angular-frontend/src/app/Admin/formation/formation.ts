import { Formator } from 'app/model/formator.model';
import { Entreprise } from '../entreprise/entreprise';

export interface Formation {
  id?: number;
  nom: string;
  categorie: string;
  objectif: string;
  description: string;
  duree: string;
  cout: number;
  dateDebut: Date;
  dateFin: Date;
  formateur: Formator;
  entreprise: Entreprise;
  imageName?: string;
  imageData?: File;
}

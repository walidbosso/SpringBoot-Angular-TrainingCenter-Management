import { Formator } from 'app/model/formator.model';
import { Entreprise } from '../entreprise/entreprise';
import { Individu } from 'app/model/individu.model';

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
  individus?: Individu[];
  imageName?: string;
  imageData?: File;
}

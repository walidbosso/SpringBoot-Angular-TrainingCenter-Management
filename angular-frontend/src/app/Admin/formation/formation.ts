import { Entreprise } from "../entreprise/entreprise";

export interface Formation {
    id: number;
  nom: string;
  categorie: string;
  objectif: string;
  description: string;
  duree: string;
  cout: number;
  dateDebut: Date;
  dateFin: Date;
  formateur_id: number;
  entreprise: Entreprise;
}

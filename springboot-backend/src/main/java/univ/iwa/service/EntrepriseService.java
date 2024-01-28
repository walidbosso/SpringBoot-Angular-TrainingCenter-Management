package univ.iwa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import univ.iwa.model.Entreprise;
import univ.iwa.model.Formation;
import univ.iwa.repository.EntrepriseRepository;
import univ.iwa.repository.FormationRepository;

@Service
public class EntrepriseService {

	@Autowired
	private EntrepriseRepository entrepriseRepository;
	
	@Autowired
	private FormationRepository formationRepository;
	
	public List<Entreprise> getAllEntreprises(){
		return entrepriseRepository.findAll();
	}
	
	public Entreprise getEntrepriseById(Long id) {
		return entrepriseRepository.findById(id).get(); 
	}
	
	//TACHE4
	public Entreprise addEntreprise(Entreprise entreprise) {
		return entrepriseRepository.save(entreprise);
	}
	
	public Entreprise updateEntreprise( Entreprise entreprise) {
		return entrepriseRepository.save(entreprise);
	}
	
	public void deleteEntreprise(Long id) {
		Entreprise entreprise = entrepriseRepository.findById(id).get();
		List<Formation> Formations = formationRepository.findByEntreprise(entreprise); 
		//lambda expression
		Formations.forEach(formation -> {
			formation.setEntreprise(null);
		});
		
		entrepriseRepository.deleteById(id);
	}
	
	/*
	public void deleteEntreprise(Long id) {
		List<Formation> Formations = getFormationsByEntrepriseId(id);
		//lambda expression
		Formations.forEach(formation -> {
			formation.setEntreprise(null);
		});
		
		entrepriseRepository.deleteById(id);
	}
	
	public List<Formation> getFormationsByEntrepriseId( Long id) {
		Entreprise g = entrepriseRepository.findById(id).get();
		//we pass that group 
		return formationRepository.findByEntreprise(g); 
	}*/
	/*
	public Formation addEntrepriseToFormation( Long idEntreprise,  Formation f,  Long idFormation) {
		Entreprise e= entrepriseRepository.findById(idEntreprise)
				.orElseThrow(() -> new EntityNotFoundException("Entreprise not found"));
		//si formation existe deja
		Formation m2= formationRepository.findById(idFormation).orElse(null);
		//System.out.println(m2);
		if(m2==null) {f.setEntreprise(e); return formationRepository.save(f);}
		else {//new formation avec entreprise
			m2.setEntreprise(e);
			return formationRepository.save(m2);}
	}
	*/
}

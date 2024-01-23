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
	EntrepriseRepository er;
	@Autowired
	FormationRepository fr;
	
	//TACHE4
	public Entreprise addEntreprise( Entreprise g) {
	return er.save(g);
	}
	
	public Formation addEntrepriseToFormation( Long idEntreprise,  Formation f,  Long idFormation) {
		Entreprise e= er.findById(idEntreprise).orElseThrow(() -> new EntityNotFoundException("Entreprise not found"));
		//si formation existe deja
		Formation m2= fr.findById(idFormation).orElse(null);
		//System.out.println(m2);
		if(m2==null) {f.setEntreprise(e); return fr.save(f);}
		else {//new formation avec entreprise
			m2.setEntreprise(e);
			return fr.save(m2);}
	}
	
	public List<Entreprise> getAllEntreprises(){
	return er.findAll();
	}
	
	
	public Entreprise getEntrepriseById( Long id) {
	return er.findById(id).get(); 
	
	}
	
	public List<Formation> getFormationsByEntrepriseId( Long id) {
	Entreprise g = er.findById(id).get();
	//we pass that group 
	return fr.findByEntreprise(g); 
	}
	
	public void deleteEntreprise( Long id) {
	List<Formation> Formations=getFormationsByEntrepriseId(id); 
	Formations.forEach(f->{//expression lambda
	f.setEntreprise(null);
	});
	er.deleteById(id);
	}
	
	public Entreprise updateEntreprise( Entreprise s) {
	return er.save(s);
	}
}

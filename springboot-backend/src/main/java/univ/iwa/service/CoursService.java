package univ.iwa.service;






import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import jakarta.persistence.EntityNotFoundException;
import univ.iwa.model.Cours;
import univ.iwa.model.Formation;
import univ.iwa.repository.CoursRepository;
import univ.iwa.repository.FormationRepository;


@Service
public class CoursService {

	@Autowired
	CoursRepository er;
	@Autowired
	FormationRepository fr;
	
	public Cours addCours( Cours g) {
	return er.save(g);
	}
	
	//TACHE7
	 public List<Cours> findByCategorie(String categorie) {
	        List<Cours> Cours = er.findByCategorie(categorie);
	        return Cours;
   }


	
	public Formation addCoursToFormation( Long idCours,  Formation f,  Long idFormation) {
		Cours c= er.findById(idCours).orElseThrow(() -> new EntityNotFoundException("Cours not found"));
		//si formation existe deja
		Formation m2= fr.findById(idFormation).orElse(null);
		//System.out.println(m2);
		if(m2==null) {f.setCours(c); return fr.save(f);}
		else {//new formation avec Cours
			m2.setCours(c);
			return fr.save(m2);}
	}
	
	public List<Cours> getAllCourss(){
	return er.findAll();
	}
	
	
	public Cours getCoursById( Long id) {
	return er.findById(id).get(); 
	
	}
	
	public List<Formation> getFormationsByCoursId( Long id) {
	Cours g = er.findById(id).get();
	//we pass that group 
	return fr.findByCours(g); 
	}
	
	public void deleteCours( Long id) {
	List<Formation> Formations=getFormationsByCoursId(id); 
	Formations.forEach(f->{//expression lambda
	f.setCours(null);
	});
	er.deleteById(id);
	}
	
	public Cours updateCours( Cours s) {
	return er.save(s);
	}
}

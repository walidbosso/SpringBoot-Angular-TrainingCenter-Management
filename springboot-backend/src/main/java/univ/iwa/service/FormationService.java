package univ.iwa.service;




import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import univ.iwa.model.Cours;
import univ.iwa.model.Formation;
import univ.iwa.repository.FormationRepository;




@Service
public class FormationService {

	@Autowired 
	FormationRepository fr;
	
	//TACHE2
	public Formation addFormation( Formation s) {
		return fr.save(s);
	}
	
	//TACHE7
	public List<Formation> getAllFormations(){
		return fr.findAll();
	}
	


    //TACHE7	
    public List<Formation> findByDebut(Date date) {
        List<Formation> formations = fr.findByDebut(date);
        return formations;
    }
    
	//TACHE7
    public List<Formation> findByVille(String ville) {
        List<Formation> Formation = fr.findByVille(ville);
        return Formation;
    }
	
	public Formation getFormationById( Long id) {
		return fr.findById(id).get(); 
	}
	
	public Cours getCoursByFormationId( Long id) {
		return fr.findById(id).get().getCours(); 
}
//	public List<Equipe> getEquipesByFormationId( Long id) {
//		List<Equipe> equipes=new ArrayList<>() ;
//		
//		Equipe equipe1 = fr.findById(id).get().getEquipe1(); 
//		equipes.add(equipe1);
//		Equipe equipe2 = fr.findById(id).get().getEquipe2();
//		equipes.add(equipe2);
//		return equipes;
//	
//}
	
	public List<Formation> findByDateFormationquals(  LocalDate date) {
	
	    Date convertedDate = java.sql.Date.valueOf(date);
		return fr.findByDebutEquals(convertedDate); 

}
		
	
		public Formation updateFormation( Formation s) {
		return fr.save(s);
	}
	
		public void deleteFormation( Long id) {
		fr.deleteById(id);
	}
	
	public List<Formation> deleteFormationsLessThanNow() {
		List<Formation> Formations= fr.findByFinLessThan(new Date());
		fr.deleteAll(Formations);
	return Formations;
}	
	
	public List<Formation> getAllFormations(int page, int size, String feild){
		Pageable pg= PageRequest.of(page, size, Sort.by(feild));
		Page<Formation> FormationsPage = fr.findAll(pg); 
		return FormationsPage.getContent();
	}
	
	
}

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
import org.springframework.transaction.annotation.Transactional;

import univ.iwa.model.Formation;
import univ.iwa.repository.FormationRepository;

@Service
public class FormationService {

	@Autowired 
	private FormationRepository formationRepository;
	
	//TACHE7
	public List<Formation> getAllFormations(){
		return formationRepository.findAll();
	}
	
	public Formation getFormationById( Long id) {
		return formationRepository.findById(id).get(); 
	}
	
	//TACHE2
	public Formation addFormation( Formation formation) {
		System.out.print(formation);
		return formationRepository.save(formation);
	}
	
	public Formation updateFormation( Formation formation) {
		return formationRepository.save(formation);
	}
	
	@Transactional
	public void deleteFormation( Long id) {
		Formation formation = formationRepository.findById(id).get();
		// Remove the association between formation and individu
		formation.getIndividus().forEach(individu -> 
			individu.getFormations().remove(formation)
		);
		
		// Delete the formation
        formationRepository.deleteById(id);
	}
	
//	
//	//TACHE7	
//    public List<Formation> findByDebut(Date date) {
//        List<Formation> formations = formationRepository.findByDebut(date);
//        return formations;
//    }
//    
//	//TACHE7
//    public List<Formation> findByVille(String ville) {
//        List<Formation> Formation = formationRepository.findByVille(ville);
//        return Formation;
//    }
    
  //TACHE7
    public List<Formation> findByCategorie(String categorie) {
        List<Formation> Formation = formationRepository.findByCategorie(categorie);
        return Formation;
    }
	
//	public List<Formation> findByDateFormationEquals(  LocalDate date) {
//	    Date convertedDate = java.sql.Date.valueOf(date);
//		return formationRepository.findByDebutEquals(convertedDate); 
//	}
	
//	public List<Formation> deleteFormationsLessThanNow() {
//		List<Formation> Formations= formationRepository.findByFinLessThan(new Date());
//		formationRepository.deleteAll(Formations);
//		return Formations;
//	}	
	
	public List<Formation> getAllFormations(int page, int size, String feild){
		Pageable pg= PageRequest.of(page, size, Sort.by(feild));
		Page<Formation> FormationsPage = formationRepository.findAll(pg); 
		return FormationsPage.getContent();
	}
	
}

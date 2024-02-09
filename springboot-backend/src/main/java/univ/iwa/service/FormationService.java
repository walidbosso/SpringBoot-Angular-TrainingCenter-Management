package univ.iwa.service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import io.jsonwebtoken.io.IOException;
import univ.iwa.model.Formation;
import univ.iwa.model.Individu;
import univ.iwa.repository.FormationRepository;

@Service
public class FormationService {

	@Autowired 
	private FormationRepository formationRepository;
	
	@Autowired
	private EmailService emailService;
	
	//TACHE7
	public List<Formation> getAllFormations(){
		return formationRepository.findAll();
	}
	
	public Formation getFormationById( Long id) {
		return formationRepository.findById(id).get(); 
	}
	
	
	public int countIndividus( Long id) {
		return formationRepository.countIndividus(id); 
	}
	
	public List<Individu> findIndividusByFormationId( Long id) {
		return formationRepository.findIndividusByFormationId(id); 
	}
	
	//TACHE2

	 public Formation addFormation(Formation formation, MultipartFile imageFile) throws java.io.IOException {
	        try {
	            formation.setImageName(imageFile.getOriginalFilename());

	            byte[] imageData = imageFile.getBytes();
	            formation.setImageData(imageData);

	            return formationRepository.save(formation);
	        } catch (IOException e) {
	            throw new RuntimeException("Failed to process image data", e);
	        }
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
	
	
//	//TACHE7	
//    public List<Formation> findByDebut(LocalDate date) {
//        List<Formation> formations = formationRepository.findByDateDebut(date);
//        return formations;
//    }
    
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

    
    public List<Formation> findByNomLike(String nom) {
        List<Formation> Formation = formationRepository.findByNomContainingIgnoreCase(nom);
        return Formation;
    }
    
	public List<Formation> findByDateFormationEquals(  LocalDate date) {
	    Date convertedDate = java.sql.Date.valueOf(date);
		return formationRepository.findByDateDebutEquals(convertedDate); 
	}
	
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
	
	// i will run the app on 3 AM (3 dlil hahahah) to test if the method will run auto and send the link via email
	@Transactional
	@Scheduled(cron = "0 0 0 * * ?")
	public List<Formation> checkEndedFormations() {
		Date today = new Date();
        List<Formation> endedFormations = formationRepository.findByDateFin(today);
        endedFormations.forEach( formation -> {
        	formation.getIndividus().forEach( individu -> {
        		emailService.sendFeedBack(formation, individu);
        	});
        });
        return endedFormations;
    }
}










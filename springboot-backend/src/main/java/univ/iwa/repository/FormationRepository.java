package univ.iwa.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import univ.iwa.model.Entreprise;
import univ.iwa.model.Formation;
import univ.iwa.model.UserInfo;

@Repository
public interface FormationRepository extends JpaRepository<Formation, Long>{
	List<Formation> findByFormateur(UserInfo formateur);
	List<Formation> findByEntreprise(Entreprise entreprise);
	/*
	List<Formation> findByFinLessThan(Date d); 
	List<Formation> findByDebutEquals(Date d); 
	
    List<Formation> findByVille(String ville);
    List<Formation> findByDebut(Date date);
	*/
}

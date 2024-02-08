package univ.iwa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;
import univ.iwa.model.Demande;
import univ.iwa.model.Formation;
import univ.iwa.model.UserInfo;

public interface DemandeRepository extends JpaRepository<Demande, Long> {
	List<Demande> findByFormateur(UserInfo formateur);

	List<Demande> findByFormation(Formation formation);

	@Transactional
	@Modifying
	@Query("DELETE FROM Demande d WHERE d.formation.id = :formationId")
	void deleteByFormationId(Long formationId);
	


	@Query("SELECT COUNT(d) FROM Demande d")
	int countLines();


}

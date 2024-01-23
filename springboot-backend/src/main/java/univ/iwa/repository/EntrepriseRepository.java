package univ.iwa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import univ.iwa.model.Entreprise;

@Repository
public interface EntrepriseRepository extends JpaRepository<Entreprise, Long>{

}

package univ.iwa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import univ.iwa.model.Cours;
import univ.iwa.model.Formation;

@Repository
public interface CoursRepository extends JpaRepository<Cours, Long>{
    List<Cours> findByCategorie(String categorie);
}

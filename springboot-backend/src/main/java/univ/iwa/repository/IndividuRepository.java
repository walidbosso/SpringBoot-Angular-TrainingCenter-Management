package univ.iwa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import univ.iwa.model.Individu;


@Repository
public interface IndividuRepository extends JpaRepository<Individu, Long> {
	
}

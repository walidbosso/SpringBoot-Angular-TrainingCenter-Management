package univ.iwa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import univ.iwa.model.Evaluation;


@Repository
public interface EvaluationRepository extends JpaRepository<Evaluation, Long> {
	Evaluation findByCode(String code);
}

package univ.iwa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import univ.iwa.model.Evaluation;
import univ.iwa.model.Formation;
import univ.iwa.model.Individu;
import univ.iwa.repository.EvaluationRepository;
import univ.iwa.repository.FormationRepository;
import univ.iwa.repository.IndividuRepository;

@Service
public class EvaluationService {
	
	@Autowired
	private EvaluationRepository evaluationRepository;
	
	@Autowired
	private FormationRepository formationRepository;
	
	public Evaluation addEvaluation(Evaluation evaluation, Long id) {
		Formation formation = formationRepository.findById(id).get();
		Evaluation evaluation2 = evaluationRepository.findByCode(evaluation.getCode());
		Boolean codeValid = false;
		
		for (Individu individu : formation.getIndividus()) {
			
			if( individu.getCode().equals(evaluation.getCode()) ) {
				codeValid = true;
				break;
			}
		}
		
		if ( codeValid && (evaluation2 == null) ) {
			evaluation.setFormation(formation);
			return evaluationRepository.save(evaluation);
		}
		return null;
	}
}

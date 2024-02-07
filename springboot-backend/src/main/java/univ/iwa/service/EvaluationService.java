package univ.iwa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import univ.iwa.repository.EvaluationRepository;

@Service
public class EvaluationService {
	
	@Autowired
	private EvaluationRepository evaluationRepository;
	
	
}

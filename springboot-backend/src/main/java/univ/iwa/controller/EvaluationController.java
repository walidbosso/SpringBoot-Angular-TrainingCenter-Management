package univ.iwa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import univ.iwa.model.Evaluation;
import univ.iwa.model.Formation;
import univ.iwa.service.EvaluationService;
import univ.iwa.service.FormationService;

@RestController
@RequestMapping("/evaluation")
public class EvaluationController {
	
	@Autowired
	private EvaluationService evaluationService;
	
	@Autowired
	private FormationService formationService;
	
	// this end point for test the feedback scenario
	@GetMapping("/test")
	public List<Formation> endedFormations() {
		return formationService.checkEndedFormations();
	}
	
	@PostMapping("/add/formation/{id}")
	public Evaluation addEvaluation(@RequestBody Evaluation evaluation, @PathVariable Long id) {
		return evaluationService.addEvaluation(evaluation, id);
	}
}

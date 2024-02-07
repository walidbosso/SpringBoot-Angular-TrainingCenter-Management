package univ.iwa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import univ.iwa.service.EvaluationService;

@RestController
@RequestMapping("/evaluation")
public class EvaluationController {
	
	@Autowired
	private EvaluationService evaluationService;
}

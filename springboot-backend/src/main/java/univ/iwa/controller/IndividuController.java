package univ.iwa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import univ.iwa.service.IndividuService;

@RestController
@RequestMapping("/individu")
public class IndividuController {
	
	@Autowired
	private IndividuService individuService;

}

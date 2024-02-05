package univ.iwa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import univ.iwa.model.Individu;
import univ.iwa.service.IndividuService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/individu")
public class IndividuController {
	
	@Autowired
	private IndividuService individuService;
	
	@GetMapping("/get")
//	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public List<Individu> getAllIndividus() {
		return individuService.getAllIndividus();
	}
	
	@GetMapping("/get/{id}")
//    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Individu getIndividuById(@PathVariable Long id) {
		return individuService.getIndividuById(id);
	}
	
	@PostMapping("/add")
//	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Individu addIndividu(@RequestBody Individu individu) {
		return individuService.addIndividu(individu);
	}
	
	@PutMapping("/update")
//	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Individu updateIndividu(@RequestBody Individu individu) {
		return individuService.updateIndividu(individu);
	}
	
	@DeleteMapping("/delete/{id}")
//	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public void deleteIndividu(@PathVariable Long id) {
		individuService.deleteIndividu(id);
	}

}

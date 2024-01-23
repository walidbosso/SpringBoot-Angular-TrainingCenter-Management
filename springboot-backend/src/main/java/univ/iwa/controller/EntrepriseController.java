package univ.iwa.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import univ.iwa.model.Entreprise;
import univ.iwa.model.Formation;
import univ.iwa.service.EntrepriseService;



@RestController
public class EntrepriseController {
	
	@Autowired
	EntrepriseService as;
	
	
	@PostMapping("Entreprise")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Entreprise addEntreprise(@RequestBody Entreprise g) {
	return as.addEntreprise(g);
	}
	
	@PostMapping("Entreprise/{id}/Formation/{id2}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Formation addEntrepriseToFormation(@PathVariable Long idEntreprise, @RequestBody Formation m, @PathVariable Long idFormation) {
		
		return as.addEntrepriseToFormation(idEntreprise, m, idFormation);}
	
	
	@GetMapping("Entreprise")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	List<Entreprise> getAllEntreprises(){
	return as.getAllEntreprises();
	}
	
	
	@GetMapping("Entreprise/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Entreprise getEntrepriseById(@PathVariable Long id) {
	return as.getEntrepriseById(id);
	
	}
	
	@GetMapping("Entreprise/{id}/Formation")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public List<Formation> getFormationsByEntrepriseId(@PathVariable Long id) {
	
	return as.getFormationsByEntrepriseId(id);
	}
	
	@DeleteMapping("Entreprise/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public void deleteEntreprise(@PathVariable Long id) {
	as.deleteEntreprise(id);
	}
	
	@PutMapping("Entreprise")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Entreprise updateEntreprise(@RequestBody Entreprise s) {
	return as.updateEntreprise(s);
	}
	}





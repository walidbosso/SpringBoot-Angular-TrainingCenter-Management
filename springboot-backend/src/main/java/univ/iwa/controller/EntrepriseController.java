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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import univ.iwa.model.Entreprise;
import univ.iwa.model.Formation;
import univ.iwa.service.EntrepriseService;

@RestController
@RequestMapping("/entreprise")
public class EntrepriseController {
	
	@Autowired
	private EntrepriseService entrepriseService;
	
	@GetMapping("/get")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public List<Entreprise> getAllEntreprises(){
		return entrepriseService.getAllEntreprises();
	}
	
	@GetMapping("/get/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Entreprise getEntrepriseById(@PathVariable Long id) {
		return entrepriseService.getEntrepriseById(id);
	}
		
	@PostMapping("/add")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Entreprise addEntreprise(@RequestBody Entreprise entreprise) {
		return entrepriseService.addEntreprise(entreprise);
	}
	
	@PutMapping("/update")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Entreprise updateEntreprise(@RequestBody Entreprise entreprise) {
		return entrepriseService.updateEntreprise(entreprise);
	}
	
	@DeleteMapping("delete/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public void deleteEntreprise(@PathVariable Long id) {
		entrepriseService.deleteEntreprise(id);
	}
	/*
	@PostMapping("Entreprise/{idEntreprise}/Formation/{idFormation}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Formation addEntrepriseToFormation(@PathVariable Long idEntreprise, @RequestBody Formation m, @PathVariable Long idFormation) {
		return entrepriseService.addEntrepriseToFormation(idEntreprise, m, idFormation);
	}
	
	@GetMapping("Entreprise/{id}/Formation")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public List<Formation> getFormationsByEntrepriseId(@PathVariable Long id) {
		return entrepriseService.getFormationsByEntrepriseId(id);
	}
	*/
	}





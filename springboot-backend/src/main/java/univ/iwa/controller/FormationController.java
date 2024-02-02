package univ.iwa.controller;

import java.time.LocalDate;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.format.annotation.DateTimeFormat;
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

import univ.iwa.model.Formation;
import univ.iwa.service.FormationService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/formation")
public class FormationController {

	@Autowired 
	private FormationService formationService;
	
	@GetMapping("/get")
	public List<Formation> getAllFormations(){
		return formationService.getAllFormations();
	}
	
	@GetMapping("/get/{id}")
	public Formation getFormationById(@PathVariable Long id) {
		return formationService.getFormationById(id); 
	}
	
	@PostMapping("/add")
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public Formation addFormation(@RequestBody Formation formation) {
		return formationService.addFormation(formation);
	}
	
	@PutMapping("/update")
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public Formation updateFormation(@RequestBody Formation formation) {
		return formationService.updateFormation(formation);
	}
	
	@DeleteMapping("/delete/{id}")
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public void deleteFormation(@PathVariable Long id) {
		formationService.deleteFormation(id);
	}
	
	/*
	@DeleteMapping("Formation/delete")
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public List<Formation> deleteFormationsLessThanNow() {
		return formationService.deleteFormationsLessThanNow();
	}
	
	@GetMapping("formation/date/{date}")
	public List<Formation> findByDateFormationquals(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
	    return formationService.findByDateFormationquals(date);

	}
	
	@DeleteMapping("Formation/delete/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public void deleteFormation(@PathVariable Long id) {
		formationService.deleteFormation(id);
	}
	
	public List<Formation> getAllFormations(int page, int size, String feild){
		return formationService.getAllFormations(page, size, feild);
	}
	*/
}

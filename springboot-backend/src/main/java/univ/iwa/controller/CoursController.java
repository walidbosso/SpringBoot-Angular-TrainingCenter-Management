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

import univ.iwa.model.Cours;
import univ.iwa.model.Formation;
import univ.iwa.service.CoursService;



@RestController
public class CoursController {
	
	@Autowired
	CoursService as;
	
	
	@PostMapping("Cours/post")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Cours addCours(@RequestBody Cours g) {
	return as.addCours(g);
	}
	
	@GetMapping("Cours/categorie/{categorie}")
	public List<Cours> findByCategorie(@PathVariable String categorie) {
	
	    return as.findByCategorie(categorie);

}
	
	@PostMapping("Cours/post/{id}/Formation/{id2}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Formation addCoursToFormation(@PathVariable Long idCours, @RequestBody Formation m, @PathVariable Long idFormation) {
		
		return as.addCoursToFormation(idCours, m, idFormation);}
	
	
	@GetMapping("Cours/get")
	List<Cours> getAllCourss(){
	return as.getAllCourss();
	}
	
	
	@GetMapping("Cours/get/{id}")
	public Cours getCoursById(@PathVariable Long id) {
	return as.getCoursById(id);
	
	}
	
	@GetMapping("Cours/get/{id}/Formation")
	public List<Formation> getFormationsByCoursId(@PathVariable Long id) {
	
	return as.getFormationsByCoursId(id);
	}
	
	@DeleteMapping("Cours/delete/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public void deleteCours(@PathVariable Long id) {
	as.deleteCours(id);
	}
	
	@PutMapping("Cours/put")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Cours updateCours(@RequestBody Cours s) {
	return as.updateCours(s);
	}
	}





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

import univ.iwa.model.UserInfo;
import univ.iwa.model.Formation;
import univ.iwa.service.FormateurService;



@RestController
public class FormateurController {
	
	@Autowired
	FormateurService as;
	
	
	@PostMapping("Formateur")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public UserInfo addFormateur(@RequestBody UserInfo g) {
	return as.addFormateur(g);
	}
	
	@PostMapping("Formateur/{idFormateur}/Formation/{idFormation}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Formation addFormateurToFormation(@PathVariable Integer idFormateur, @RequestBody Formation m, @PathVariable Long idFormation) {
		
		return as.addFormateurToFormation(idFormateur, m, idFormation);}
	
	
	@GetMapping("Formateur")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	List<UserInfo> getAllFormateurs(){
	return as.getAllFormateurs();
	}
	
	
	@GetMapping("Formateur/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public UserInfo getFormateurById(@PathVariable Integer id) {
	return as.getFormateurById(id);
	
	}
	
	@GetMapping("Formateur/{id}/Formation")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public List<Formation> getFormationsByFormateurId(@PathVariable Integer id) {
	
	return as.getFormationsByFormateurId(id);
	}
	
	@DeleteMapping("Formateur/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT', 'ROLE_ASSISTANT')")
	public void deleteFormateur(@PathVariable Integer id) {
	as.deleteFormateur(id);
	}
	
	@PutMapping("Formateur/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public UserInfo updateFormateur(@RequestBody UserInfo s, int id) {
	return as.updateFormateur(s,id);
	}
	}





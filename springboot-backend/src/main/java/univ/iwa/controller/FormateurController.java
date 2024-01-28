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

import univ.iwa.model.UserInfo;
import univ.iwa.model.Formation;
import univ.iwa.service.FormateurService;

@RestController
@RequestMapping("/formateur")
public class FormateurController {
	
	@Autowired
	private FormateurService formateurService;
	
	@GetMapping("/get")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public List<UserInfo> getAllFormateurs(){
		return formateurService.getAllFormateurs();
	}
	
	@GetMapping("/get/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public UserInfo getFormateurById(@PathVariable Integer id) {
		return formateurService.getFormateurById(id);
	}
	
	@PostMapping("/add")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public UserInfo addFormateur(@RequestBody UserInfo formateur) {
		return formateurService.addFormateur(formateur);
	}
	
	@PutMapping("/update")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public UserInfo updateFormateur(@RequestBody UserInfo formateur) {
		return formateurService.updateFormateur(formateur);
	}

	@DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public void deleteFormateur(@PathVariable Integer id) {
		formateurService.deleteFormateur(id);
	}
	/*
	@PostMapping("add/{idFormateur}/formation/{idFormation}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public Formation addFormateurToFormation(@PathVariable Integer idFormateur, @RequestBody Formation m, @PathVariable Long idFormation) {
		return formateurService.addFormateurToFormation(idFormateur, m, idFormation);
	}
	
	@GetMapping("Formateur/{id}/Formation")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public List<Formation> getFormationsByFormateurId(@PathVariable Integer id) {
		return formateurService.getFormationsByFormateurId(id);
	}
	*/
}





package univ.iwa.controller;



import java.time.LocalDate;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.format.annotation.DateTimeFormat;
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
import univ.iwa.service.FormationService;


@RestController
public class FormationController {

	@Autowired 
	FormationService ms;
	
	@GetMapping("Formation/get")
		public List<Formation> getAllFormations(){
		return ms.getAllFormations();
	}
	
	@GetMapping("Formation/get/{id}")
		public Formation getFormationById(@PathVariable Long id) {
		return ms.getFormationById(id); 
	}
	
	@GetMapping("Formation/get/{id}/Cours")
	public Cours getCoursByFormationId(@PathVariable Long id) {
	return ms.getCoursByFormationId(id); 
}
//	@GetMapping("Formation/{id}/equipes")
//	public List<Equipe> getEquipesByFormationId(@PathVariable Long id) {
//		return ms.getEquipesByFormationId(id);
//	
//}
	
	@GetMapping("Formation/ville/{ville}")
	public List<Formation> findByVille(@PathVariable String ville) {
	
	    return ms.findByVille(ville);

}

	@GetMapping("Formation/date/{date}")
	public List<Formation> findByDateFormationquals(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
	
	    return ms.findByDateFormationquals(date);

}
	@PostMapping("Formation/post")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
		public Formation addFormation(@RequestBody Formation s) {
		return ms.addFormation(s);
	}
	
	@PutMapping("Formation/put")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
		public Formation updateFormation(@RequestBody Formation s) {
		return ms.updateFormation(s);
	}
	
	@DeleteMapping("Formation/delete/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
		public void deleteFormation(@PathVariable Long id) {
		ms.deleteFormation(id);
	}
	
	@DeleteMapping("Formation/delete")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
	public List<Formation> deleteFormationsLessThanNow() {
		return ms.deleteFormationsLessThanNow();
}	
	
	public List<Formation> getAllFormations(int page, int size, String feild){
		return ms.getAllFormations(page, size, feild);
	}
}

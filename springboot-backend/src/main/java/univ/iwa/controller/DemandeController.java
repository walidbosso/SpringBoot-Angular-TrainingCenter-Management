package univ.iwa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import univ.iwa.model.Demande;
import univ.iwa.service.DemandeService;
import univ.iwa.service.FormateurService;

@RestController
//@CrossOrigin(origins = "*")
@RequestMapping("/demande")
public class DemandeController {

	@Autowired
	private DemandeService demandeService;
	@Autowired
	private FormateurService formateurService;

	@GetMapping("/get")
	public List<Demande> getAlldemandes() {
		return demandeService.getAllDemandes();
	}
	
	@GetMapping("/count")
	public int countLines() {
		
		return demandeService.countLines();
	}

	@GetMapping("/get/{id}")
	public Demande getdemandeById(@PathVariable Long id) {
		return demandeService.getDemandeById(id);
	}

	@PostMapping("/add")
//	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public Demande addDemande(@RequestBody Demande demande) {
		
		System.out.print(demande);
		
//		formateurService.addFormateur(demande.getFormateur());
		
		return demandeService.addDemande(demande);
	}

//
//	@PutMapping("/update")
////	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
//	public demande updatedemande(@RequestBody demande demande) {
//		return demandeService.updatedemande(demande);
//	}

	@DeleteMapping("/delete/{id}")
//	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public void deletedemande(@PathVariable Long id) {
		System.out.print("deletedemande"+ id);
		demandeService.deleteDemande(id);
	}
	
	@DeleteMapping("/delete/formation/{id}")
//	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public void deleteDemandesByFormationId(@PathVariable Long id) {
		System.out.print("deletedemande"+ id);
		demandeService.deleteDemandesByFormationId(id);
	}

	public List<Demande> getAlldemandes(int page, int size, String feild) {
		return demandeService.getAllDemandes(page, size, feild);
	}

}

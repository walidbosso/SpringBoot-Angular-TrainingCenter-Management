package univ.iwa.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import univ.iwa.model.Formation;
import univ.iwa.service.FormationService;

@RestController
//@CrossOrigin(origins = "*")
@RequestMapping("/formation")
public class FormationController {

	@Autowired
	private FormationService formationService;

	@GetMapping("/get")
	public List<Formation> getAllFormations() {
		return formationService.getAllFormations();
	}

	@GetMapping("/get/{id}")
	public Formation getFormationById(@PathVariable Long id) {
		return formationService.getFormationById(id);
	}

	@GetMapping("/categorie/{categorie}")
	public List<Formation> findByCategorie(@PathVariable String categorie) {
		System.out.println(categorie);
		return formationService.findByCategorie(categorie);

	}

	@GetMapping("/nom/{nom}")
	public List<Formation> findByNomLike(@PathVariable String nom) {
		System.out.println(nom);
		return formationService.findByNomLike(nom);

	}

	@PostMapping(value = "/add", consumes = { "multipart/form-data", "application/json" })
//	This is how they look in angular formData.append('imageFile', imageFile); formData.append('formation', JSON.stringify(formation));
//	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public Formation addFormation(@RequestParam("formation") String formationJson,
			@RequestParam(value = "imageFile", required = false) MultipartFile imageFile) throws IOException {
		System.out.println("formation + imageFile : " + formationJson + imageFile);
		ObjectMapper objectMapper = new ObjectMapper();
		Formation formation = objectMapper.readValue(formationJson, Formation.class);
		return formationService.addFormation(formation, imageFile);
	}

//	fetch image related to a formation, used directly in home and dashboard
	@GetMapping("/{formationId}/image")
	public ResponseEntity<byte[]> getFormationImage(@PathVariable Long formationId) {

		Formation formation = formationService.getFormationById(formationId);
		return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG) // adjust based on your image type
				.body(formation.getImageData());

	}

	@PutMapping("/update")
//	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public Formation updateFormation(@RequestBody Formation formation) {
		return formationService.updateFormation(formation);
	}

	@DeleteMapping("/delete/{id}")
//	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public void deleteFormation(@PathVariable Long id) {
		formationService.deleteFormation(id);
	}

//	@DeleteMapping("/delete")
//	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
//	public List<Formation> deleteFormationsLessThanNow() {
//		return formationService.deleteFormationsLessThanNow();
//	}

	@GetMapping("/date/{date}")
	public List<Formation> findByDateFormationquals(
			@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
		return formationService.findByDateFormationEquals(date);

	}

//	@DeleteMapping("/delete/{id}")
//    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN', 'ROLE_ASSISTANT')")
//	public void deleteFormation(@PathVariable Long id) {
//		formationService.deleteFormation(id);
//	}
//	
//	public List<Formation> getAllFormations(int page, int size, String feild){
//		return formationService.getAllFormations(page, size, feild);
//	}

}

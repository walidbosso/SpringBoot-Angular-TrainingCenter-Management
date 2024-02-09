package univ.iwa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import jakarta.persistence.EntityNotFoundException;
import univ.iwa.model.UserInfo;
import univ.iwa.model.Formation;
import univ.iwa.repository.UserInfoRepository;
import univ.iwa.repository.FormationRepository;

@Service
public class FormateurService {
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private UserInfoRepository userInfoRepository;
	
	@Autowired
	private FormationRepository formationRepository;
	
	public List<UserInfo> getAllFormateurs(){
	      List<UserInfo> formateurs = userInfoRepository.findByRoles("ROLE_FORMATEUR");
	      return formateurs;
	}
	
	public UserInfo getFormateurById(Integer id) {
		return userInfoRepository.findById(id).get();
	}
	
	//TACHE3, WE RECEIVE a whole formateur avec les mot cles competences aussi, on encode password et on ajoute role
	public UserInfo addFormateur( UserInfo formateur) {
		formateur.setPassword(encoder.encode(formateur.getPassword()));
		formateur.setRoles("ROLE_FORMATEUR");
		return userInfoRepository.save(formateur);
	}
	
	public UserInfo updateFormateur( UserInfo formateur) {
		if (formateur.getPassword() != null && !formateur.getPassword().isEmpty())
			formateur.setPassword(encoder.encode(formateur.getPassword()));
		return userInfoRepository.save(formateur);
	}
	
	public void deleteFormateur( Integer id) {
		UserInfo formateur = userInfoRepository.findById(id).get();
		List<Formation> Formations = formationRepository.findByFormateur(formateur);
		//lambda expression
		Formations.forEach(formation -> {
			formation.setFormateur(null);
		});
		
		userInfoRepository.deleteById(id);
	}
	
	
//	public void deleteFormateur( Integer id) {
//		List<Formation> Formations = getFormationsByFormateurId(id);
//		//lambda expression
//		Formations.forEach(formation -> {
//			formation.setFormateur(null);
//		});
//		
//		userInfoRepository.deleteById(id);
//	}
	
	public List<Formation> getFormationsByFormateurId(Integer id) {
		UserInfo formateur = userInfoRepository.findById(id).get();
		if(formateur.getRoles()!="ROLE_FORMATEUR")
			throw new EntityNotFoundException("No Formateur with this id");
	
		//we pass that group 
		return formationRepository.findByFormateur(formateur);
	}
	
	//TACHE9
	public Formation addFormateurToFormation( Integer idFormateur,  Long idFormation) {
		UserInfo e= userInfoRepository.findById(idFormateur).orElseThrow(() -> new EntityNotFoundException("UserInfo not found"));
//		if(e.getRoles()!="ROLE_FORMAT") throw new EntityNotFoundException("Not a Formateur");
		
		//si formation existe deja
		Formation m2= formationRepository.findById(idFormation).orElse(null);
		//System.out.println(m2);
//		if(m2==null) {f.setFormateur(e); return formationRepository.save(f);}
//		else {//new formation avec UserInfo
			m2.setFormateur(e);
			return formationRepository.save(m2);}
//	}
	
}

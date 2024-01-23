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
	@Autowired PasswordEncoder encoder;


	@Autowired
	UserInfoRepository uir;
	@Autowired
	FormationRepository fr;
	
	//TACHE3, WE RECEIVE a whole formateur avec les mot cles competences aussi, on encode password et on ajoute role
	public UserInfo addFormateur( UserInfo f) {
		f.setPassword(encoder.encode(f.getPassword()));
		f.setRoles("ROLE_FORMAT");
	return uir.save(f);
	}
	
	//TACHE9
	public Formation addFormateurToFormation( Integer idFormateur,  Formation f,  Long idFormation) {
		UserInfo e= uir.findById(idFormateur).orElseThrow(() -> new EntityNotFoundException("UserInfo not found"));
		if(e.getRoles()!="ROLE_FORMAT") throw new EntityNotFoundException("Not a Formateur");
		
		//si formation existe deja
		Formation m2= fr.findById(idFormation).orElse(null);
		//System.out.println(m2);
		if(m2==null) {f.setFormateur(e); return fr.save(f);}
		else {//new formation avec UserInfo
			m2.setFormateur(e);
			return fr.save(m2);}
	}
	
	public List<UserInfo> getAllFormateurs(){
	      List<UserInfo> formateurs = uir.findByRoles("ROLE_FORMAT");
	return formateurs;
	}
	
	
	public UserInfo getFormateurById( Integer id) {
		UserInfo f = uir.findById(id).get();
		if(f.getRoles()!="ROLE_FORMAT") throw new EntityNotFoundException("No Formateur with this id");
		else return f; 
	
	}
	
	public List<Formation> getFormationsByFormateurId( Integer id) {
	UserInfo f = uir.findById(id).get();
	if(f.getRoles()!="ROLE_FORMAT") throw new EntityNotFoundException("No Formateur with this id");

	//we pass that group 
	return fr.findByFormateur(f); 
	}
	
	public void deleteFormateur( Integer id) {
	List<Formation> Formations=getFormationsByFormateurId(id); 
	Formations.forEach(f->{//expression lambda
	f.setFormateur(null);
	});
	uir.deleteById(id);
	}
	
	public UserInfo updateFormateur( UserInfo f, int id) {
		UserInfo fi = uir.findById(id).get();
		if (f.getPassword() != null && !f.getPassword().isEmpty()) 
			fi.setPassword(encoder.encode(fi.getPassword()));
	return uir.save(fi);
	}
}

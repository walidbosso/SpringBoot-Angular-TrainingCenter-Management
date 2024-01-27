package univ.iwa.service;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.security.core.userdetails.UserDetails; 
import org.springframework.security.core.userdetails.UserDetailsService; 
import org.springframework.security.core.userdetails.UsernameNotFoundException; 
import org.springframework.security.crypto.password.PasswordEncoder; 
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;
import univ.iwa.model.UserInfo;
import univ.iwa.model.UserInfoDetails;
import univ.iwa.repository.UserInfoRepository;

import java.util.Optional; 

@Service
public class UserInfoService implements UserDetailsService { 
	@Autowired UserInfoRepository repository; 
	@Autowired PasswordEncoder encoder; 
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException { 
		Optional<UserInfo> userDetail = repository.findByName(username); 
		// Converting userDetail to UserDetails
		return userDetail.map(UserInfoDetails::new) 
				.orElseThrow(() -> new UsernameNotFoundException("User not found " + username)); 
	} 
	public String addUser(UserInfo userInfo) { 
		userInfo.setPassword(encoder.encode(userInfo.getPassword())); 
		repository.save(userInfo); 
		return "User Added Successfully"; 
	} 
	/**/
	//CREATE 3 USERS AS SAMPLE
	@PostConstruct
	public String admin(){
		UserInfo admin = new UserInfo();
		admin.setId(1);
		admin.setName("admin");
		admin.setRoles("ROLE_ADMIN");
		admin.setPassword(encoder.encode("1234"));
		repository.save(admin);
		return "admin added successfully";
	}

	@PostConstruct
	public String assistant(){
		UserInfo assistant = new UserInfo();
		assistant.setId(2);
		assistant.setName("assistant");
		assistant.setPassword(encoder.encode("1234"));
		assistant.setRoles("ROLE_ASSISTANT");
		repository.save(assistant);
		return "assistant added successfully";
	}
	
	@PostConstruct
	public String formateur(){
		UserInfo formateur = new UserInfo();
		formateur.setId(3);
		formateur.setName("formateur");
		formateur.setRoles("ROLE_FORMATEUR");
		formateur.setPassword(encoder.encode("1234"));
		repository.save(formateur);
		return "formateur added successfully";
	}
	
} 

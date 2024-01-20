package univ.iwa.service;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.security.core.userdetails.UserDetails; 
import org.springframework.security.core.userdetails.UserDetailsService; 
import org.springframework.security.core.userdetails.UsernameNotFoundException; 
import org.springframework.security.crypto.password.PasswordEncoder; 
import org.springframework.stereotype.Service;

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
} 

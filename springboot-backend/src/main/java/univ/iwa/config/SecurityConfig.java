package univ.iwa.config;
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.context.annotation.Bean; 
import org.springframework.context.annotation.Configuration; 
import org.springframework.security.authentication.AuthenticationManager; 
import org.springframework.security.authentication.AuthenticationProvider; 
import org.springframework.security.authentication.dao.DaoAuthenticationProvider; 
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration; 
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity; 
import org.springframework.security.config.annotation.web.builders.HttpSecurity; 
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity; 
import org.springframework.security.core.userdetails.UserDetailsService; 
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; 
import org.springframework.security.crypto.password.PasswordEncoder; 
import org.springframework.security.web.SecurityFilterChain; 
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import univ.iwa.filters.JwtAuthFilter;
import univ.iwa.service.UserInfoService; 

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig { 
	@Autowired JwtAuthFilter authFilter; 
	@Bean
	public UserDetailsService userDetailsService() { 
		return new UserInfoService(); 
	} 
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception { 
		http.authorizeHttpRequests((auth)->auth
			.requestMatchers("/auth/home", "/auth/addNewUser", "/auth/generateToken", 
					"/Formation/date/**","formation/get/**").permitAll() 
			.requestMatchers("/entreprise/**").permitAll() //TEST WE WILL CHANGE IT LATER
			.requestMatchers("/auth/assistant/**").authenticated() 
			.requestMatchers("/auth/admin/**").authenticated() 	
			.requestMatchers("/auth/formateur/**").authenticated() 
//			.requestMatchers("/auth/individu/**").authenticated() 
			.requestMatchers("/formateur/**").authenticated()
			.requestMatchers("/formation/**").authenticated()
			.requestMatchers("/individu/**").authenticated()
			).csrf(csrf->csrf.disable())
			.authenticationProvider(authenticationProvider()) 
			.addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class) ;	
		return http.build();
	} 
	// Password Encoding 
	@Bean
	public PasswordEncoder passwordEncoder() { 
		return new BCryptPasswordEncoder(); 
	} 
	@Bean
	public AuthenticationProvider authenticationProvider() { 
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider(); 
		authenticationProvider.setUserDetailsService(userDetailsService()); 
		authenticationProvider.setPasswordEncoder(passwordEncoder()); 
		return authenticationProvider; 
	} 
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception { 
		return config.getAuthenticationManager(); 
	} 
} 

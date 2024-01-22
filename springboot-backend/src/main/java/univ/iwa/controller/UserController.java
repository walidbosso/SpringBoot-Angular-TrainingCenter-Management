package univ.iwa.controller;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import univ.iwa.model.AuthRequest;
import univ.iwa.model.UserInfo;
import univ.iwa.service.JwtService;
import univ.iwa.service.UserInfoService;
@RestController
@RequestMapping("/auth") 
public class UserController { 
	
    @Autowired UserInfoService service; 
    @Autowired JwtService jwtService; 
    @Autowired AuthenticationManager authenticationManager; 
    
    @GetMapping("/welcome") 
    public String welcome() {return "Welcome this endpoint is not secure";} 
    
    @PostMapping("/addNewUser") 
    public String addNewUser(@RequestBody UserInfo userInfo) { 
        return service.addUser(userInfo); 
    } 
    
    @GetMapping("/user/assistantProfile") 
    @PreAuthorize("hasAuthority('ROLE_ASSISTANT')") 
    public String userProfile() { return "Welcome to Assistant Profile"; } 
  
    @GetMapping("/admin/adminProfile") 
    @PreAuthorize("hasAuthority('ROLE_ADMIN')") 
    public String adminProfile() { return "Welcome to Admin Profile"; } 
  
    @PostMapping("/generateToken")
    public ResponseEntity<String> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            List<String> roles = authentication.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList());
            String token = jwtService.generateToken(authRequest.getUsername(), roles.get(0));
            return ResponseEntity.ok("{\"Token\":\"" + token + "\",\"role\":\"" + roles.get(0) + "\"}");
        } else {
            throw new UsernameNotFoundException("Invalid user request!");
        }
    }
} 
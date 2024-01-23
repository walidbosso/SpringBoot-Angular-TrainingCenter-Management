package univ.iwa.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity; 
import jakarta.persistence.GeneratedValue; 
import jakarta.persistence.GenerationType; 
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor; 
import lombok.Data; 
import lombok.NoArgsConstructor; 

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class UserInfo { 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int id; 
	private String name; 
	private String email; 
	private String password; 
	//admin, assistant, formateur, user
	private String roles; 
	
	//pour formateur
	//separer par virgule, puis split etc
	private String competences; 
	//5stars sera calcule d'apre feedback
	private int remarques;
	
	//pour individu
	private String birthday;
	private String tel;
	
	
	
	  @OneToMany(mappedBy = "formateur") // mappedBy refers to the field in the Formation class
	    @JsonIgnore 
	    private List<Formation> formateurFormations;
	
	    @ManyToMany
	    @JoinTable(
	            name = "individus",
	            joinColumns = @JoinColumn(name = "user_info_id"),
	            inverseJoinColumns = @JoinColumn(name = "formation_id"))
	    private List<Formation> individusFormations;

} 


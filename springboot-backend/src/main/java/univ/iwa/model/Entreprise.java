package univ.iwa.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Entreprise {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	Long id;
	String nom;
	String address;
	String tel;
	String url;
	String email;
	
	@OneToMany(mappedBy = "entreprise") 
	@JsonIgnore 
	List<Formation> formations; 
}

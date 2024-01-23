package univ.iwa.model;

import java.util.Date;
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

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class Cours {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private Long id;
	private String nom;
	private Date  temps;
	private double cout;
	private String objectif;
	private String categorie;
	
	@OneToMany(mappedBy = "cours") 
	@JsonIgnore //on recupere list de cours we ignore the formations, because if we want to recupere a cours it will recupere formations
	List<Formation> formations; 
	
}

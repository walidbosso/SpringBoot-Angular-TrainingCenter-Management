package univ.iwa.model;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Individu {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private Long id;
	private String nom;
	private String prenom;
	private String email;
	private String tele;
	private String ville;
	private String code;
	@Temporal(TemporalType.DATE)
	private Date dateNaissance;
	
	@JsonIgnore
	@ManyToMany(mappedBy = "individus")
    private List<Formation> formations;
	
}

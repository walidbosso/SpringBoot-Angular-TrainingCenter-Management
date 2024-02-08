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
public class UserInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String password;
	private String email;
	// admin, assistant, formateur
	private String roles;

	// pour formateur
	// separer par virgule, puis split etc
	private String competences;
	// 5 stars sera calcule d'apres feedback
	private String remarques;

	// mappedBy refers to the field in the Formation class
	// Relation between Formateur and Formation
	@OneToMany(mappedBy = "formateur")
	@JsonIgnore
	private List<Formation> formateurFormations;

	@OneToMany(mappedBy = "formateur")
	@JsonIgnore
	private List<Demande> demandes;

}

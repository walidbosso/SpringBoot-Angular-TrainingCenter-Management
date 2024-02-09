package univ.iwa.model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Formation {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String nom;
	private String categorie;
	private String objectif;
	private String description;
	private String  duree;
	private double cout;
	@Temporal(TemporalType.DATE)
	private Date dateDebut;
	@Temporal(TemporalType.DATE)
	private Date dateFin;
	
	//IMAGES
	@Lob
	@Column(name = "image_data", length = 16777215) // Adjust length based on your database
    private byte[] imageData;

    private String imageName;

    @ManyToOne()
    private UserInfo formateur;
    
    // cascade = {CascadeType.PERSIST, CascadeType.MERGE}
    @ManyToOne()
    private Entreprise entreprise;

    @ManyToMany
    @JoinTable(
        name = "individu_formation",
        joinColumns = @JoinColumn(name = "formation_id"),
        inverseJoinColumns = @JoinColumn(name = "individu_id")
    )
    private List<Individu> individus;
}

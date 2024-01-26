package univ.iwa.model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
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
	private double cout;
	private Date  duree;
	@Temporal(TemporalType.DATE)
	private Date dateDebut;
	@Temporal(TemporalType.DATE)
	private Date dateFin;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private UserInfo formateur;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Entreprise entreprise;

    @ManyToMany
    @JoinTable(
        name = "individu_formation",
        joinColumns = @JoinColumn(name = "formation_id"),
        inverseJoinColumns = @JoinColumn(name = "individu_id")
    )
    private List<Individu> individus;
    
}

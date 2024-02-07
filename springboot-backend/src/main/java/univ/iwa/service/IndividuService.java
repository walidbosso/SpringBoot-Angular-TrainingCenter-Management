package univ.iwa.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import univ.iwa.model.Formation;
import univ.iwa.model.Individu;
import univ.iwa.repository.FormationRepository;
import univ.iwa.repository.IndividuRepository;

@Service
public class IndividuService {
	
	@Autowired
	private IndividuRepository individuRepository;
	
	@Autowired
	private FormationRepository formationRepository;
	
	public List<Individu> getAllIndividus() {
		return individuRepository.findAll();
	}
	
	public Individu getIndividuById(Long id) {
		return individuRepository.findById(id).get();
	}
	
	public Individu addIndividu(Individu individu) {
		return individuRepository.save(individu);
	}
	
	public Individu updateIndividu(Individu individu) {
		System.out.println("Hello : " + individu);
		return individuRepository.save(individu);
	}
	
	public void deleteIndividu(Long id) {
		Individu individu = individuRepository.findById(id).get();
		// Remove the association between individu and formation
		individu.getFormations().forEach(formation ->
			formation.getIndividus().remove(individu)
		);
		
		// Delete the individu
		individuRepository.deleteById(id);
	}

	
	public Individu addIndividuToFormation(Long id, Individu individu) {
		individu.setCode(UUID.randomUUID().toString().substring(0, 10));
		individu = individuRepository.save(individu);
		
	    Formation formation = formationRepository.findById(id).get();
	    formation.getIndividus().add(individu);
	    formationRepository.save(formation);
	    return individu;
	}
	
}

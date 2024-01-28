package univ.iwa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import univ.iwa.model.Individu;
import univ.iwa.repository.IndividuRepository;

@Service
public class IndividuService {
	
	@Autowired
	private IndividuRepository individuRepository;
	
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
	
}

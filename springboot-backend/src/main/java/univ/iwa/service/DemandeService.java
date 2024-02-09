package univ.iwa.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import univ.iwa.model.Demande;
import univ.iwa.repository.DemandeRepository;

@Service
public class DemandeService {
	@Autowired
	private DemandeRepository demandeRepository;

	public List<Demande> getAllDemandes() {
		return demandeRepository.findAll();
	}

	public Demande getDemandeById(Long id) {
		return demandeRepository.findById(id).get();
	}

	public Demande addDemande(Demande demande) {

		return demandeRepository.save(demande);

	}

	public int countLines() {

		return demandeRepository.countLines();

	}
//	public Demande updateDemande(Demande demande) {
//		return demandeRepository.save(demande);
//	}

	@Transactional
	public void deleteDemande(Long id) {
		demandeRepository.deleteById(id);
	}
	
	@Transactional
	public void deleteDemandesByFormationId(Long id) {
		demandeRepository.deleteByFormationId(id);
	}

	public List<Demande> getAllDemandes(int page, int size, String feild) {
		Pageable pg = PageRequest.of(page, size, Sort.by(feild));
		Page<Demande> demandesPage = demandeRepository.findAll(pg);
		return demandesPage.getContent();

	}
}

package univ.iwa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import univ.iwa.repository.IndividuRepository;

@Service
public class IndividuService {
	
	@Autowired
	private IndividuRepository individuRepository;
}

package br.edu.cesmac.projetofinal.repository;

import br.edu.cesmac.projetofinal.model.ClienteModel;
import org.springframework.data.repository.CrudRepository;

public interface ClienteRepository extends CrudRepository<ClienteModel, String> {

}


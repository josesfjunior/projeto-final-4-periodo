package br.edu.cesmac.projetofinal.repository;

import br.edu.cesmac.projetofinal.model.FuncionariosModel;
import org.springframework.data.repository.CrudRepository;

public interface FuncionarioRepository extends CrudRepository<FuncionariosModel, Integer> {
}

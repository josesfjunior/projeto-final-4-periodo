package br.edu.cesmac.projetofinal.repository;

import br.edu.cesmac.projetofinal.model.ProdutoModel;
import org.springframework.data.repository.CrudRepository;

public interface ProdutoRepository extends CrudRepository <ProdutoModel, Integer> {
}

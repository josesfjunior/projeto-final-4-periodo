package br.edu.cesmac.projetofinal.controller;


import br.edu.cesmac.projetofinal.model.ProdutoModel;
import br.edu.cesmac.projetofinal.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repository;

    @GetMapping
    public List<ProdutoModel> listar() {
        return (List<ProdutoModel>) repository.findAll();
    }

    @PostMapping
    public ProdutoModel salvarProduto(@RequestBody ProdutoModel produto) {
        return repository.save(produto);
    }

    @GetMapping(path = "/produtos/{codigo}")
    public ResponseEntity<ProdutoModel> consultar(@PathVariable("codigo") Integer codigo) {
        return repository.findById(codigo)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

}

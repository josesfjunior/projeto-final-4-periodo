package br.edu.cesmac.projetofinal.controller;


import br.edu.cesmac.projetofinal.model.ClienteModel;
import br.edu.cesmac.projetofinal.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/clientes")
@CrossOrigin
public class ClienteController {

    @Autowired
    ClienteRepository repository;

    @PostMapping//Salva os Clientes no banco.
    public ClienteModel salvarCliente(@RequestBody ClienteModel cliente) {
        return repository.save(cliente);
    }

    @GetMapping //Lista todos os Clientes
    public List<ClienteModel> listarClientes() {
        return (List<ClienteModel>) repository.findAll();
    }


    @GetMapping(path = "/{codigo}") //Lista um cliente especifico.
    public ResponseEntity listarClientesById(@PathVariable("codigo") String codigo) {
        return repository.findById(codigo)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());

    }

    @DeleteMapping("/{cpf}")
    void deletarCliente(@PathVariable("cpf") String cpf) {
        repository.deleteById(cpf);
    }

    @PutMapping(path = "/{cpf}")
    public ClienteModel atualizarCliente(@RequestBody ClienteModel cliente, @PathVariable("cpf") String cpf) {
        return repository.findById(cpf)
                .map(usuario -> {
                    usuario.setNome(cliente.getNome());
                    usuario.setIdade(cliente.getIdade());
                    usuario.setSexo(cliente.getSexo());
                    usuario.setTelefone(cliente.getTelefone());
                    usuario.setDescricaoCliente(cliente.getDescricaoCliente());
                    usuario.setPreferenciaProduto(cliente.getPreferenciaProduto());
                    usuario.setPreferenciaCorte(cliente.getPreferenciaCorte());
                    return repository.save(cliente);
                })
                .orElseGet(() -> {
                    cliente.setCpf(cpf);
                    return repository.save(cliente);
                });


    }


}

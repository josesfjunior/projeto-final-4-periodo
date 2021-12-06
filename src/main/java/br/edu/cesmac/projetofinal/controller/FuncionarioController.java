package br.edu.cesmac.projetofinal.controller;


import br.edu.cesmac.projetofinal.model.FuncionariosModel;
import br.edu.cesmac.projetofinal.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/funcionario")
@CrossOrigin
public class FuncionarioController {

    @Autowired
    FuncionarioRepository repository;

    @GetMapping
    public List<FuncionariosModel> listarFuncionarios() {
        return (List<FuncionariosModel>) repository.findAll();
    }

    @PostMapping//Salva os Funcionarios no banco.
    public FuncionariosModel salvarFuncionario(@RequestBody FuncionariosModel funcionario) {
        return repository.save(funcionario);
    }


    @PostMapping("/verificar")
    public boolean verificarLogin(@RequestBody FuncionariosModel funcionario) {
        Optional<FuncionariosModel> f = repository.findById(funcionario.getId());
        if (f.isPresent()) {
            return validarLogin(f.get(), funcionario);
        }
        return false;
    }

    private boolean validarLogin(FuncionariosModel funcionario, FuncionariosModel usuario) {
        if (usuario.getEmail().equals(funcionario.getEmail())) {

            if (usuario.getSenha().equals(funcionario.getSenha())) {

                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    ;

    @PutMapping(path = "/{id}")
    public FuncionariosModel atualizarFuncionario(@RequestBody FuncionariosModel funcionario, @PathVariable("id") Integer id) {
        return repository.findById(id)
                .map(usuario -> {
                    usuario.setEmail(funcionario.getEmail());
                    usuario.setNome(funcionario.getNome());
                    usuario.setSenha(funcionario.getSenha());
                    usuario.setCargo(funcionario.getCargo());
                    return repository.save(funcionario);
                })
                .orElseGet(() -> {
                    funcionario.setId(id);
                    return repository.save(funcionario);
                });


    }

    ;

    @DeleteMapping("/{id}")
    void deletarFuncionario(@PathVariable("id") Integer id) {
        repository.deleteById(id);
    }
}
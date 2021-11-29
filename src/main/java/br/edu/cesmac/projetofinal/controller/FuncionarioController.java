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
//        repository.findById(funcionario.getEmail())
//                .map(usuario -> {
//                    if (usuario.getEmail().equals(funcionario.getEmail()) ) {
//                        System.out.println(usuario.getEmail().equals(funcionario.getEmail()));
//                        if (usuario.getSenha().equals(funcionario.getSenha())) {
//                            System.out.println(usuario.getSenha().equals(funcionario.getSenha()));
//                            return true;
//                        } else {
//                            return false;
//                        }
//                    } else {
//                        return false;
//                    }
//                });
        Optional<FuncionariosModel> f = repository.findById(funcionario.getEmail());
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


}

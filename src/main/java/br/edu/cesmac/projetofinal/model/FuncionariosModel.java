package br.edu.cesmac.projetofinal.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity(name = "Funcionarios")
public class FuncionariosModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    
    private String email;

    @Column
    private String nome;

    @Column
    private String senha;

    @Column
    private String cargo;



}

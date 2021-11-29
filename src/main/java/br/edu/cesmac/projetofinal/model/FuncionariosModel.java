package br.edu.cesmac.projetofinal.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity(name = "Funcionarios")
public class FuncionariosModel {

    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Id
    private String email;

    @Column
    private String nome;

    @Column
    private String senha;

    @Column
    private String cargo;



}

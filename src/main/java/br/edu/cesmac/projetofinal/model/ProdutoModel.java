package br.edu.cesmac.projetofinal.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity(name = "Produtos")
public class ProdutoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String produto;

    @Column(nullable = false)
    private float quantidade;

    @Column(nullable = false)
    private double valor;


}

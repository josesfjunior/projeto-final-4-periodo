package br.edu.cesmac.projetofinal.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity(name = "Servicos")
public class ServicosModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private Integer id;

    @Column
    private String servico;

    @Column
    private double preco;

}

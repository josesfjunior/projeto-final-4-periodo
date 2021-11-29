package br.edu.cesmac.projetofinal.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity(name = "Clientes")
public class ClienteModel {
    @Id
    private String cpf;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, length = 1)
    private String sexo;

    @Column(nullable = false)
    private int idade;

    @Column(nullable = false)
    private String telefone;

    @Column(nullable = false)
    private String descricaoCliente;

    @Column(nullable = false)
    private String preferenciaProduto;

    @Column(nullable = false)
    private String preferenciaCorte;

}

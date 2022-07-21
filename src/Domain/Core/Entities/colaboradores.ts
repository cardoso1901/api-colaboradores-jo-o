import { Column, Double, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Departamento } from "./departamento";
import { Grupo } from "./grupo";

@Entity('colaborador')
export class Colaborador{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
    email: string;
    @Column()
    idade: number;
    @Column()
    senha: string;
    @Column()
    paginaSocial: string;
    @Column()
    descricaoPerfil: string;

    @ManyToMany(type => Departamento)
    @JoinTable({
        name: "colaborador_departamento",
        joinColumn:{
            name: "departamento",
            referencedColumnName: "id"
        },
        inverseJoinColumn:{
            name: "colaborador",
            referencedColumnName: "id"
        }
    })
    departamento: Departamento[];

    @ManyToMany(type => Grupo)
    @JoinTable({
        name: "colaborador_grupo",
        joinColumn:{
            name:"colaborador",
            referencedColumnName: "id"
        },
        inverseJoinColumn:{
            name: "grupo",
            referencedColumnName: "id"
        }
    })
    grupo: Grupo;

}
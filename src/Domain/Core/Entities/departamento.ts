import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('departamento')
export class Departamento{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('grupo')
export class Grupo{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
}
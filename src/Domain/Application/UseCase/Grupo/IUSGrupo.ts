import { Grupo } from "src/Domain/Core/Entities/grupo";

export interface IUCGrupo{
    
    findAll(): Promise<Grupo[]>;
    findById(id: number): Promise<Grupo>;
    create(grupo: Grupo): Promise<Grupo>;
    update(id: number, grupo: Grupo): Promise<Grupo>;
    delete(id: number): void;
}
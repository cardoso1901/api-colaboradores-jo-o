import { Colaborador } from "src/Domain/Core/Entities/colaboradores";

export interface IUCColaborador{

    findAll(): Promise<Colaborador[]>;
    findById(id: number): Promise<Colaborador>;
    create(colaborador: Colaborador): Promise<Colaborador>;
    update(id: number, colaborador: Colaborador): Promise<Colaborador>;
    delete(id: number): void;
}
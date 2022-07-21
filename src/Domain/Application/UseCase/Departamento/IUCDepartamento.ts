import { Departamento } from "src/Domain/Core/Entities/departamento";

export interface IUCDepartamento{

    findAll(): Promise<Departamento[]>;
    findById(id: number): Promise<Departamento>;
    create(departamento: Departamento): Promise<Departamento>;
    update(id: number, departamento: Departamento): Promise<Departamento>;
    delete(id: number): void;
}
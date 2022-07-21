import { HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Departamento } from "src/Domain/Core/Entities/departamento";
import { Repository } from "typeorm";
import { IUCDepartamento } from "./IUCDepartamento";

export class UCDepartamento implements IUCDepartamento{

    constructor(
        @InjectRepository(Departamento)
        private repository : Repository<Departamento>)
        {}
    
    async findAll(): Promise<Departamento[]> {
        return this.repository.find();
    }

    async findById(id: number): Promise<Departamento> {
        return this.repository.findOneByOrFail({id});
    }

    async create(departamento: Departamento): Promise<Departamento> {
        return this.repository.save(departamento);
    }

    async update(id: number, departamento: Departamento): Promise<Departamento> {

        if(this.findById(id) != null){
            this.repository.update('id', departamento)
            return this.findById(id);
        }

        throw new HttpException(`Departamento de Id ${id} não existe no sistema`, HttpStatus.NOT_FOUND)
    }

    async delete(id: number){
        this.repository.delete(id);
    }
    
}
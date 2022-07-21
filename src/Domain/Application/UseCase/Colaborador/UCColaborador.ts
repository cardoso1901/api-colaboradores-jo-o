import { HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Colaborador } from "src/Domain/Core/Entities/colaboradores";
import { Repository } from "typeorm";
import { IUCColaborador } from "./IUCColaborador";

export class UCColaborador implements IUCColaborador{

    constructor(
        @InjectRepository(Colaborador) 
        private repository: Repository<Colaborador>
    ){}

    async findAll(): Promise<Colaborador[]> {
        return this.repository.find();
    }

    async findById(id: number): Promise<Colaborador> {
        return this.repository.findOneByOrFail({id});
    }

    async create(colaborador: Colaborador): Promise<Colaborador> {
        return this.repository.save(colaborador);
    }
    async update(id: number, colaborador: Colaborador): Promise<Colaborador> {

        if(this.findById(id) != null){
            this.repository.update('id', colaborador)
            return this.findById(id);
        }

        throw new HttpException(`Colaborador de Id ${id} não existe no sistema`, HttpStatus.NOT_FOUND)
    }

    async delete(id: number) {
        this.repository.delete(id);    
    }

}
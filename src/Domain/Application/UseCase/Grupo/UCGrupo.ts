import { HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Grupo } from "src/Domain/Core/Entities/grupo";
import { Repository } from "typeorm";
import { IUCGrupo } from "./IUSGrupo";

export class UCGRupo implements IUCGrupo{

    constructor(
        @InjectRepository(Grupo)
        private grupoRespository: Repository<Grupo>)
    {}

    async findAll(): Promise<Grupo[]> {
        return this.grupoRespository.find();
    }

    async findById(id: number): Promise<Grupo> {
        return this.grupoRespository.findOneByOrFail({id});
    }

    async create(grupo: Grupo): Promise<Grupo> {
        return this.grupoRespository.save(grupo);
    }

    async update(id: number, grupo: Grupo): Promise<Grupo> {
        if(await this.findById(id) != null){
            this.grupoRespository.update(id, grupo);
            return this.findById(id);
        }

        throw new HttpException(`Grupo de Id ${id} não existe no sistema`, HttpStatus.NOT_FOUND);
    }

    async delete(id: number) {
        this.grupoRespository.delete(id);
    }
    
}
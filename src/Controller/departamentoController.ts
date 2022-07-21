import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UCDepartamento } from "src/Domain/Application/UseCase/Departamento/UCDepartamento";
import { Departamento } from "src/Domain/Core/Entities/departamento";

@Controller('departamento')
export class departamentoController{

    constructor(private ucDepartamento: UCDepartamento){
    }

    @Get('/listar')
    findAll(): Promise<Departamento[]>{
        return this.ucDepartamento.findAll();
    }

    @Post('/insert')
    insert(@Body() departamento: Departamento): Promise<Departamento>{
        return this.ucDepartamento.create(departamento);
    }
    @Delete('/delete/:{id}')
    delete(@Param() id:number){
        this.ucDepartamento.delete(id);
    }
    @Put('/alter/:{id}')
    alter(@Body() Departamento: Departamento, @Param() id: number): Promise<Departamento>{
        return this.ucDepartamento.update(id, Departamento);
    }
    @Get('/findById/:{id}')
    findById(@Param() id: number): Promise<Departamento>{
        return this.ucDepartamento.findById(id);
    }
}
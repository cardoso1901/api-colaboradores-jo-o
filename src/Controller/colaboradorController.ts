import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UCColaborador } from "src/Domain/Application/UseCase/Colaborador/UCColaborador";
import { Colaborador } from "src/Domain/Core/Entities/colaboradores";

@Controller('colaborador')
export class colaboradorController{

    constructor(private ucColaborador: UCColaborador){}

    @Get('/listar')
    findAll(): Promise<Colaborador[]>{
        return this.ucColaborador.findAll();
    }

    @Post('/insert')
    insert(@Body() colaborador: Colaborador): Promise<Colaborador>{
        return this.ucColaborador.create(colaborador);
    }
    @Delete('/delete/:{id}')
    delete(@Param() id:number){
        this.ucColaborador.delete(id);
    }
    @Put('/alter/:{id}')
    alter(@Body() Colaborador: Colaborador, @Param() id: number): Promise<Colaborador>{
        return this.ucColaborador.update(id, Colaborador);
    }
    @Get('/findById/:{id}')
    findById(@Param() id: number): Promise<Colaborador>{
        return this.ucColaborador.findById(id);
    }
}
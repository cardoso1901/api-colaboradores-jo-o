import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UCGRupo } from "src/Domain/Application/UseCase/Grupo/UCGrupo";
import { Grupo } from "src/Domain/Core/Entities/grupo";

@Controller('grupo')
export class grupoController{

    constructor(private ucGrupo: UCGRupo){

    }

    @Get('/listar')
    findAll(): Promise<Grupo[]>{
        return this.ucGrupo.findAll();
    }

    @Post('/insert')
    insert(@Body() grupo: Grupo): Promise<Grupo>{
        return this.ucGrupo.create(grupo);
    }
    @Delete('/delete/:{id}')
    delete(@Param() id:number){
        this.ucGrupo.delete(id);
    }
    @Put('/alter/:{id}')
    alter(@Body() grupo: Grupo, @Param() id: number): Promise<Grupo>{
        return this.ucGrupo.update(id, grupo);
    }
    @Get('/findById/:{id}')
    findById(@Param() id: number): Promise<Grupo>{
        return this.ucGrupo.findById(id);
    }
}

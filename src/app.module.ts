import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { colaboradorController } from './Controller/colaboradorController';
import { departamentoController } from './Controller/departamentoController';
import { grupoController } from './Controller/grupoController';
import { UCColaborador } from './Domain/Application/UseCase/Colaborador/UCColaborador';
import { UCDepartamento } from './Domain/Application/UseCase/Departamento/UCDepartamento';
import { UCGRupo } from './Domain/Application/UseCase/Grupo/UCGrupo';
import { Colaborador } from './Domain/Core/Entities/colaboradores';
import { Departamento } from './Domain/Core/Entities/departamento';
import { Grupo } from './Domain/Core/Entities/grupo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'colaboradores-database',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Colaborador, Departamento, Grupo]),
  ],
  controllers: [grupoController, departamentoController, colaboradorController],
  providers: [UCGRupo, UCDepartamento, UCColaborador],
})
export class AppModule {}

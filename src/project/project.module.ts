import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { ProjectResolver } from './project.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Project]),
  ],
  providers: [ProjectResolver],
  exports: [TypeOrmModule]
})
export class ProjectModule {}

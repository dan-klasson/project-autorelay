import { Args, Query, Resolver } from '@nestjs/graphql';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Int } from 'type-graphql';
import { RelayedQuery, RelayLimitOffset, RelayLimitOffsetArgs } from 'auto-relay';


import { Project } from './project.entity';

@Resolver(of => Project)
export class ProjectResolver {
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
    ) {
    }

    @Query(returns => Project)
    async project(@Args({name: 'id', type: () => Int}) id: number) {
        return this.projectRepository.findOneOrFail(id);
    }

    //@Query(returns => [Project])
    //async projects() : Promise<Project[]> {
    //    return this.projectRepository.find();
    //}

    @RelayedQuery(() => Project)
    async projects(
        @RelayLimitOffset() {limit, offset}: RelayLimitOffsetArgs
    ): Promise<[Project[], number]> {
        return this.projectRepository.findAndCount({ 
        skip: offset,
        take: limit
        })
    }
}

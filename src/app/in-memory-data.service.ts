import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
        {id:1,activity:'sleeping'},
        {id:2,activity:'eating'},
        {id:3,activity:'goto native'},
        {id:4,activity:'study'}
    ];
    return {todos};
  }
}
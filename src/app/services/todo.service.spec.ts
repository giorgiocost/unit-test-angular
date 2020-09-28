import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { Task } from './task';
import { Store } from './todo.store';
import { TasksService } from './todo.service';
import { Observable, Observer } from 'rxjs';

const todolist: Task[] = [
  { id: 1, nome: 'Responder e-mails', finalizado: true, iniciado: false },
];

function createResponse(body) {
  return Observable.create((observer: Observer< any>) => {
    observer.next(body);
  });
}

class MockHttp {
  get() {
    return createResponse(todolist);
  }
}

describe('TaskService', () => {
  let service: TasksService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: MockHttp },
        Store,
        TasksService,
      ]
    });
    http = TestBed.get(HttpClient);
    service = TestBed.get(TasksService);
  });

  it('deve retornar lista de tarefa', () => {
    // spyOn(http, 'get').and.returnValue(createResponse(todolist));

    service.getTodoList$
      .subscribe((result) => {
        expect(result.length).toBe(1);
        console.log(result);
        console.log(todolist);
        expect(result).toEqual(todolist);
      });
  });
});

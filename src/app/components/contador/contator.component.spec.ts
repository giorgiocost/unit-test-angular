import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContadorComponent } from './contator.component';

describe('ContadorComponent', () => {
  let component: ContadorComponent;
  let fixture: ComponentFixture<ContadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorComponent ],
    });
    fixture = TestBed.createComponent(ContadorComponent);
    component = fixture.componentInstance;

    component.valor = 0;
  });

  it('deve incrementar corretamente', () => {
    component.incrementar();
    expect(component.valor).toBe(1);
  });
});

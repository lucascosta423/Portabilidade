import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPortabilidadeComponent } from './cadastrar-portabilidade.component';

describe('CadastrarPortabilidadeComponent', () => {
  let component: CadastrarPortabilidadeComponent;
  let fixture: ComponentFixture<CadastrarPortabilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarPortabilidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarPortabilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

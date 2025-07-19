import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideProjects } from './side-projects';

describe('SideProjects', () => {
  let component: SideProjects;
  let fixture: ComponentFixture<SideProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

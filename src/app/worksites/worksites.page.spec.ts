import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorksitesPage } from './worksites.page';

describe('WorksitesPage', () => {
  let component: WorksitesPage;
  let fixture: ComponentFixture<WorksitesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksitesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorksitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

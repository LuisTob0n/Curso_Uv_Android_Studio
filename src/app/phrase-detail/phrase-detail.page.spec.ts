import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhraseDetailPage } from './phrase-detail.page';

describe('PhraseDetailPage', () => {
  let component: PhraseDetailPage;
  let fixture: ComponentFixture<PhraseDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PhraseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

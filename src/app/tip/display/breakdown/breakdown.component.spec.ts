import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";

import { BreakdownComponent } from "./breakdown.component";

describe("BreakdownComponent", () => {
  let component: BreakdownComponent;
  let fixture: ComponentFixture<BreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakdownComponent],
    });
    fixture = TestBed.createComponent(BreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";

import { CalculatorComponent } from "../calculator/calculator.component";
import { CalculatorModule } from "../calculator/calculator.module";
import { RootComponent } from "./root.component";

describe("RootComponent", () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent, RootComponent],
      imports: [CalculatorModule],
    });
    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

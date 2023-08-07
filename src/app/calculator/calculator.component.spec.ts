import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";

import { CalculatorComponent } from "./calculator.component";
import { CountComponent } from "./count/count.component";
import { BreakdownComponent } from "./display/breakdown/breakdown.component";
import { DisplayComponent } from "./display/display.component";
import { InputComponent } from "./input/input.component";
import { LogoComponent } from "./logo/logo.component";
import { PercentageComponent } from "./percentage/percentage.component";

describe("CalculatorComponent", () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BreakdownComponent,
        CalculatorComponent,
        CountComponent,
        DisplayComponent,
        InputComponent,
        LogoComponent,
        PercentageComponent,
      ],
    });
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

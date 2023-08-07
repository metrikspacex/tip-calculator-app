import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";

import { CountComponent } from "./count/count.component";
import { BreakdownComponent } from "./display/breakdown/breakdown.component";
import { DisplayComponent } from "./display/display.component";
import { InputComponent } from "./input/input.component";
import { LogoComponent } from "./logo/logo.component";
import { PercentageComponent } from "./percentage/percentage.component";
import { TipComponent } from "./tip.component";

describe("TipComponent", () => {
  let component: TipComponent;
  let fixture: ComponentFixture<TipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BreakdownComponent,
        CountComponent,
        DisplayComponent,
        InputComponent,
        LogoComponent,
        PercentageComponent,
        TipComponent,
      ],
    });
    fixture = TestBed.createComponent(TipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

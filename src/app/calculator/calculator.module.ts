import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CalculatorComponent } from "./calculator.component";
import { CountComponent } from "./count/count.component";
import { BreakdownComponent } from "./display/breakdown/breakdown.component";
import { DisplayComponent } from "./display/display.component";
import { InputComponent } from "./input/input.component";
import { LogoComponent } from "./logo/logo.component";
import { PercentageComponent } from "./percentage/percentage.component";

@NgModule({
  declarations: [
    BreakdownComponent,
    CalculatorComponent,
    CountComponent,
    DisplayComponent,
    InputComponent,
    LogoComponent,
    PercentageComponent,
  ],
  exports: [CalculatorComponent],
  imports: [CommonModule],
  providers: [],
})
export class CalculatorModule {}

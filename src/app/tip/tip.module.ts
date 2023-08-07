import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { CountComponent } from "./count/count.component";
import { BreakdownComponent } from "./display/breakdown/breakdown.component";
import { DisplayComponent } from "./display/display.component";
import { InputComponent } from "./input/input.component";
import { LogoComponent } from "./logo/logo.component";
import { PercentageComponent } from "./percentage/percentage.component";
import { TipComponent } from "./tip.component";
import { TipService } from "./tip.service";

@NgModule({
  declarations: [
    BreakdownComponent,
    CountComponent,
    DisplayComponent,
    InputComponent,
    LogoComponent,
    PercentageComponent,
    TipComponent,
  ],
  exports: [TipComponent],
  imports: [CommonModule, FormsModule],
  providers: [TipService],
})
export class TipModule {}

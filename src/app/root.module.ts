import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CalculatorModule } from "./calculator/calculator.module";
import { RootComponent } from "./root/root.component";

@NgModule({
  bootstrap: [RootComponent],
  declarations: [RootComponent],
  imports: [BrowserModule, CalculatorModule],
  providers: [],
})
export class RootModule {}

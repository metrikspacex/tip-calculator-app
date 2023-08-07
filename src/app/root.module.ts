import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RootComponent } from "./root/root.component";
import { TipModule } from "./tip/tip.module";

@NgModule({
  bootstrap: [RootComponent],
  declarations: [RootComponent],
  imports: [BrowserModule, TipModule],
  providers: [],
})
export class RootModule {}

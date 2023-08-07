import { Component } from "@angular/core";

import { TipService } from "../tip.service";

@Component({
  selector: "app-percentage",
  styleUrls: ["./percentage.component.scss"],
  templateUrl: "./percentage.component.html",
})
export class PercentageComponent {
  private readonly tipService: TipService;

  public constructor(tipService: TipService) {
    this.tipService = tipService;
  }

  public setTipPercentage(tipPercentage: number): void {
    this.tipService.setTipPercentage(tipPercentage);
  }
}

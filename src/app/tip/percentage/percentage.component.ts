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

  protected getError(): boolean {
    return this.tipService.getError();
  }

  public getPercentage(): number {
    return this.tipService.getPercentage();
  }

  public setCustomPercentage(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.value !== "custom") {
      const value = Number.parseInt(target.value);
      if (value <= 0) this.tipService.setError(true);
      this.tipService.setPercentage(value);
    }
  }

  public setPercentage(percentage: number): void {
    this.tipService.setPercentage(percentage);
  }
}

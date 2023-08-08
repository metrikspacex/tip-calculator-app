import { Component } from "@angular/core";

import { TipService } from "../tip.service";

@Component({
  selector: "app-input",
  styleUrls: ["./input.component.scss"],
  templateUrl: "./input.component.html",
})
export class InputComponent {
  private readonly tipService: TipService;

  public constructor(tipService: TipService) {
    this.tipService = tipService;
  }

  protected getCost(): number {
    return this.tipService.getCost();
  }

  protected getError(): boolean {
    return this.tipService.getError();
  }

  protected setCost(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = Number.parseFloat(target.value);
    if (value <= 0) this.tipService.setError(true);
    this.tipService.setCost(value);
  }
}

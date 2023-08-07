import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

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

  protected getCost(): BehaviorSubject<number> {
    return this.tipService.getCost();
  }

  protected setCost(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = Number.parseFloat(target.value);
    this.tipService.setCost(value);
  }
}

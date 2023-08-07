import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { TipService } from "../tip.service";

@Component({
  selector: "app-count",
  styleUrls: ["./count.component.scss"],
  templateUrl: "./count.component.html",
})
export class CountComponent {
  private readonly tipService: TipService;

  public constructor(tipService: TipService) {
    this.tipService = tipService;
  }

  public getAmountOfPeople(): BehaviorSubject<number> {
    return this.tipService.getAmountOfPeople();
  }

  public setAmountOfPeople(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = Number.parseInt(target.value);
    this.tipService.setAmountOfPeople(value);
  }
}

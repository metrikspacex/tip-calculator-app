import { Component } from "@angular/core";

import { TipService } from "../tip.service";

@Component({
  selector: "app-count",
  styleUrls: ["./count.component.scss"],
  templateUrl: "./count.component.html",
})
export class CountComponent {
  private tipService: TipService;

  public constructor(tipService: TipService) {
    this.tipService = tipService;
  }

  protected getError(): boolean {
    return this.tipService.getError();
  }

  public getPeople(): number {
    return this.tipService.getPeople();
  }

  public setPeople(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = Number.parseInt(target.value);
    this.tipService.setPeople(value);
  }
}

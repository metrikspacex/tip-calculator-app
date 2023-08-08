import { ChangeDetectorRef, Component } from "@angular/core";

import { TipService } from "../tip.service";

@Component({
  selector: "app-display",
  styleUrls: ["./display.component.scss"],
  templateUrl: "./display.component.html",
})
export class DisplayComponent {
  private readonly changeDetectorRef: ChangeDetectorRef;
  private readonly tipService: TipService;

  public constructor(
    changeDetectorRef: ChangeDetectorRef,
    tipService: TipService
  ) {
    this.changeDetectorRef = changeDetectorRef;
    this.tipService = tipService;
  }

  public calculateTips(): string {
    return this.tipService.calculateTips();
  }

  public calculateTotals(): string {
    return this.tipService.calculateTotal();
  }

  public reset(): void {
    this.tipService.reset();
    this.changeDetectorRef.detectChanges();
  }
}

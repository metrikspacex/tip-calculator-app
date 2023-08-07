import { Component, Input } from "@angular/core";

@Component({
  selector: "app-breakdown",
  styleUrls: ["./breakdown.component.scss"],
  templateUrl: "./breakdown.component.html",
})
export class BreakdownComponent {
  @Input({ required: true }) public amount!: string;
  @Input({ required: true }) public content!: string;
}

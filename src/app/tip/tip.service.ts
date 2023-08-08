import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TipService {
  private $inputs = new BehaviorSubject({
    cost: 0,
    error: false,
    people: 0,
    percentage: 0,
  });

  public calculateTips(): string {
    const { cost, people, percentage } = this.$inputs.getValue();
    if (cost > 0 && people > 0 && percentage > 0)
      return ((cost * (percentage / 100)) / people).toFixed(2);
    return "0";
  }

  public calculateTotal(): string {
    const { cost, people } = this.$inputs.getValue();
    const tip = Number.parseFloat(this.calculateTips());
    if (cost > 0 && people > 0 && tip > 0)
      return (cost / people + tip).toFixed(2);
    return "0";
  }

  public getCost(): number {
    return this.$inputs.getValue().cost;
  }

  public getError(): boolean {
    return this.$inputs.getValue().error;
  }

  public getPeople(): number {
    return this.$inputs.getValue().people;
  }

  public getPercentage(): number {
    return this.$inputs.getValue().percentage;
  }

  public reset(): void {
    this.$inputs.next({
      cost: 0,
      error: false,
      people: 0,
      percentage: 0,
    });
  }

  public setCost(cost: number): void {
    this.$inputs.next({
      cost,
      error: this.$inputs.getValue().error,
      people: this.$inputs.getValue().people,
      percentage: this.$inputs.getValue().percentage,
    });
  }

  public setError(error: boolean): void {
    this.$inputs.next({
      cost: this.$inputs.getValue().cost,
      error,
      people: this.$inputs.getValue().people,
      percentage: this.$inputs.getValue().percentage,
    });
  }

  public setPeople(people: number): void {
    this.$inputs.next({
      cost: this.$inputs.getValue().cost,
      error: this.$inputs.getValue().error,
      people,
      percentage: this.$inputs.getValue().percentage,
    });
  }

  public setPercentage(percentage: number): void {
    this.$inputs.next({
      cost: this.$inputs.getValue().cost,
      error: this.$inputs.getValue().error,
      people: this.$inputs.getValue().people,
      percentage,
    });
  }
}

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TipService {
  private readonly $amountOfPeople = new BehaviorSubject(0);
  private readonly $cost = new BehaviorSubject(0);
  private readonly $tipPercentage = new BehaviorSubject(0);

  public calculateTips(): string {
    const cost = this.$cost.getValue();
    const people = this.$amountOfPeople.getValue();
    const tip = this.$tipPercentage.getValue();
    if (cost !== 0 && people !== 0 && tip !== 0)
      return ((cost * (tip / 100)) / people).toFixed(2);
    return "0";
  }

  public calculateTotal(): string {
    const cost = this.$cost.getValue();
    const people = this.$amountOfPeople.getValue();
    const tip = Number.parseFloat(this.calculateTips());
    if (cost !== 0 && people !== 0 && tip !== 0)
      return (cost / people + tip).toFixed(2);
    return "0";
  }

  public getAmountOfPeople(): BehaviorSubject<number> {
    return this.$amountOfPeople;
  }

  public getCost(): BehaviorSubject<number> {
    return this.$cost;
  }

  public getTipPercentage(): BehaviorSubject<number> {
    return this.$tipPercentage;
  }

  public reset(): void {
    this.$amountOfPeople.next(0);
    this.$cost.next(0);
    this.$tipPercentage.next(0);
  }

  public setAmountOfPeople($amountOfPeople: number): void {
    this.$amountOfPeople.next($amountOfPeople);
  }

  public setCost(cost: number): void {
    this.$cost.next(cost);
  }

  public setTipPercentage(tipPercentage: number): void {
    this.$tipPercentage.next(tipPercentage);
  }
}

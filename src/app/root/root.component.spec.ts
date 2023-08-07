import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";

import { TipComponent } from "../tip/tip.component";
import { TipModule } from "../tip/tip.module";
import { RootComponent } from "./root.component";

describe("RootComponent", () => {
  let component: RootComponent;
  let fixture: ComponentFixture<RootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipComponent, RootComponent],
      imports: [TipModule],
    });
    fixture = TestBed.createComponent(RootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";

import { InputComponent } from "./input.component";

describe("InputComponent", () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("heading text", () => {
    const root: HTMLElement = fixture.nativeElement as HTMLElement;
    const heading: HTMLHeadingElement = root.querySelector("h1")!;
    expect(heading.textContent).toBe("Bill");
  });
});

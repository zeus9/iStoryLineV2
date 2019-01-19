import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "color-app",
  templateUrl: "color.component.html",
  styleUrls: ["color.component.css"]
})
export class ColorComponent {
  title = "Color";
  @Output() colorChange = new EventEmitter<FormGroup>();
  colorForm = new FormGroup({
    color: new FormControl(""),
    character: new FormControl("")
  });

  public onSubmit(): void {
    console.log("change color", this.colorForm.value);
    this.colorChange.emit(this.colorForm.value);
  }
}

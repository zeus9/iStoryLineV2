import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: "gradient-app",
    templateUrl: "gradient.component.html",
    styleUrls: ["gradient.component.css"]
})
export class GradientComponent {
    title = "Gradient";
   
    @Output() gradientChange = new EventEmitter<FormGroup>();
    colorGradientForm = new FormGroup({
      gradient1: new FormControl(""),
      gradient2: new FormControl(""),
      character: new FormControl("")
    });
  
    public onSubmit(): void {
      console.log("change color", this.colorGradientForm.value);
      this.gradientChange.emit(this.colorGradientForm.value);
    }
}
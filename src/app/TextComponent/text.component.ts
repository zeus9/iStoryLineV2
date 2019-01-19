import { Component, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "text-component",
  templateUrl: "text.component.html",
  styleUrls: ["text.component.css"]
})
export class TextComponent {
  title = "Text";
  showTextBox: boolean = false;
  @Output() textElement = new EventEmitter<any>();
  textForm = new FormGroup({
    text: new FormControl("")
  });
  constructor() {}
  handleClick(event) {
    console.log("clicked", event.target);
    this.showTextBox = true;
  }
  onSubmit() {
    console.log("submitted text component", this.textForm.value.text);
    this.textElement.emit(this.textForm.value.text);
  }
}

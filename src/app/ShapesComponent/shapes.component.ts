import { Component, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "shapes-app",
  templateUrl: "shapes.component.html",
  styleUrls: ["shapes.component.css"]
})
export class ShapesComponent {
  title = "Shapes";
  @Output() svgValue = new EventEmitter<any>();
  clickSvg(event): void {
    var target = event.target;

    console.log("id ", target.id);
    // console.log("svgVal", svgVal);
    this.svgValue.emit(target.id);
  }
}

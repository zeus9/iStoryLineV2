// import * as interact from "interactjs";
// declare var interact: any;
import { Component, OnInit, Renderer2, ElementRef } from "@angular/core";

import * as interact from "interactjs";
import { Directive } from "@angular/core";

@Component({
  selector: "draggable-app",
  templateUrl: "draggable.component.html",
  styleUrls: ["draggable.component.css"]
})
export class DraggableComponent implements OnInit {
  title = "Character";

  variable = true;
  constructor(private renderer2: Renderer2, private elRef: ElementRef) {}
  xValue = 20;
  yValue = 0;
  ngOnInit() {
    console.log("ngOnInit called");
    const draggableEl = this.elRef.nativeElement.querySelector(".draggable");
    // const draggableEl = this.renderer2.selectRootElement(".draggable");

    // target elements with the "draggable" class
    interact(draggableEl).draggable({
      // enable inertial throwing
      inertia: true,
      // keep the element within the area of it's parent
      restrict: {
        restriction: "parent",
        endOnly: true
        // elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
      // enable autoScroll
      autoScroll: true,

      // call this function on every dragmove event
      onmove: function(event) {
        var target = event.target,
          // keep the dragged position in the data-x/data-y attributes
          x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
          y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform = "translate(" + x + "px, " + y + "px)";
        this.setMyStyles(x, y);
        // update the posiion attributes
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      }
      // call this function on every dragend event
      //   onend: function(event) {
      //     var textEl = event.target.querySelector("p");

      //     textEl &&
      //       (textEl.textContent =
      //         "moved a distance of " +
      //         Math.sqrt(
      //           (Math.pow(event.pageX - event.x0, 2) +
      //             Math.pow(event.pageY - event.y0, 2)) |
      //             0
      //         ).toFixed(2) +
      //         "px");
      //   }
    });
  }

  // private makeDraggable(evt)
  // {
  //   var svg = evt.target;
  //   svg.addEventListener('mousedown', startDrag);
  //   svg.addEventListener('mousemove', drag);
  //   svg.addEventListener('mouseup', endDrag);
  //   svg.addEventListener('mouseleave', endDrag);
  //   var selectedElement = false;
  //   function startDrag(evt) {
  //     if (evt.target.classList.contains('draggable')) {
  //       selectedElement = evt.target;
  //     }
  //   }
  //   function drag(evt) {
  //     if (selectedElement) {
  //       evt.preventDefault();
  //       var x = parseFloat(selectedElement.getAttributeNS(null, "x"));
  //       selectedElement.setAttributeNS(null, "x", x + 0.1);
  //     }
  //   }

  //   function endDrag(evt) {
  //     selectedElement = null;
  //   }

  // }
  setMyStyles(x, y) {
    let styles = {
      "background-color": "transparent",
      transform: "translate(" + x + "px , " + y + "px)"
    };
    return styles;
  }
  private dragMoveListener(event) {
    // var target = event.target,
    //   // keep the dragged position in the data-x/data-y attributes
    //   x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
    //   y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    // // translate the element
    // target.style.webkitTransform = target.style.transform =
    //   "translate(" + x + "px, " + y + "px)";

    // // update the posiion attributes
    // target.setAttribute("data-x", x);
    // target.setAttribute("data-y", y);

    var target = event.target,
      // keep the dragged position in the data-x/data-y attributes
      x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
      y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform = "translate(" + x + "px, " + y + "px)";
    // update the posiion attributes
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  }
}
export default DraggableComponent;

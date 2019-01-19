import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnDestroy, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";
import { text } from "@angular/core/src/render3/instructions";
/** @title Responsive sidenav */
@Component({
  selector: "nav-drawer",
  templateUrl: "navdrawer.component.html",
  styleUrls: ["navdrawer.component.css"]
})
export class NavDrawerComponent {
  showFiller = false;
  subTemplates = ["character", "text", "shapes", "story"];
  showText: boolean = false;
  colorChange: string = "";
  gradientChange1: string = "";
 gradientChange2: string = "";
  characterId: string = "";

  hero = "batman";
  @Input("newColor") newColor: string;
  @Input("newGradient1") newGradient1: string;
  @Input("newGradient2") newGradient2: string;
  @Input("DataSet") DataSet: any;

  @Input("newCharacter") newCharacter: string;
  @Input("hideCharacters") hideCharacters: any;
  @Input("showCharacters") showCharacters: any;
  showTriangle: boolean = false;
  showRectangle: boolean = false;
  showSquare: boolean = false;
  showCircle: boolean = false;

  showSubTemplate() {
    console.log("clicked");
    console.log(this.showText);
    this.showText = !this.showText;
  }
  clearElements() {
    var textNode = document.getElementById("textContainer");
    while (textNode.firstChild) {
      textNode.removeChild(textNode.firstChild);
    }
    var gif = document.getElementById("gif-container");
    // var shapes = document.getElementById("shapes");
    // while (shapes.firstChild) {
    //   shapes.removeChild(shapes.firstChild);
    // }
    while (gif.firstChild) {
      gif.removeChild(gif.firstChild);
    }
  }

  clickLRRH() {
    this.clearElements();
    console.log("click LRRH");
    this.DataSet = "LRRH";
  }
  clickBB() {
    this.clearElements();
    console.log("click BB");
    this.DataSet = "BBReal";
  }
  onGradientChange(gradientChange: any) {
    console.log("inside parent component onGradientChange", gradientChange);
    this.gradientChange1 = gradientChange.gradient1;
    this.gradientChange2=gradientChange.gradient2;
  //  this.gradientChange2 = gradientChange.color2;
    this.characterId = gradientChange.character;
    this.newGradient1 = this.gradientChange1;
    this.newGradient2 = this.gradientChange2;
    this.newCharacter = this.characterId;
    console.log(
      "current gradients in parent for id",
      this.gradientChange1,
     this.gradientChange2,
      this.characterId
    );
  }

  onColorChange(colorChange: any) {
    console.log("inside parent component onColorChange", colorChange);
    this.colorChange = colorChange.color;
    this.characterId = colorChange.character;
    this.newColor = this.colorChange;
    this.newCharacter = this.characterId;
    console.log(
      "current color in parent for id",
      this.colorChange,
      this.characterId
    );
  }
  onSvgClicked(svg: any) {
    console.log("svg  clicked", svg);
    if (svg == "triangle") {
      console.log("show   triangle");
      this.showTriangle = !this.showTriangle;
    } else if (svg == "rectangle") {
      console.log("show rectangle");

      this.showRectangle = !this.showRectangle;
    } else if (svg == "square") {
      console.log("show square");

      this.showSquare = !this.showSquare;
    } else if (svg == "circle") {
      console.log("show circle");

      this.showCircle = !this.showCircle;
    }
    // const gifDom = document.createElement("img");
    // gifDom.setAttribute("src", gif);
    // gifDom.setAttribute("width", "100px");
    // gifDom.setAttribute("height", "100px");
    // const parent = document.getElementById("gifs");
    // const plainField = document.getElementById("gif-container");
    // plainField.appendChild(gifDom);
  }
  createText(text: any) {
    console.log("inside createText", text);
    const parent = document.getElementById("textContainer");
    const original = document.getElementById("textContainer");
    const clone = original.cloneNode(true);

    const p = document.createElement("h1");
    const textElem = document.createTextNode(text);
    parent.appendChild(textElem);
    // p.appendChild(textElem);
    // clone.appendChild(p);
    // parent.appendChild(clone);
    this.dragElement(parent);
  }
  createGif(gif: any) {
    // TODO: Create new dom element when clicked
    //TODO: Dom element must be ngDraggable
    console.log("gif", gif);
    const gifDom = document.createElement("img");
    gifDom.setAttribute("src", gif);
    gifDom.setAttribute("width", "100px");
    gifDom.setAttribute("height", "100px");
    const parent = document.getElementById("gifs");
    const plainField = document.getElementById("gif-container");
    plainField.appendChild(gifDom);
    // const newField = plainField.cloneNode(true);
    // const newField = plainField.firstElementChild.cloneNode(true);
    // parent.appendChild(newField);
    // // parent.className = "ng-draggable";
    // // parent.appendChild(newField);
    // newField.appendChild(gifDom);
    // console.log("new field", newField);
  }
  onCharacterHide(characters: any) {
    console.log("onCharacterHide navdrawer", characters);
    this.hideCharacters = characters;
  }
  onCharacterShow(characters: any) {
    console.log("onCharacterShow navdrawer", characters);
    this.showCharacters = characters;
  }

  private dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}

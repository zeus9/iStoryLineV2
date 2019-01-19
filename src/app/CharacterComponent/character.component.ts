import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LRRH, BBReal, BB } from "../../../shared";

@Component({
  selector: "character-app",
  templateUrl: "character.component.html",
  styleUrls: ["character.component.css"]
})
export class CharacterComponent implements OnInit {
  characters = new Array();
  private title: string;
  private _characterHide = new Array();
  private _dataSet: any = "LRRH";
  @Input()
  set DataSet(data: any) {
    console.log("set dataset", data);
    if (data) {
      this._dataSet = data;
      this.ngOnInit();
    }
  }
  ngOnInit() {
    this.characters = [];
    this.title = "Characters";
    // this.characters = LRRH.map(v => v.id);
    console.log("character mapping changed", this._dataSet);
    if (this._dataSet == "LRRH") LRRH.map(v => this.characters.push(v.id));
    else if (this._dataSet == "BBReal") {
      BB.map(v => this.characters.push(v.id));
      BBReal.map(v => this.characters.push(v.id));
    }
    console.log(this.characters);
  }
  //Hide the character when clicked , if unchecked remove hide.
  @Output() characterHide = new EventEmitter<any>();
  @Output() characterShow = new EventEmitter<any>();
  private onSelect(event) {
    // let allChars = ["Wolf", "Grandma", "Blanchette"];
    this._characterHide = event;
    // console.log(
    //   "event when selected in CharacterComponent",
    //   this._characterHide
    // );
    this.characterShow.emit(this._characterHide);
    // for (let char in allChars) {
    //   console.log("char in allChars characterComponent", allChars[char]);
    //   if (this._characterHide.includes(allChars[char])) {
    //     console.log("emitting character hide", allChars[char]);
    //     this.characterHide.emit(allChars[char]);
    //   } else {
    //     console.log("emitting character show ", allChars[char]);
    //     this.characterShow.emit(allChars[char]);
    //   }
    // }
  }
}

import { Component, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Http, Response } from "@angular/http";
@Component({
  selector: "story-app",
  templateUrl: "story.component.html",
  styleUrls: ["story.component.css"]
})
export class StoryComponent {
  link = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
  http: Http;
  giphies = [];
  constructor(http: Http) {
    this.http = http;
  }
  @Output() gifElement = new EventEmitter<any>();

  title = "Images/GIFs";
  gifForm = new FormGroup({
    gif: new FormControl("")
  });
  private createGif(src: any): void {
    console.log("create gif in the graph component", src);
    this.gifElement.emit(src);
  }
  private onSubmit(): void {
    console.log("gif", this.gifForm.value.gif);
    var searchTerm = this.gifForm.value.gif;
    var apiLink = this.link + searchTerm;

    this.http.request(apiLink).subscribe((res: Response) => {
      console.log(res.json());
      this.giphies = res.json().data.slice(0, 5);
      console.log("res json", res.json().data);
      console.log("giphies", this.giphies);
    });
  }
}

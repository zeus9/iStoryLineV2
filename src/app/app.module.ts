import "../polyfills";
import { ColorPickerModule } from "ngx-color-picker";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularDraggableModule } from "angular2-draggable";
import {
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTreeModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavDrawerComponent } from "./NavDrawer/navdrawer.component";
import { AppComponent } from "./app.component";
import { TextComponent } from "./TextComponent/text.component";
import { ShapesComponent } from "./ShapesComponent/shapes.component";
import { CharacterComponent } from "./CharacterComponent/character.component";
import { StoryComponent } from "./StoryComponent/story.component";
import { graph } from "./Graph/graph";
import { DraggableComponent } from "./DraggableComponent/draggable.component";
import { MultiLineChartComponent } from "./LineChartComponent/multi-series.component";
import { ColorComponent } from "./ColorComponent/color.component";
import { GradientComponent } from "./GradientComponent/gradient.component";
import { HttpModule } from "@angular/http";
@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTreeModule
  ]
})
export class DemoMaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ColorPickerModule,
    HttpModule,
    AngularDraggableModule
  ],
  entryComponents: [AppComponent],

  declarations: [
    AppComponent,
    NavDrawerComponent,
    TextComponent,
    ShapesComponent,
    CharacterComponent,
    StoryComponent,
    graph,
    DraggableComponent,
    MultiLineChartComponent,
    ColorComponent,
    GradientComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { NodesComponent } from './nodes/nodes.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    NodesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

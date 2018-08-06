import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GetDocsService } from './get-docs.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppRoutingModule } from './/app-routing.module';

import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PdfViewerModule,
    AppRoutingModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [GetDocsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

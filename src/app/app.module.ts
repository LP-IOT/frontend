import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { NoteFormComponent } from './pages/note-form/note-form.component';
import { CorrecteurComponent } from './forms/correcteur/correcteur/correcteur.component';

import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { CopieComponent } from './forms/copie/copie/copie.component'; 
import { MatCardModule } from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 


@NgModule({
  declarations: [
    AppComponent,
    NoteFormComponent,
    CorrecteurComponent,
    CopieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

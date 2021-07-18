import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from './editor/editor.module';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule( {
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		EditorModule,
		FormsModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatToolbarModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
} )
export class AppModule { }

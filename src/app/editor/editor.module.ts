import { NgModule } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


import { EditorComponent } from './editor.component';

@NgModule( {
	declarations: [
		EditorComponent
	],
	imports: [
		CKEditorModule,
		MatCardModule,
		MatToolbarModule
	],
	providers: [],
	bootstrap: [ EditorComponent ],
	exports: [
		EditorComponent
	]
} )
export class EditorModule { }

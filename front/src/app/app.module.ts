import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TrombiComponent } from './trombi/trombi.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SurveyComponent } from './survey.component';
import { SurveyEditorComponent } from './survey.editor.component';
import { TakephotoComponent } from './takephoto/takephoto.component';
import { UmlsurveyComponent } from './umlsurvey/umlsurvey.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: FormComponent },
  { path: 'photo',      component: TrombiComponent },
  { path: 'umlsurvey',      component: UmlsurveyComponent },
  { path: 'photocapture',      component: TakephotoComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyEditorComponent,
    TrombiComponent,
    FormComponent,
    PageNotFoundComponent,
    TakephotoComponent,
    UmlsurveyComponent
  ],
  imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
      ), BrowserModule, NgbModule,
      FormsModule,
      HttpModule,
      HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

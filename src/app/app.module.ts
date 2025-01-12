import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PipeDirective } from './shared/dirictives/pipe.directive';
import { SummaryPipe } from './shared/component/pipe/summary.pipe';
import { NotepadPipe } from './shared/component/pipe/notepad.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, PipeDirective, SummaryPipe, NotepadPipe],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

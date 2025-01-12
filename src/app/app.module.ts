import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SummaryPipe } from './shared/component/pipe/summary.pipe';
import { NotepadPipe } from './shared/component/pipe/notepad.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilesizePipe } from './shared/component/pipe/filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    NotepadPipe,
    FilesizePipe,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

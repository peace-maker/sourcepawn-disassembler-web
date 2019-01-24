import { Component } from '@angular/core';
import { SourcePawnFile } from 'sourcepawn-disassembler';
import { SectionWrapper } from './sectionwrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SourcePawn Disassembler';
  hideSectionList = false;
  selectedSection: SectionWrapper;
  selectedSubsection: string;

  smxfile: SourcePawnFile;

  public sidebarCollapse(click: any) {
    /*$('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');*/
    this.hideSectionList = !this.hideSectionList;
  }

  public fileChangeEvent(fileInput: any) {
    if (fileInput == null) {
      return;
    }

    const elem = fileInput.target as HTMLInputElement;
    const files = elem.files; // FileList object
    if (files == null) {
      return;
    }

    if (files.length < 1) {
      return;
    }

    const reader = new FileReader();
    reader.onload = ((app: AppComponent) => {
      return (ev: ProgressEvent) => {
        if (ev.target == null) {
          return;
        }

        if (reader.result == null) {
          return;
        }

        try {
          const sp = new SourcePawnFile(reader.result as ArrayBuffer);
          console.log(sp);
          app.smxfile = sp;
          app.selectedSection = undefined;
        } catch (error) {
          // Keep the old file if the new failed.
          console.log(`Failed to parse file ${files[0].name}: ${error.message}`);
          // console.log(error);
        }
      };
    })(this);

    reader.readAsArrayBuffer(files[0]);
  }
}

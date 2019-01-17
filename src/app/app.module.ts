import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SectionsComponent } from './sections/sections.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NamesSectionComponent } from './sections/names-section/names-section.component';
import { DataSectionComponent } from './sections/data-section/data-section.component';
import { DataSectionByteviewComponent } from './sections/data-section/data-section-byteview/data-section-byteview.component';
import { DataSectionStringanalysisComponent } from './sections/data-section/data-section-stringanalysis/data-section-stringanalysis.component';
import { CharFromCodePipe } from './char-from-code.pipe';
import { HighlightByteDirective } from './highlight-byte.directive';
import { DataSectionCellviewComponent } from './sections/data-section/data-section-cellview/data-section-cellview.component';
import { PublicsSectionComponent } from './sections/publics-section/publics-section.component';
import { ToHexPipe } from './to-hex.pipe';
import { SectionHeaderComponent } from './sections/section-header/section-header.component';
import { PubvarsSectionComponent } from './sections/pubvars-section/pubvars-section.component';
import { NativesSectionComponent } from './sections/natives-section/natives-section.component';
import { DbgFilesSectionComponent } from './sections/dbg-files-section/dbg-files-section.component';
import { DbgLinesSectionComponent } from './sections/dbg-lines-section/dbg-lines-section.component';
import { DbgNativesSectionComponent } from './sections/dbg-natives-section/dbg-natives-section.component';
import { SymKindAsStringPipe } from './sym-kind-as-string.pipe';
import { TagsSectionComponent } from './sections/tags-section/tags-section.component';
import { DbgSymbolsSectionComponent } from './sections/dbg-symbols-section/dbg-symbols-section.component';
import { DbgSymbolsGlobalsComponent } from './sections/dbg-symbols-section/dbg-symbols-globals/dbg-symbols-globals.component';
import { SymScopeAsStringPipe } from './sym-scope-as-string.pipe';
import { DbgSymbolsFunctionsComponent } from './sections/dbg-symbols-section/dbg-symbols-functions/dbg-symbols-functions.component';
import { DbgSymbolsDetailComponent } from './sections/dbg-symbols-section/dbg-symbols-detail/dbg-symbols-detail.component';
import { CodeSectionComponent } from './sections/code-section/code-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionsComponent,
    NamesSectionComponent,
    DataSectionComponent,
    DataSectionByteviewComponent,
    DataSectionStringanalysisComponent,
    CharFromCodePipe,
    HighlightByteDirective,
    DataSectionCellviewComponent,
    PublicsSectionComponent,
    ToHexPipe,
    SectionHeaderComponent,
    PubvarsSectionComponent,
    NativesSectionComponent,
    DbgFilesSectionComponent,
    DbgLinesSectionComponent,
    DbgNativesSectionComponent,
    SymKindAsStringPipe,
    TagsSectionComponent,
    DbgSymbolsSectionComponent,
    DbgSymbolsGlobalsComponent,
    SymScopeAsStringPipe,
    DbgSymbolsFunctionsComponent,
    DbgSymbolsDetailComponent,
    CodeSectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

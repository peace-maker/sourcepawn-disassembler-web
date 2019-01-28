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
import { RttiDataSectionComponent } from './sections/rtti-data-section/rtti-data-section.component';
import { DbgInfoSectionComponent } from './sections/dbg-info-section/dbg-info-section.component';
import { RttiFieldsSectionComponent } from './sections/rtti-fields-section/rtti-fields-section.component';
import { RttiNativesSectionComponent } from './sections/rtti-natives-section/rtti-natives-section.component';
import { RttiMethodsSectionComponent } from './sections/rtti-methods-section/rtti-methods-section.component';
import { DbgMethodsSectionComponent } from './sections/dbg-methods-section/dbg-methods-section.component';
import { DbgGlobalsSectionComponent } from './sections/dbg-globals-section/dbg-globals-section.component';
import { RttiClassdefsSectionComponent } from './sections/rtti-classdefs-section/rtti-classdefs-section.component';
import { DbgLocalsSectionComponent } from './sections/dbg-locals-section/dbg-locals-section.component';
import { UnknownSectionComponent } from './sections/unknown-section/unknown-section.component';
import { RttiEnumsSectionComponent } from './sections/rtti-enums-section/rtti-enums-section.component';
import { RttiEnumstructFieldsSectionComponent } from './sections/rtti-enumstruct-fields-section/rtti-enumstruct-fields-section.component';
import { RttiEnumstructsSectionComponent } from './sections/rtti-enumstructs-section/rtti-enumstructs-section.component';
import { RttiTypedefsSectionComponent } from './sections/rtti-typedefs-section/rtti-typedefs-section.component';
import { RttiTypesetsSectionComponent } from './sections/rtti-typesets-section/rtti-typesets-section.component';
import { FileHeaderComponent } from './sections/file-header/file-header.component';
import { CompressionTypeAsStringPipe } from './compression-type-as-string.pipe';
import { ClassdefFlagsAsStringPipe } from './classdef-flags-as-string.pipe';

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
    CodeSectionComponent,
    RttiDataSectionComponent,
    DbgInfoSectionComponent,
    RttiFieldsSectionComponent,
    RttiNativesSectionComponent,
    RttiMethodsSectionComponent,
    DbgMethodsSectionComponent,
    DbgGlobalsSectionComponent,
    RttiClassdefsSectionComponent,
    DbgLocalsSectionComponent,
    UnknownSectionComponent,
    RttiEnumsSectionComponent,
    RttiEnumstructFieldsSectionComponent,
    RttiEnumstructsSectionComponent,
    RttiTypedefsSectionComponent,
    RttiTypesetsSectionComponent,
    FileHeaderComponent,
    CompressionTypeAsStringPipe,
    ClassdefFlagsAsStringPipe
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

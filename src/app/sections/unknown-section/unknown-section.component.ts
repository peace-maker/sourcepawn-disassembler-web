import { Component, OnInit, Input } from '@angular/core';
import { SectionWrapper } from 'src/app/sectionwrapper';

@Component({
  selector: 'app-unknown-section',
  templateUrl: './unknown-section.component.html',
  styleUrls: ['./unknown-section.component.scss']
})
export class UnknownSectionComponent implements OnInit {

  @Input() section: SectionWrapper;

  constructor() { }

  ngOnInit() {
  }

}

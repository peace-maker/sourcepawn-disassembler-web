import { SectionEntry, SmxSection } from 'sourcepawn-disassembler';

export class SectionWrapper {
    header: SectionEntry;
    name: string;
    hasDropdown = false;
    dropdown: string[];
    bin: SmxSection;

    // Put the section headers in a nice array.
    public getSectionHeaders() {
        const headers = [];
        headers.push({'key': '.dataoffs', 'value': '0x' + this.header.dataoffs.toString(16)});
        headers.push({'key': '.nameoffs', 'value': '0x' + this.header.nameoffs.toString(16)});
        headers.push({'key': '.name', 'value': this.header.name});
        headers.push({'key': '.size', 'value': this.header.size + ' bytes'});
        return headers;
    }
}

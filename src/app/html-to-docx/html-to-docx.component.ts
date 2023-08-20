import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { DocumentCreator } from './document.creator';
import { Packer } from 'docx';

@Component({
  selector: 'app-html-to-docx',
  templateUrl: './html-to-docx.component.html',
  styles: [
  ]
})
export class HtmlToDocxComponent implements AfterViewInit {
  @ViewChild('content', {static: false}) content!: ElementRef; 
  stringHtml: string  = '';

  ngAfterViewInit(): void {
    const htmlContent = this.content.nativeElement.innerHTML;
    this.stringHtml = htmlContent;
    console.log( this.stringHtml )
  }

  exportDOCX() {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create( this.stringHtml );

    Packer.toBlob(doc).then( blob => {
      saveAs(blob, 'file.docx');
    });

  }
}

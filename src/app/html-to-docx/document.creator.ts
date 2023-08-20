import { Document, HeadingLevel, Paragraph, TextRun } from "docx";

export class DocumentCreator {

    create(text: string): Document { //Acá puede ir como parámetro un arreglo de strings con cada sección que se quiera mostrar, luego se agregan dinámicamente. También puede ser un objeto --> obj = { value: '' } para esto se puede crear una interfaz.
        const doc = new Document({
            sections: [
                {
                    children: [
                        this.addParagraph('Documento para fichas', HeadingLevel.TITLE),
                        new Paragraph({
                          heading: HeadingLevel.HEADING_3,
                          children: [
                            this.addTextRun('Sección para fichas: ', true),
                            this.addTextRun(text)
                          ]
                        })
                      ]
                }
            ]
          });
          
          return doc; 
    }

    addParagraph(text: string, heading: HeadingLevel): Paragraph {
        return new Paragraph({
            text: text,
            heading
        });
    }

    addTextRun(text: string, bold: boolean = false): TextRun {
        return new TextRun({
            text,
            bold
        });
    }
}
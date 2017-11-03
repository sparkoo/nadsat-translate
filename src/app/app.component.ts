import { Component, ElementRef, ViewChild } from '@angular/core';
import { phrases } from './Phrase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('english') english: ElementRef;
  @ViewChild('nadsat') nadsat: ElementRef;

  translateToEnglish() {
    let text = this.nadsat.nativeElement.value.toLowerCase();
    for (const phrase of phrases) {
      for (const nadsatWord of phrase.nadsat) {
        text = text.split(nadsatWord.toLowerCase()).join(phrase.english[0].toLowerCase());
      }
    }
    this.english.nativeElement.value = text;
  }

  translateToNadsat() {
    let text = this.english.nativeElement.value.toLowerCase();
    for (const phrase of phrases) {
      for (const englishWord of phrase.english) {
        text = text.split(englishWord.toLowerCase()).join(phrase.nadsat[0].toLowerCase());
      }
    }
    this.nadsat.nativeElement.value = text;
  }
}

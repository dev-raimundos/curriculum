import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { WorkExperience } from './components/work-experience/work-experience';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { Writing } from './components/writing/writing';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    About,
    WorkExperience,
    Education,
    Contact,
    Writing
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curriculum-vitae');
}

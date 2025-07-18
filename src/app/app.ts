import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { WorkExperience } from './components/work-experience/work-experience';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, NgOptimizedImage, Header, About, WorkExperience ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curriculum-vitae');
}

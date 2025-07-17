import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Header } from './components/header/header';
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, NgOptimizedImage, Header, About ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curriculum-vitae');
}

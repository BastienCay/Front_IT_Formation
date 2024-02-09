import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-saumong',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saumong.component.html',
  styleUrl: './saumong.component.css'
})
export class SaumongComponent {

  windowScrolled: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private el: ElementRef) { }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    } 
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) { 
      this.windowScrolled = false;
    }
  } 
  
  scrollToTop() {
    (function smoothscroll() {

      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
      
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 16));
      }

    })();
  }

  animationSaumong() {
    const bouton = this.el.nativeElement.querySelector('.button-saumong');
    this.renderer.addClass(bouton, 'animation-saumong');
    setTimeout(() => {
      this.renderer.removeClass(bouton, 'animation-saumong');
    }, 1800);
  }

  ngOnInit() {
  }
}



import {Component, DestroyRef, ElementRef, inject, Renderer2} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'kliq-page-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './page-wrapper.component.html',
  styleUrl: './page-wrapper.component.scss'
})
export class PageWrapperComponent {
  destroyRef: DestroyRef = inject(DestroyRef)
  defaultBackground = '#F6F6F6';
  constructor( private renderer: Renderer2,
               private el: ElementRef,private _router: Router, private _route: ActivatedRoute) {
    this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(routeEvent => {
      this._route.firstChild?.data.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(data => {
        const background = data['background'] || this.defaultBackground;
        this.setBackgroundColor(background);
      })
    })
  }

  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}

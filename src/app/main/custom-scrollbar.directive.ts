import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output} from '@angular/core';

declare var $: any;

@Directive({
  selector: '[custom-scrollbar]',
})
export class CustomScrollbarDirective implements AfterViewInit, OnDestroy {

  @Input() options: any = {
    axis: 'y',
    theme: 'minimal-dark',
    autoDraggerLength: true,
    scrollInertia: 500
  };

  @Output() onViewInit = new EventEmitter();

  private scrollbarInstance: any;

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.createScrollbar();
  }

  createScrollbar() {
    this.scrollbarInstance = $(this.elementRef.nativeElement).mCustomScrollbar(this.options);
    this.onViewInit.emit(this.scrollbarInstance);
  }

  ngOnDestroy(): void {
    this.scrollbarInstance.mCustomScrollbar('destroy');
  }

  getScrollbarInstance() {
    return this.scrollbarInstance;
  }
}

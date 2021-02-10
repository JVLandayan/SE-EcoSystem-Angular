import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-applypage',
  templateUrl: './applypage.component.html',
  styleUrls: ['./applypage.component.scss'],
})
export class ApplypageComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.addJsToElement(
      '../../../assets/js/index.js'
    ).onload = (teste) => {
      console.log(teste);
      console.log();
    };
  }
}

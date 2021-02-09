import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
  ngOnInit() {
    this.addJsToElement(
      'https://drive.google.com/uc?export=view&id=1bOE-f9grJiGtiTqv2uL08_ERqwsrYFmm'
    ).onload = (teste) => {
      console.log(teste);
      console.log();
    };
  }
}

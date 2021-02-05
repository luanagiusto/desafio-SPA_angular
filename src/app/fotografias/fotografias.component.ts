import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-fotografias',
  templateUrl: './fotografias.component.html',
  styleUrls: ['./fotografias.component.css']
})
export class FotografiasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valorInicial: number = 10;

}

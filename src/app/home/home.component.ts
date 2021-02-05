import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { database } from '../model/database'


@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number = 0;
  exibeTabela:  boolean = false;


  listaFotografias: database [] = [
    { codigo: 'LCh', categoria: 'lua', nome: 'Lua Cheia'},
    { codigo: 'LNo', categoria: 'lua', nome: 'Lua Nova'},
    { codigo: 'LCr', categoria: 'lua', nome: 'Lua Crescente'},
    { codigo: 'LMi', categoria: 'lua', nome: 'Lua Minguante'},
    { codigo: 'Btv', categoria: 'passarinho', nome: 'Bem-te-vi'},
    { codigo: 'Cnr', categoria: 'passarinho', nome: 'Canarinho'},
    { codigo: 'JdB', categoria: 'passarinho', nome: 'João de Barro'},
    { codigo: 'And', categoria: 'passarinho', nome: 'Andorinha'},
    { codigo: 'Gat', categoria: 'pet', nome: 'Gato'},
    { codigo: 'Dog', categoria: 'pet', nome: 'Cachorro'},

  ];

  displayedColumns: string[] = ['Codigo', 'Categoria', 'Nome'];

  ngOnInit(): void {
    this.valor = 0;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }



}

import { Component, OnInit } from '@angular/core';
import {CompileAPIService} from '../service/compile-api.service';

@Component({
  selector: 'app-compiler-main',
  templateUrl: './compiler-main.component.html',
  styleUrls: ['./compiler-main.component.css']
})
export class CompilerMainComponent implements OnInit {

  constructor(public compileService: CompileAPIService) { }

  ngOnInit(): void {
  }

  compile() {
    this.compileService.compileSourceCode('a');
  }
}

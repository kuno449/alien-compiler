import {Component} from '@angular/core';
import {CompileAPIService} from '../service/compile-api.service';

@Component({
  selector: 'app-compiler-main',
  templateUrl: './compiler-main.component.html',
  styleUrls: ['./compiler-main.component.css']
})
export class CompilerMainComponent {

  constructor(public compileService: CompileAPIService) {

  }

  compile() {
    this.compileService.compileSourceCode();
  }
}

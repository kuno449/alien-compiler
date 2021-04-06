import {Component, HostListener} from '@angular/core';
import {CompileAPIService} from '../service/compile-api.service';

@Component({
  selector: 'app-compiler-main',
  templateUrl: './compiler-main.component.html',
  styleUrls: ['./compiler-main.component.css']
})
export class CompilerMainComponent {

  public scrHeight: number;
  public scrWidth: number;

  constructor(public compileService: CompileAPIService) {
    this.getScreenSize();
  }

  compile() {
    this.compileService.compileSourceCode();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }
}

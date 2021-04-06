import {Component, HostListener} from '@angular/core';
import {CompileAPIService} from '../service/compile-api.service';

@Component({
  selector: 'app-compiler-main',
  templateUrl: './compiler-main.component.html',
  styleUrls: ['./compiler-main.component.css']
})
export class CompilerMainComponent {

  public readonly HEADER_HEIGHT = 235;

  public panelHeight: number;
  public panelWidth: number;

  constructor(public compileService: CompileAPIService) {
    this.getScreenSize();
  }

  compile() {
    this.compileService.compileSourceCode();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.panelHeight = window.innerHeight - this.HEADER_HEIGHT;
    this.panelWidth = window.innerWidth - this.HEADER_HEIGHT;
  }
}

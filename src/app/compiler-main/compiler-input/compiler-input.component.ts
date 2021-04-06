import {Component, Input} from '@angular/core';
import {CompileAPIService} from '../../service/compile-api.service';

@Component({
  selector: 'app-compiler-input',
  templateUrl: './compiler-input.component.html',
  styleUrls: ['../compiler-main.component.css']
})
export class CompilerInputComponent {

  @Input('panelHeight') panelHeight: number;

  constructor(public compileService: CompileAPIService) { }

}

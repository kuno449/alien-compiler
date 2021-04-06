import {Component, OnInit} from '@angular/core';
import {CompileAPIService} from '../../service/compile-api.service';

@Component({
  selector: 'app-compiler-input',
  templateUrl: './compiler-input.component.html',
  styleUrls: ['../compiler-main.component.css']
})
export class CompilerInputComponent implements OnInit {

  constructor(public compileService: CompileAPIService) { }

  ngOnInit(): void {

  }
}

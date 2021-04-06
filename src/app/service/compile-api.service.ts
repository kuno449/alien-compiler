import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CompilerDTO} from '../model/compiler-dto';

@Injectable({
  providedIn: 'root'
})
export class CompileAPIService {

  readonly API_HOME = 'https://wandbox.org/api';

  public inputCode: string;
  public message: string;

  public readonly LINE_BREAK = '<br><br>';
  constructor(private httpClient: HttpClient) {

  }

  public compileSourceCode() {

    this.message = 'File compile started.' + this.LINE_BREAK;

    const testCode = {
      "code": this.inputCode,
      "compiler": "openjdk-jdk8u121-b13",
    }

    this.httpClient.post<CompilerDTO>(this.API_HOME + '/compile.json', testCode).toPromise().then(result => {
      if (result.compiler_error) {
        console.log('Compile Error::' + result.compiler_error);
        this.message = this.message + result.compiler_error + this.LINE_BREAK;
      } else {
        console.log('Message::' + result.program_message);
        this.message = this.message + result.program_message + this.LINE_BREAK;
      }
      this.message = this.message + 'Received compile result.' + this.LINE_BREAK;
    }).catch(error => {
      console.log('Error::' + error.program_message);
    });
  }
}

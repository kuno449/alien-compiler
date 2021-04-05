import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CompilerDTO} from '../model/compiler-dto';

@Injectable({
  providedIn: 'root'
})
export class CompileAPIService {

  readonly API_HOME = 'https://wandbox.org/api';
  public message: string = '';
  public readonly LINE_BREAK = '<br><br>';
  constructor(private httpClient: HttpClient) {

  }

  public compileSourceCode(code: String) {

    this.message = 'File compile started.' + this.LINE_BREAK;

    const testCode = {
      "code":"class HelloWorld {\n" +
        "     public static void main(String[] args) {\n" +
        "        System.out.print(\"Hello World!!\");\n" +
        "    }\n" +
        "}",
      "compiler": "openjdk-jdk8u121-b13",
    }

    this.httpClient.post<CompilerDTO>(this.API_HOME + '/compile.json', testCode).toPromise().then(result => {
      console.log('Message::' + result.program_message);
      this.message = this.message + result.program_message + this.LINE_BREAK;
      setTimeout(() =>this.message = this.message + 'Received compile result.' + this.LINE_BREAK, 0);
    }).catch(error => {
      console.log('Error::' + error.program_message);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  senha: string = '';

  constructor(private authService: AutenticacaoService ) { }

  ngOnInit() {
  }

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(() => {
      console.log("Autenticado");
    }, (error) => {
      alert("Usuário ou senha inválido");
      console.log(error);
    })
  }

}

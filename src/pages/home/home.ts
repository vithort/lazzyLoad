import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarPage } from '../cadastrar/cadastrar';

@Component({
  selector: 'page-home'
  ,templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) {

  }

  cadastrar() {
    // desse modo funciona, porem se voce refatorar / mudar o nome da pagina, ele precisara ser alterado manualmente (nao precisa do import da Page):
    //this.navCtrl.push('CadastrarPage');
    // desse outro modo ele vai buscar o nome da pagina:
    this.navCtrl.push(CadastrarPage.name);
  }

}

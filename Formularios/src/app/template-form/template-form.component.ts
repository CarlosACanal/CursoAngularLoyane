import { FormsModule, NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  usuario: any = {
    nome: null,
    email: null
  }

  onSubmit(f: NgForm) {
    console.log(f.value);

    console.log(this.usuario);
  }
}

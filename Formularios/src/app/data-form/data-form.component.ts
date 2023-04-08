import { Estado } from './../interfaces/Estado';
import { DropdownService } from './../services/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent {

  form!: FormGroup;
  form2!: FormGroup;
  estados: Estado[] = []
  cargos: any[] = [
    {nome: 'DEV', nivel:'Junior', desc: 'DEV Jr'},
    {nome: 'DEV', nivel:'Pleno', desc: 'DEV Pl'},
    {nome: 'DEV', nivel:'Senior', desc: 'DEV Sr'},
  ]
  tecnologias: any[] = [
    {nome: "Vue", id: 1},
    {nome: "Angular", id: 2},
    {nome: "React", id: 3},
    {nome: "React Native", id: 4},
    {nome: "Ionic", id: 5}
  ]

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit() {
    // this.form = new FormGroup({
    //   nome : new FormControl('Valor inicial caso queira'),
    //   email : new FormControl(null),
    // });

    // Então aqui falamos que esse formulário e um novo objeto da classe FormGroup. Esse novo objeto deve receber como parametro os campos que existirão no forms. Cada um desses campos são um objeto da classe FormControl(). Como parametro podemos passar um valor inicial, por exemplo. Essa é uma forma mais extensa de criarmos o FormGroup

    // O formBuilder nos ajuda a criar o formulário de uma maneira mais rápida e menos verbosa. o fb.group cria um formGroup

    // FORMS PRINCIPAL
    this.form = this.fb.group({
      nome: ['Valor inicial caso queira', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      // FORM DE ENDEREÇO DENTRO DO FORM PRINCIPAL
      endereco: this.fb.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: [true],
      termos: [null, Validators.requiredTrue]
    })

    this.pegarEstados();
  }

  consultaCEP() {
    let cep = this.form.get('endereco.cep')?.value;
    this.cepService.getDataByCep(cep).subscribe( data => 
      this.populaDadosForm(data))
  }

  pegarEstados() {
    this.dropdownService.getEstados().subscribe((dados:Estado[]) => {
      this.estados = dados;
    });
    }
  

  populaDadosForm(r: any) {
    this.form.patchValue({
      endereco: {
        bairro: r.bairro,
        cidade: r.localidade,
        estado: r.uf
      }
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value)).subscribe(
        {
          next: data => {
            this.resetForm();
          },
          error: (error: any) => {
            alert("Um erro inesperado acorreu!")
          }
        }
      )
    } else {
      this.verificaValidacoesForm(this.form)
    }
  }


  verificaValidacoesForm(formGroup: FormGroup) {
    // Esse Object.keys consegue ler todas as propiedades de um objeto
    // Dentro das keys eu to falando pra ler como propiedades todos os controls do form
    Object.keys(formGroup.controls).forEach(campo => {
      const controller = formGroup.get(campo);

      // verifica se o controler é um FormGroup, pq caso seja ele vai rodar a validação novamente para cada controler presente no FormGroup
      if (controller instanceof FormGroup) {
        this.verificaValidacoesForm(controller);
      }
      if (controller?.invalid) {
        controller.markAsTouched()
      }
    })
  }

  resetForm() {
    this.form.reset();
  }


  cssError(control: any) {
    if (!this.form.get(control)?.valid && this.form.get(control)?.touched) {
      return true;
    }
    return false;
  }

}

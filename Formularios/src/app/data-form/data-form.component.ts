import { VerificaEmailService } from './../services/verifica-email.service';
import { Estado } from './../interfaces/Estado';
import { DropdownService } from './../services/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged, map, tap } from 'rxjs';
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

  frameworks: string[] = ['Angular', 'React', 'Vue'];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService,
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
      email: [null, [Validators.required, Validators.email], this.validarEmail.bind(this)],
      // Validações assíncronas entrar como terceiro parametro
      confirmarEmail: [null, [this.equalsTo('email')]],
      // FORM DE ENDEREÇO DENTRO DO FORM PRINCIPAL
      endereco: this.fb.group({
        cep: [null, [Validators.required, this.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: [true],
      termos: [null, Validators.requiredTrue],
      frameworks: this.buildFrameworks(),
    })

    this.form.get('endereco.cep')?.valueChanges
    .pipe(
      distinctUntilChanged(),
      tap(value => console.log(value))
    )
    .subscribe( value => console.log(value))

    this.pegarEstados();
  }

  buildFrameworks() {
    const values = this.frameworks.map( v => new FormControl(false));
    // return this.fb.array(values, this.requiredMinCheckbox(1));
  }

  FormArrayControls(){
    return (this.form.get('frameworks') as FormArray).controls
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

  requiredMinCheckbox(min = 1) {
    const validator = (formArray: FormArray) => {
      const totalChecked = formArray.controls
      .map( v => v.value)
      .reduce((total, current) => current ? total + current : total, 0);
      // map -> transforma a array inicial(formArray.controls) em uma array somente com o value de cada item;
      // reduce -> Muito utilizado para somas, Precisa de dois parametros, o primeiro para o total e o segundo para o valor corrente. Sempre retorna apenas um valor. Na arrow function colocamos a lógica para o primeiro parametro e o segundo é o valoe que vai começar, no nosso caso 0;
    }
    return validator;
  }

  cepValidator(control: FormControl) {
    const cep = control.value;
    if (cep && cep !== '') {
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido : true }
    }
    return null;
  }

  equalsTo(OtherField: string, ) {
    const validator = (formControl: FormControl) => {
      if (OtherField) {
        // O root faz referencia todo o formulário original do campo;
        const field = (<FormGroup>formControl.root).get(OtherField);

        if (field?.value === formControl.value) {
          return null;
        } else {
          return {equalsTo : false};
        }

      } else {
        throw new Error('Necessário informar um campo!');
      }
    };
    return validator;
  }

  validarEmail( formControl: FormControl) {
    return this.verificaEmailService.verificaEmail(formControl.value).pipe(
      map(((emailExiste: boolean) => emailExiste ? {emailEmUso: true} : null))
    );
  }

}

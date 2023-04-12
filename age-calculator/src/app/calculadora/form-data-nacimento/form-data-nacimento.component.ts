import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms'
//import { Data } from '../shared/data.model';
import * as moment from 'moment';



@Component({
  selector: 'app-form-data-nacimento',
  templateUrl: './form-data-nacimento.component.html',
  styleUrls: ['./form-data-nacimento.component.css']
})
export class FormDataNacimentoComponent implements OnInit{

  public formulario: FormGroup = new FormGroup({
    'dia': new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(2)]),
    'mes': new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(2)]),
    'ano': new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(4)]),
  })

  public testeData:any = Date()

  letructor(){ }

  ngOnInit(): void { }

  public recuperarIdade():void{






    // data do formulário (string)
    let dataFormulario =  `${this.formulario.value.ano}/${this.formulario.value.mes}/${this.formulario.value.dia}`;

    // converter para objeto Date
    let data = new Date(dataFormulario);

    // data atual
    let dataAtual = new Date();

    // calcular a diferença em milissegundos
    let diferencaMs = dataAtual.getTime() - data.getTime();




    // converter para dias
    let diferencaDias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

    if(diferencaDias > 31){
      console.log(diferencaDias)
      diferencaDias = diferencaDias / 31
      //console.log(diferencaDias)

    }












    // calcular a diferença em meses
    let diferencaMeses = (dataAtual.getFullYear() - data.getFullYear()) * 12 + (dataAtual.getMonth() - data.getMonth());

    // calcular a diferença em anos
    let diferencaAnos = Math.floor((dataAtual.getTime() - data.getTime()) / (1000 * 60 * 60 * 24 * 365));


    console.log(`A diferença entre ${dataFormulario} e ${dataAtual.toISOString().substr(0, 10)} é de ${diferencaDias} dias.`);

    console.log('-------------------------------------')

    console.log(`A diferença entre ${dataFormulario} e ${dataAtual.toISOString().substr(0, 10)} é de ${diferencaMeses} meses.`);

    console.log('-------------------------------------')

    console.log(`A diferença entre ${dataFormulario} e ${dataAtual.toISOString().substr(0, 10)} é de ${diferencaAnos} anos.`);


  }

  

  






}

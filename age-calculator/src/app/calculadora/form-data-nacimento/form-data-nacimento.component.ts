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

  constructor(){ }

  ngOnInit(): void { }

  public recuperarIdade():void{


    let data1 = moment()

    console.log(data1)





  }






}

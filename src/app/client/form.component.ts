import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router} from '@angular/router';

import { Client } from '../client/models/client';
import { ClientService } from '../client/services/client.service'
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  clientForm: FormGroup;
  ageCtrl: FormControl;
  maxBirthdate: Date = new Date(Date.now());

  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.ageCtrl = this.formBuilder.control('', Validators.required);
    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: this.ageCtrl,
      birthdate: ['', Validators.required]
    });
  }

  handleChangeBirthdate(event: MatDatepickerInputEvent<Date>) {
    this.ageCtrl.setValue(this.getAgeFromBirthday(event.value));
    console.log(this.getRipDate(event.value))
  }

  saveClient(): void {
    console.log('form', this.clientForm.value)
    let client: Client = this.clientForm.value;
    client.created_at = new Date();
    client.age = this.getAgeFromBirthday(client.birthdate)
    client.rip_date = this.getRipDate(client.birthdate);
    this.clientService.saveClient(client)
      .then(response => {
        this.router.navigate(['/list']);
        console.log('response', response)
      })
      .catch(err => console.error(err));
  }

  getAgeFromBirthday(birthday:Date): number {
    const ageDiffMs = Date.now() - birthday.getTime();
    const ageDate: Date = new Date(ageDiffMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getRipDate(birthday:Date): Date {
    const ripDate: Date = new Date(Number(birthday));
    const yearDay: number = 360; 
    ripDate.setDate(birthday.getDate()+this.getRandomInt(yearDay*60, yearDay*80));
    return ripDate;
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}

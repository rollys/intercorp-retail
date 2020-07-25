import { Component, OnInit } from '@angular/core';

import { Client } from '../client/models/client';
import { ClientService } from '../client/services/client.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  clients: Client[] = [];
  averageAge: number = 0;
  standarDeviationAge: number = 0;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.processList();
  }

 

  processList(): void {
    this.clientService.getClients().subscribe(response => {
      this.clients = [];
      response.docs.forEach(value => {
        const data = value.data();
        const id = value.id;
        const client: Client = {
          name: data.name,
          lastname: data.lastname,
          age: data.age,
          birthdate: data.birthdate.toDate(),
          rip_date: data.rip_date.toDate(),
          created_at: data.created_at.toDate()
        };
        this.clients.push(client);
      });
      this.averageAge = this.getAverageAge(this.clients)
      this.standarDeviationAge = this.getStandardDeviationAge(this.clients)
    });
  }

  getStandardDeviationAge(data:Client[]): number{
    return Math.sqrt(this.getSumLengthAge(data)/this.getTotalItemsAge(data));
  }

  getSumLengthAge(data: Client[]):number {
    let sum: number = 0
    data.forEach(val=>{
      sum += this.getLengthAge(val.age, this.getAverageAge(data))
    })
    return sum || 0;
  }

  getAverageAge(data: Client[]): number {
    let sumAge = 0;
    data.forEach(val=>{
      sumAge += val.age;
    })
    console.log('getAverageAge', sumAge, this.getTotalItemsAge(data))
    return sumAge / this.getTotalItemsAge(data);
  }

  getTotalItemsAge(data: Client[]):number {
    return data.length || 0;
  }

  getLengthAge(age:number, averageAge:number):number {
    return Math.pow((age-averageAge), 2) || 0;
  }




}

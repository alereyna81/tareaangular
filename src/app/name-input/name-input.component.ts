import { Component } from '@angular/core';
import { ServicioazureService } from '../servicioazure.service';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent {
  name: string = '';
  response: string | null = null;

  constructor(private servicioAzure: ServicioazureService) { }

  sendName() {
    this.servicioAzure.sendName(this.name).subscribe(
      (res) => {
		console.log("Resultado", res);
        this.response = res; 
      },
      (error) => {
        this.response = error.error.text;
      }
    );
  }
}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = 'Hola mundo angular desde componente!';

  subTitle = 'Contador con estado de session';

  users: string[] = ['Exe', 'Maria', 'Juan', 'Andres'];

  visible: boolean = false;

  counter: number = 0;
  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
  }

  setVisible(): void {
    this.visible = this.visible ? false : true;
    console.log('hemos hecho clic en setVisible');
  }

  setCounter(counter: number): void {
    this.counter = counter;
  }
}

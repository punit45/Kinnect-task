import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addgame';
  num1: any = Math.floor(Math.random() * 10);
  num2: any = Math.floor(Math.random() * 10);
  answer: any = '';
  message: any;
  totalAns: number = 0;
  totaltime: number = 0;
  avg: any;
  e: any;

  ngOnInit() {
    setInterval(() => {
      this.totaltime += 1;
    }, 1000);
  }

  randomGen() {
    this.num1 = Math.floor(Math.random() * 10);
    this.num2 = Math.floor(Math.random() * 10);
  }
  checkAnswer(e: any) {
    e.preventDefault();
    let ans = this.num1 + this.num2;
    if (ans == this.answer) {
      this.randomGen();
      console.log("hello");
      this.totalAns += 1;
      this.avg = this.totaltime / this.totalAns;
      this.answer = '';
      this.message = 'correct answer';
    } else {
      this.message = 'in-correct answer';
      this.answer = '';
    }
  }
  change(e: any) {
    this.answer = Number(e.target.value);
  }
}

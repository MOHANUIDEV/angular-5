import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing';
  isShow: boolean;
  name = true;

  // if (!this.isShow) {
  //   this.name = true;
  // }
  ngOnInit() {
    this.myresult();
  }

  myPet() {
    var dog = false;
    var message = dog ? 'How do i get it?' : 'Get me a dog!';

    console.log(message);
  }
  myresult() {
    var i = 1;
    if (i != 1) {
      console.log('helooo dude');
    } else {
      console.log('null');
    }
  }
}

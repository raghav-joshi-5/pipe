import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  filterArr=[
    {
      fileName:'form 16',
      fileType:'pdf',
      fileSize:12349656
    },
    {
      fileName:'personal data',
      fileType:'excel',
      fileSize:85445481
    },
    {
      fileName:'personal info',
      fileType:'word',
      fileSize:65848452
    },
  ]  
  
  // title = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt inventore, similique maxime voluptate debitis minus quasi maiores quibusdam pariatur commodi sit sunt iste? Sequi!`;

  // object = {
  //   title: 'mean stack',
  //   student: 12345678,
  //   rating: 4.45678,
  //   price: 123.4567,
  //   releasedate: new Date(2023, 1, 8),
  // };

  // text: string = '';
  // maxWord: number = 10;
  // showError: boolean = false;

  // getwordCount() {
  //   return this.text.split(/\s+/).filter((n) => n).length;
  // }
  // limitword(event: Event): void {
  //   const inputControl = event.target as HTMLTextAreaElement;
  //   const words = inputControl.value.split(/\s+/);
  //   if (words.length > 10) {
  //     this.text = words.slice(0, 10).join(' ');
  //     inputControl.value = this.text;
  //     this.showError = true;
  //   } else {
  //     this.text = inputControl.value;
  //     this.showError = false;
  //   }
  // }



}

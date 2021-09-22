import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titlee="mon site ";
  title = 'mon-premier-projet';
  isAuth = false;
 
  lastUpdate: Promise<Date> = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );




  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];




  appareilOne = 'Machin';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';
  appareilStatus: string;

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
    }
  

    onAllumer() {
      console.log('On allume tout !');
  }


}

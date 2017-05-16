import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  title: string;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/garden/grid');
    this.title = 'list';
  }
}

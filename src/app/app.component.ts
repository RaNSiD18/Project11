import { Component } from '@angular/core';
import { MyDets } from './shared/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  dets: MyDets[] = [
    { id: 0, name: '1', status: getRandBool() },
    { id: 1, name: '2', status: getRandBool() },
    { id: 2, name: '3', status: getRandBool() },
    { id: 3, name: '4', status: getRandBool() },
    { id: 4, name: '5', status: getRandBool() },
    { id: 5, name: '6', status: getRandBool() },
    { id: 6, name: '7', status: getRandBool() },
    { id: 7, name: '8', status: getRandBool() },
    { id: 8, name: '9', status: getRandBool() },
    { id: 9, name: '10', status: getRandBool() }
  ];

  Change(id: number) {
    setTimeout(() => {
      this.dets[id].status = !this.dets[id].status;
    }, 500);
  }
  Delete(id: number) {
    let index = this.dets.findIndex((det) => det.id === id);
    if (index !== -1) {
      this.dets.splice(index, 1);
    }
  }
  AddDet(det: MyDets) {
    let id = this.dets.length > 0 ? this.dets[this.dets.length - 1].id + 1 : 0;
    det.id = id;
    this.dets.push(det);
  }
}
function getRandBool() {
  return Math.round(Math.random()) ? true : false;
}
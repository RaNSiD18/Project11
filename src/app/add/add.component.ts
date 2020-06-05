import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MyDets } from 'src/app/shared/det.model';

@Component({
  selector: 'app-adddet',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {  
  name: string;
  status = false;
  @Output() addDet = new EventEmitter<MyDets>();

  ngOnInit(): void {}

  onAddDet() {
    this.addDet.emit({
      name: this.name,
      status: this.status
    });
    this.name = '';
  }
}

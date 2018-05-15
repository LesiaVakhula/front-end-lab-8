import { Component,  OnInit, EventEmitter, Output } from '@angular/core';
import { Classess } from '../class';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  mainObject: Classess[] =[];
  showRow: boolean;
  num: number;
  topic: string;
  date: Date;
  lecture: string;
  newObj = {
    num: this.num,
    topic: this.topic,
    date: this.date,
    lecture: this.lecture,
  };

  constructor() { }

  ngOnInit() {
  }
  addRow(): void {
    this.mainObject.push({topic: '', date: new Date(), lecture: ''});
  }
  save(item): void {
    this.mainObject.push(item);
    this.mainObject.splice((this.mainObject.length - 1), 1);
  }

  discardChange(): void {
    this.num = null;
    this.topic = '';
    this.date = null;
    this.lecture = '';
    this.showRow = false;
  }
  removeItem(num) {
    this.mainObject.splice(num, 1);
  }
}

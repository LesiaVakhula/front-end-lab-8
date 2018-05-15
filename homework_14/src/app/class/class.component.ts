import { Component, OnInit, Input,  EventEmitter, Output } from '@angular/core';

import { Classess } from '../class';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  @Input ('itemClass') itemClass: Classess;
  @Input ('num') num: number;
  @Output() removeClassess = new EventEmitter<number>();
  @Output() saveClassess = new EventEmitter<{}>();
  showRow = true;
  newClasses =  {};
  isAdding = true;
  isEditing = true;

  constructor() { }

  ngOnInit() {
  }
  remove(num): void {
    this.removeClassess.emit(num - 1);
  }
  startEndEdit(): void {
    this.isEditing = !this.isEditing;
  }
  saveItem(item): void {
    this.newClasses = Object.assign({}, this.itemClass);
    this.isAdding = false;
    this.saveClassess.emit(item);
  }
  discardChange(): void {
    this.itemClass.topic = '';
    this.itemClass.lecture = '';
    this.itemClass.date = new Date();
  }
}

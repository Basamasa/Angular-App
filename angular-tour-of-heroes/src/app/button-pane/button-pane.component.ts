import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Commands, Command } from '../api/Commands'
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-button-pane',
  templateUrl: './button-pane.component.html',
  styleUrls: ['./button-pane.component.css']
})
export class ButtonPaneComponent implements OnInit {
  @Input() commands: Commands;

 
  
  constructor() { }

  ngOnInit() {
  }

  trackByIndex(i: number, obj: any) {
    return obj.id;
  }
  
}

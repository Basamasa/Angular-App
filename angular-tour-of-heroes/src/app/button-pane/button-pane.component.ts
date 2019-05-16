import { Component, OnInit, Input } from '@angular/core';
import { Commands } from '../api/Commands'

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

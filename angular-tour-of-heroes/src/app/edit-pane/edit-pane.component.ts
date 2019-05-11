import { Component, OnInit , Input , ViewChild} from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Form, Row } from '../api/Form';
import { Person } from '../services/Person';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ListPaneComponent } from '../list-pane/list-pane.component';

@Component({
  selector: 'app-edit-pane',
  templateUrl: './edit-pane.component.html',
  styleUrls: ['./edit-pane.component.css']
})
export class EditPaneComponent implements OnInit {
  @Input() model: Person;
  @Input() form: Array<Row>;
  checked: Boolean;
  constructor() { }

  handel(key){
    this.model[key] = !this.model[key];
  }
  trackByIndex(i: number, obj: any) {
    return obj.id;
  }
  trackByIndex1(i: number, obj: any) {
    return obj.id;
  }
  compareById(f1: Person, f2: Person): boolean {
    return f1 && f2 && f1.id === f2.id;
  }

  valuechange($event){
    console.log("ok where");
    //this.listPane.butt();
  }
  @ViewChild(ListPaneComponent) listPane: ListPaneComponent;
  ngOnInit() {
    
  }

}

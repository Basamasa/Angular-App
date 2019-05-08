import { Component, OnInit , Input} from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Form, Row } from '../api/Form';
import { Person } from '../services/Person';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-edit-pane',
  templateUrl: './edit-pane.component.html',
  styleUrls: ['./edit-pane.component.css']
})
export class EditPaneComponent implements OnInit {
  @Input() model: Person;
  @Input() form: Array<Row>;
  
  constructor() { }


  trackByIndex(i: number, obj: any) {
    return obj.id;
  }
  ngOnInit() {
  }

}

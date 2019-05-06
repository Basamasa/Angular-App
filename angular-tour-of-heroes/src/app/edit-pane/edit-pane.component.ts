import { Component, OnInit , Input} from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Form } from '../api/Form';
import { Person } from '../services/Person';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-edit-pane',
  templateUrl: './edit-pane.component.html',
  styleUrls: ['./edit-pane.component.css']
})
export class EditPaneComponent implements OnInit {
  @Input() model: Person;
  @Input() form: Form;
  
  constructor() { }

  fuck () {
    console.log(this.form);
    console.log(this.form.rows.length);
    for(let row of this.form.rows){
      console.log(row);
      for(let config of row.configs){
        console.log(config);
      }
    }
  }
  ngOnInit() {
  }

}

import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { Columns } from '../api/Columns';
import { PersonService, Person } from '../services/Person';
import { Adress, AdressService } from '../services/Adress';
import { MatSort, MatTableDataSource } from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-list-pane',
  templateUrl: './list-pane.component.html',
  styleUrls: ['./list-pane.component.css']
})
export class ListPaneComponent implements OnInit {
  @Input() columns: Columns;
  @Output() selectedPerson: Person;
  @Output() indexOfSelected: number;
  @Input() adressess: Array<Adress>;
  @Input() displayedColumns: string[];
  @Input() dataSource;

  get getSelectedPerson() {
    return this.selectedPerson;
  }
  get getIndexOfSelected() {
    return this.indexOfSelected;
  }
  @ViewChild(MatSort) sort: MatSort;

  quickSort() {
    this.dataSource.sort = this.sort;
  }

  selectRow(row, i){
    console.log(row , i, this.dataSource.data);
    this.selectedPerson = row;
    this.indexOfSelected = i
  }

  constructor() { }

  ngOnInit() {
    this.quickSort();
  }

}

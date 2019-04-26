import { Component, OnInit , Input, ViewChild} from '@angular/core';
import { Columns, Column} from '../api/Columns';
import { PersonService , Person} from '../services/Person';
import { MatSort, MatTableDataSource } from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent<T> implements OnInit {
  table: T[];
  columns: Columns;
  height: string;
  width: string;
  persons: PersonService;
  selectedPerson: Person;
  indexOfSelected: number;
  displayedColumns: string[] = ['id', 'first', 'second', 'paid', 'nickname' , 'city', 'male', 'birthday'];
  data: Array<Person> = this.get();

  
  date : Date;

  get(): Array<Person>{
    return PersonService.createPersons(500);
  }

  dataSource = new MatTableDataSource(this.data);
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addColumns(): Array<Column>{
    this.columns = Columns.create();
    this.columns.add("id");
    this.columns.add("first");
    this.columns.add("second");
    this.columns.add("paid");
    this.columns.add("nickname");
    this.columns.add("city");
    this.columns.add("male");
    this.columns.add("birthday");
    return this.columns.getColumns();
  }


  addRow () {
    this.data.splice(this.indexOfSelected, 0, new Person (0, "NEW"));
    //this.dataSource = new MatTableDataSource(this.data);
    this.quickSort();
  }

  removeRow () {
    this.data = this.data.filter(s => s !== this.selectedPerson);
    this.dataSource = new MatTableDataSource(this.data);
    this.quickSort();
  }

  copyRow() {
    this.data.splice(this.indexOfSelected, 0, this.selectedPerson);
    this.dataSource = new MatTableDataSource(this.data);
    this.quickSort();
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    //this.data.map(s => if(s === this.selectedPerson){} else );
    //this.selectedPerson.birthday = event.value;
  }

  quickSort() {
    this.dataSource.sort = this.sort;
  }

  selectRow(row, i){
    console.log(row , i);
    this.selectedPerson = row;
    this.indexOfSelected = i
    this.date = this.selectedPerson.birthday;
  }
  
  constructor() { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.quickSort();
  }

}

import { Component, OnInit , Input, ViewChild} from '@angular/core';
import { Columns} from '../api/Columns';
import { PersonService , Person} from '../services/Person';
import { MatSort, MatTableDataSource } from '@angular/material';



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

  displayedColumns: string[] = ['id', 'first', 'second', 'city', 'birthday', 'paid'];
  data: Array<Person> = this.get();

  get(): Array<Person>{
    return PersonService.createPersons(10);
  }
  dataSource = new MatTableDataSource(this.data);
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // addColumns(): Array<Column>{
  //   this.columns = Columns.create();
  //   this.columns.add("id");
  //   this.columns.add("first");
  //   this.columns.add("second");
  //   this.columns.add("city");
  //   this.columns.add("birthday");
  //   return this.columns.getColumns();
  // }

  // handle(ref: any): void {
  //   ref.destroy()
  // }
  // get listView (): Table {
  //   return (this.tableView as Table)
  // }

  addRow () {
    this.data.push(new Person ( 0,""));
    this.dataSource = new MatTableDataSource(this.data);
  }

  removeRow () {
    console.log(this.data);
    this.data.filter(s => s !== this.selectedPerson);
    this.dataSource = new MatTableDataSource(this.data);
    console.log(this.data);
  }

  copyRow() {

  }

  isLoading (): boolean {
    return false
  }

  selectRow(row){
    console.log(row);
    this.selectRow = row;
  }

  cellFormatter (row: any, col: any, val: any) {
    if (val instanceof Date) {
      return val.toLocaleDateString()
    }
    return val
  }

  constructor() { }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}

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
  filterText: string;
  onSelectionChanged: Function;
  persons: PersonService;

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

  addRow (row: T, index: number) {
    this.table.splice(index, 0, row)
  }

  // removeRow (row: T) {
  //   let index: number = this.table.indexOf(row)
  //   if (index >= 0) {
  //     this.table.splice(index, 1)
  //     this.listView.setCurrentRow(this.table[index])
  //   }
  // }

  getRowIndex (row: T): number {
    return this.table.indexOf(row)
  }

  private getData (): T[] {
    if (this.table) {
      return this.table.filter(row => this.filterBySearchText(row))
    }
    return []
  }

  filterBySearchText (row: any): boolean {
    var pattern = this.filterText
    if (!pattern) {
      return true
    }
    var content
    var found = false
    pattern = pattern.toLowerCase()
    this.columns.getColumns().forEach(col => {
      content = row[col.key]
      if (typeof (content) === 'string') {
        if (content.toLowerCase().includes(pattern)) {
          found = true
        }
      }
    })
    return found
  }

  isLoading (): boolean {
    return false
  }

  selectRow(row) {
    console.log(row);
  }

  setSelection (row: T) {
    if (this.onSelectionChanged) {
      this.onSelectionChanged(row)
    }
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

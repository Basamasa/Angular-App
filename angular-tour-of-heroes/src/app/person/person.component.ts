import { Component, OnInit , Input} from '@angular/core';
import { Columns } from '../api/Columns';
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
  
  handle(ref: any): void {
    // console.log(ref.index)
    // console.log(ref.rowData)
    // console.log(ref.innerHTML)
    ref.destroy()
    
  }
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


  tableData: any[] = [{
    name: '水爷',
    date: '2017-08-19',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-20',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-21',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-22',
    address: '上海市普陀区金沙江路 1510 弄',
  }]

  constructor() { }

  ngOnInit() {
  }

}

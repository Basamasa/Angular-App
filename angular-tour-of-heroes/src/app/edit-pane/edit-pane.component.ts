import { Component, OnInit , Input , ViewChild, EventEmitter, Output, Inject} from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Form, Row } from '../api/Form';
import { Person } from '../services/Person';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ListPaneComponent } from '../list-pane/list-pane.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Columns } from '../api/Columns';

@Component({
  selector: 'app-edit-pane',
  templateUrl: './edit-pane.component.html',
  styleUrls: ['./edit-pane.component.css']
})
export class EditPaneComponent implements OnInit {
  @ViewChild("ListPaneComponent") listPane: ListPaneComponent;
  @Input() model: Person;
  @Input() form: Array<Row>;

  @Output() test = new EventEmitter<any>();

  checked: Boolean;

  table : [Person];
  columns: Columns;
  displayColumns: [string]

  columnsToDisplay(): [string]{
    var displayColumns = [];
    for (let co of this.columns.getColumns()){
        displayColumns.push(co.label);
    }
    return <[string]>displayColumns;
  }

  constructor(public dialog: MatDialog) {
    
   }
   compareObjects(o1: any, o2: any): boolean {
     console.log("how?")
    return o1.toString() == o2.toString();
}

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '280px',
      data: {table: this.table, columns: this.columns, displayColumns: this.displayColumns}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.model = result;
      
    });
  }


  valuechange($event){
    this.test.emit($event);
  }

  ngOnInit() {
    for(let row of this.form){
        for(let config of row.configs){
          if(config.type=='lookup'){
            this.table = config.table;
            this.columns = config.columns;
          }
        }
    }
    this.displayColumns = this.columnsToDisplay();
    console.log(this.table, this.columns, this.displayColumns);
  }

}

export interface DialogData {
  table : Person[];
  columns: Columns;
  displayColumns: [string];
}

@Component ({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  selected : Person;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  selectRow(row){
    this.selected = row;
  }

}

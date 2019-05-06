import { Component, OnInit, Input, ViewChild, Output, ChangeDetectorRef, SimpleChanges , EventEmitter} from '@angular/core';
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
  selectedPerson: Person;
  indexOfSelected: number;
  @Input() adressess: Array<Adress>;
  @Input() displayedColumns: string[];
  @Input() dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @Output() someEvent1 = new EventEmitter<Person>();

  selectRow(row, i){
    console.log(row , i, this.dataSource.data);
    this.selectedPerson = row;
    this.indexOfSelected = i
  }

  emitCommand() {
    this.someEvent1.emit(this.selectedPerson);
  }

  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.changeDetectorRefs.detectChanges;
  }

  
}

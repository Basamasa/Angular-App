import { Component, OnInit, Input, ViewChild, Output, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { Columns } from '../api/Columns';
import { PersonService, Person } from '../services/Person';
import { Adress, AdressService } from '../services/Adress';
import { MatSort, MatTableDataSource } from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { EventEmitter } from 'protractor';

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

  selectRow(row, i){
    console.log(row , i, this.dataSource.data);
    this.selectedPerson = row;
    this.indexOfSelected = i
  }

  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.changeDetectorRefs.detectChanges;
  }

  
}

import { Component, OnInit, Input, ViewChild, Output, ChangeDetectorRef, SimpleChanges , EventEmitter} from '@angular/core';
import { Columns } from '../api/Columns';
import { PersonService, Person } from '../services/Person';
import { Adress, AdressService } from '../services/Adress';
import { MatSort, MatTableDataSource } from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { Observable , of, BehaviorSubject } from 'rxjs';
import { copyAnimationEvent } from '@angular/animations/browser/src/render/shared';
import { Button } from 'protractor';
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
  data : Person[];
  dataSource = new MatTableDataSource(this.data);
  @Input() ob : BehaviorSubject<Person[]>;
  @ViewChild(MatSort) sort: MatSort;
  @Output() someEvent1 = new EventEmitter<Person>();

  selectRow(row, i){
    console.log(row , i, this.dataSource.data);
    this.selectedPerson = row;
    this.indexOfSelected = i
    
  }

  butt() {
    let tem1 = new Person (0, "NEW");
    console.log(this.selectedPerson);
    tem1.id = this.selectedPerson.id;
    tem1.first = this.selectedPerson.first;
    tem1.male = this.selectedPerson.male;
    tem1.nickname = this.selectedPerson.nickname;
    tem1.second = this.selectedPerson.second;
    tem1.paid = this.selectedPerson.paid;
    tem1.city = this.selectedPerson.city;
    tem1.birthday = this.selectedPerson.birthday;
    this.dataSource.data.splice(this.indexOfSelected, 1, tem1);
    this.ob.next(this.dataSource.data);
  }

  emitCommand() {
    this.someEvent1.emit(this.selectedPerson);
  }


  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.ob.subscribe(x => {this.dataSource.data = x;
    this.changeDetectorRefs.detectChanges();});
    this.dataSource.sort = this.sort;
  }
  
}

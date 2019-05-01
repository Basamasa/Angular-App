import { Component, OnInit , Input, ViewChild, ChangeDetectorRef} from '@angular/core';
import { Columns, Column} from '../api/Columns';
import { PersonService , Person} from '../services/Person';
import { MatSort, MatTableDataSource } from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { Adress , AdressService} from '../services/Adress';
import { ListPaneComponent } from '../list-pane/list-pane.component';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent<T> implements OnInit {

  columns: Columns;
  adressess: Array<Adress> = AdressService.createAdresses(8);
  displayedColumns: string[] = ['id', 'first', 'second', 'paid', 'nickname' , 'city', 'male', 'birthday'];
  data: Array<Person> = PersonService.createPersons(10);
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
    this.data.splice(this.child.indexOfSelected, 0, new Person (0, "NEW"));
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.child.sort;
  }

  removeRow () {
    this.data = this.data.filter(s => s != this.child.selectedPerson);
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.child.sort;
  }

  copyRow() {
    this.data.splice(this.child.indexOfSelected, 0, this.child.selectedPerson);
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.child.sort;
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    //this.data.map(s => if(s === this.selectedPerson){} else );
    //this.selectedPerson.birthday = event.value;
  }

  
  
  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(ListPaneComponent) child: ListPaneComponent;


  ngOnInit() {
    
  }

}

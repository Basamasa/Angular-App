import { Component, OnInit , Input, ViewChild, ChangeDetectorRef} from '@angular/core';
import { Columns, Column} from '../api/Columns';
import { PersonService , Person} from '../services/Person';
import { MatSort, MatTableDataSource, MatTable } from '@angular/material';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Adress , AdressService} from '../services/Adress';
import { ListPaneComponent } from '../list-pane/list-pane.component';
import { Commands ,Command} from '../api/Commands';
import { Form , Row } from '../api/Form';
import { Observable , of , BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent<T> implements OnInit {

  columns: Columns;
  adressess: Array<Adress> = AdressService.createAdresses(8);
  displayedColumns: string[] = ['id', 'first', 'second', 'paid', 'nickname' , 'city', 'male', 'birthday'];
  data: Person[] = PersonService.createPersons(10);
  dataSource = new MatTableDataSource(this.data);
  behariorSouce = new BehaviorSubject(this.data);
  observeSource = of(this.data);
  selected: Person;
  applyFilter(filterValue: string) {
    this.child.dataSource.filter = filterValue.trim().toLowerCase();
  }


  addCommands(): Array<Command> {
    let tem = Commands.create();
    tem.createCommand('New').call((command) => this.newRow(command));
    tem.createCommand('Remove').call(() => this.removeRow());
    tem.createCommand('Copy').call(() => this.copyRow());
    return tem.getCommads();
  }

  addForms(): Array<Row> {
    let form = Form.create();
      form.newRow()
        .space().withBottomSpace('10px');
      form.newRow()
        .textInput('Id').withSpan(6).build()
        .checkbox('Male').withSpan(2).withOffset(0).build()
        .dateInput('Birthday').withOffset(6).build();
      form.newRow()
        .hr('Adress').withSpan(24).build()
        .textInput('First').withSpan(6).build()
        .lookup('Second').withSpan(6)
        .withTable(PersonService.createPersons(10))
        .withColumns(Columns.create()
          .add('Id').center().build()
          .add('First').sort(false).build()
          .add('Second').sort(false).build())
        .withResultColumn('second');
      form.newRow()
        .textInput('City').withSpan(6).build()
        .textInput('Street').withSpan(6).build()
        .textInput('Country').withSpan(6).build()
        .hr('Other').withSpan(24).build()
        .textInput('Paid').withSpan(6).build();
      form.newRow()
        .selectInput('Nickname').withSpan(6).withTable(PersonService.createPersons(10)).build()
        .selectInput('Adress').withSpan(6).withTable(AdressService.createAdresses(10)).build();
      form.newRow()
        .textArea('Comment').withSpan(24).build();
      return form.rows;
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


  receiveData1($event) {
    this.selected = $event;
  }

  newRow (command: Command) {
    console.log(command);
    this.data.splice(this.child.indexOfSelected, 0, new Person (0, "NEW"));
    this.behariorSouce.next(this.data);
    //this.dataSource = new MatTableDataSource(this.data);
    //this.dataSource.sort = this.child.sort;
  }

  removeRow () {
    this.data = this.data.filter(s => s != this.child.selectedPerson);
    this.behariorSouce.next(this.data);
    //this.dataSource = new MatTableDataSource(this.data);
    //this.dataSource.sort = this.child.sort;
  }

  copyRow() {
    let tem1 = new Person (0, "NEW");
    tem1.id = this.child.selectedPerson.id;
    tem1.first = this.child.selectedPerson.first;
    tem1.male = this.child.selectedPerson.male;
    tem1.nickname = this.child.selectedPerson.nickname;
    tem1.second = this.child.selectedPerson.second;
    tem1.paid = this.child.selectedPerson.paid;
    tem1.city = this.child.selectedPerson.city;
    tem1.birthday = this.child.selectedPerson.birthday;
    this.data.splice(this.child.indexOfSelected, 0, tem1);
    this.behariorSouce.next(this.data);
    //this.dataSource = new MatTableDataSource(this.data);
    //this.dataSource.sort = this.child.sort;
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    //this.data.map(s => if(s === this.selectedPerson){} else );
    //this.selectedPerson.birthday = event.value;
  }
  
  
  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(ListPaneComponent) child: ListPaneComponent;
  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit() {
    this.changeDetectorRefs.detectChanges();
  }


}

import { Component, OnInit , Input, ViewChild, ChangeDetectorRef} from '@angular/core';
import { Columns, Column} from '../api/Columns';
import { PersonService , Person} from '../services/Person';
import { MatSort, MatTableDataSource, MatTable } from '@angular/material';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Adress , AdressService} from '../services/Adress';
import { ListPaneComponent } from '../list-pane/list-pane.component';
import { Commands ,Command} from '../api/Commands';
import { Form , Row } from '../api/Form';

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
  selected: Person;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  addCommands(): Array<Command> {
    let tem = Commands.create();
    tem.createCommand('New').call(this.newRow);
    tem.createCommand('Remove').call(this.removeRow);
    tem.createCommand('Copy').call(this.copyRow);
    return tem.getCommads();
  }

  addForms(): Array<Row> {
    let form = Form.create();
      form.newRow()
        .space().withBottomSpace('10px');
      form.newRow()
        .textInput('Id').withSpan(4).build()
        .checkbox('Male').withSpan(2).withOffset(0).build()
        .dateInput('Date of Birth', 'birthday').withOffset(2).build();
      form.newRow()
        .hr('Adress').withSpan(24).build()
        .textInput('First').build()
        .lookup('Second')
        .withTable(PersonService.createPersons(10))
        .withColumns(Columns.create()
          .add('Id').center().build()
          .add('First').sort(false).build()
          .add('Second').sort(false).build())
        .withResultColumn('second');
      form.newRow()
        .textInput('City').build()
        .textInput('Street').build()
        .textInput('Country').build()
        .hr('Other').withSpan(24).build()
        .textInput('Income', 'paid').build();
      form.newRow()
        .selectInput('Nickname').withTable(PersonService.createPersons(10)).build()
        .selectInput('Adress').withTable(AdressService.createAdresses(10)).build();
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

  receiveData($event) {
    let co: Command = $event;
    if(co.getLabel() == "New"){
      this.newRow();
    }else if(co.getLabel() == "Remove"){
      this.removeRow();
    }else{
      this.copyRow();
    }
    //console.log(co.getCallBack());
    //co.execute(this);
  }

  receiveData1($event) {
    this.selected = $event;
  }

  newRow () {
    console.log(this.dataSource);
    this.dataSource.data.splice(this.child.indexOfSelected, 0, new Person (0, "NEW"));
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.child.sort;
  }

  removeRow () {
    this.data = this.data.filter(s => s != this.child.selectedPerson);
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.child.sort;
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
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.child.sort;
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    //this.data.map(s => if(s === this.selectedPerson){} else );
    //this.selectedPerson.birthday = event.value;
  }
  change() {
    // if there's nothing in filter
    this.dataSource.data = this.data;
    this.child.dataSource.filter = ' ';
    this.child.dataSource.filter = '';
  }


  // refresh() {
  //   this.service1.createPersons(8).subscribe((res) => {
  //     this.data = res;
  //     this.teachDS = new LanguageDataSource(this.user.profile.languages.teach);
  //     this.changeDetectorRefs.detectChanges();
  //   });
  // }
  
  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(ListPaneComponent) child: ListPaneComponent;
  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit() {
    this.changeDetectorRefs.detectChanges();
  }


}

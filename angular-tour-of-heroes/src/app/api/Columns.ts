export class Column {
  label!: string;
  key!: string;
  sortable: boolean = true;
  resizeable: boolean = true;
  width: number = 200;
  align: string = 'left';
  build!:Function;

  constructor (label: string, key = label.toLowerCase()) {
    this.label = label
    this.key = key
    return this
  }

  sort (): Column {
    this.sortable = true
    return this
  }
  center (): Column {
    this.align = 'center'
    return this
  }
  right (): Column {
    this.align = 'right'
    return this
  }
  fixWidth (): Column {
    this.resizeable = false
    return this
  }
  startWidth (width:number): Column {
    this.width = width
    return this
  }
}

export class Columns {
  private columns = new Array<Column>();

  add (label:string) : Column {
    let col = new Column(label)
    col.build = () => { return this }
    this.columns.push(col)
    return col
  }
  getColumns (): Array<Column> {
    return this.columns
  }

  static create () {
    return new Columns()
  }
}

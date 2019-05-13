import { Columns } from './Columns'
import { Person } from '../services/Person';

export class ComponentConfig {
    labelWidth = '7em';
    label!: string;
    key!: string;
    span: number = 2;
    offset: number = 0;
    type: string = 'text';
    resultColumn= 'id';
    placeHolder: string = '';
    bottomSpace!: string;
    table!: [Person];
    columns!: Columns;
    build!: Function;

    withSpan (span: number): ComponentConfig {
      this.span = span
      return this
    }

    withTable (table: any): ComponentConfig {
      this.table = table
      return this
    }

    withResultColumn (resultColumn : string): ComponentConfig {
      this.resultColumn = resultColumn
      return this
    }

    withColumns (columns: Columns): ComponentConfig {
      this.columns = columns
      return this
    }

    withOffset (offset: number): ComponentConfig {
      this.offset = offset
      return this
    }

    withBottomSpace (val: string): ComponentConfig {
      this.bottomSpace = val
      return this
    }

    withPlaceHolder (placeHolder: string): ComponentConfig {
      this.placeHolder = placeHolder
      return this
    }

    withKey (key: string): ComponentConfig {
      this.key = key
      return this
    }

    withLabel (label: string): ComponentConfig {
      this.type = 'label'
      this.label = label
      return this
    }

    withLabelWidth (width: string): ComponentConfig {
      this.labelWidth = width
      return this
    }

    getLabel () {
      return this.type == 'boolean' ? null : this.label
    }

    getLabelWidth () {
      return this.type == 'boolean' ? '0' : this.labelWidth
    }

    getCheckboxLabel () {
      return this.label
    }
}

export class Row {
    public configs = new Array<ComponentConfig>();
    public count = 0;
    public form!: Form;

    hr (label: string) {
      return this.createConfig(label, 'hr')
    }

    space (): ComponentConfig {
      return this.createConfig('', 'space')
    }

    textInput (label: string): ComponentConfig {
      return this.createConfig(label, 'text')
    }

    checkbox (label: string): ComponentConfig {
      return this.createConfig(label, 'boolean')
    }

    lookup (label: string): ComponentConfig {
      return this.createConfig(label, 'lookup')
    }

    selectInput (label: string): ComponentConfig {
      return this.createConfig(label, 'select')
    }

    dateInput (label: string): ComponentConfig {
      return this.createConfig(label, 'date')
    }

    numericinput (label: string): ComponentConfig {
      return this.createConfig(label, 'numeric')
    }

    textArea (label: string): ComponentConfig {
      return this.createConfig(label, 'area')
    }

    list (label: string): ComponentConfig {
      return this.createConfig(label, 'list')
    }

    build (): Form {
      return this.form
    }

    private createConfig (label: string, type: string) {
      let config = new ComponentConfig()
      if (
        this.form.allLabelWithColon &&
            !label.endsWith(':') &&
            type != 'boolean'
      ) {
        config.label = label + ':'
      } else {
        config.label = label
      }
      config.key = label.toLowerCase()
      config.placeHolder = label
      config.type = type
      config.span = this.form.allCollSpan
      config.labelWidth = this.form.allLabelWidth
      config.bottomSpace = this.form.allBottomSpace
      config.build = () => {
        return this
      }
      this.configs.push(config)
      return config
    }
}

export class Form {
    rows = new Array<Row>();

    allLabelWithColon = false;
    allCollSpan = 8;
    allBottomSpace = '5px';
    allLabelWidth = '7em';

    defaultBottomSpace (val: string): Form {
      this.allBottomSpace = val
      return this
    }

    defaultCollSpan (val: number): Form {
      this.allCollSpan = val
      return this
    }

    allLabelEndWithColon (): Form {
      this.allLabelWithColon = true
      return this
    }

    defaultLabelWidth (val: string): Form {
      this.allLabelWidth = val
      return this
    }

    newRow (): Row {
      let row = new Row()
      row.form = this
      row.count = this.rows.length
      this.rows.push(row)
      return row
    }

    build (): Form {
      return this
    }

    static create (): Form {
      return new Form()
    }
}

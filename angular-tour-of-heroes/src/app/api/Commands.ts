
export class Command {
  protected label!:string;
  protected callback!:Function;
  protected secondClass = false;
  build!:Function;

  constructor (label:string) {
    this.label = label
  }
  call (callback:Function):Command {
    this.callback = callback
    return this
  }
  asSecondClass ():Command {
    this.secondClass = true
    return this
  }
  isSecondClass ():boolean {
    return this.secondClass
  }

  getLabel () {
    return this.label
  }

  isDisabled ():boolean {
    return false
  }
  execute () {
    if (this.callback) {
      this.callback(this)
    } else {
      console.log("no callback in command: '" + this.label + "'")
    }
  }
}

export class Commands {
  private commands = new Array<Command>();

  createCommand (label:string):Command {
    let command = new Command(label)
    this.commands.push(command)
    command.build = () => { return this }
    return command
  }
  addCommand (command:Command):Command {
    this.commands.push(command)
    command.build = () => { return this }
    return command
  }

  isEmpty ():boolean {
    return this.commands.length == 0
  }
  hasSecondClassCommands ():boolean {
    return this.getSecondClassCommands().length > 0
  }
  hasFirstClassCommands ():boolean {
    return this.getFirstClassCommands().length > 0
  }
  getSecondClassCommands (): Command[] {
    return this.commands.filter((e) => e.isSecondClass() == true)
  }
  getFirstClassCommands ():Command[] {
    return this.commands.filter((e) => e.isSecondClass() != true)
  }

  static create () {
    return new Commands()
  }
}

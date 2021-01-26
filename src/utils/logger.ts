export = new class Logger {
  private date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  
  public info (message: string, module?:string): void {
    const info = `[${this.date}] [${module || "OTHERS"}] ${message}`;
    return console.log("\x1b[34m"   + info);
  }

  public warn (message: string, module?:string): void {
    const warn = `[${this.date}] [${module || "OTHERS"}] ${message}`;
    return console.log("\x1b[33m"+ warn)
  }

  public sucess (message: string, module?:string): void {
    const sucess = `[${this.date}] [${module || "OTHERS"}] ${message}`;
    return console.log("\x1b[32m"+ sucess);
  }

  public error (message: string, module?:string): void {
    const sucess = `[${this.date}] [${module || "OTHERS"}] ${message}`;
    return console.log("\x1b[31m"+ sucess);
  }

  public send (message: string, module?:string): void {
    const sucess = `[${this.date}] [${module || "OTHERS"}] ${message}`;
    return console.log("\x1b[36m"+ sucess);
  }
}
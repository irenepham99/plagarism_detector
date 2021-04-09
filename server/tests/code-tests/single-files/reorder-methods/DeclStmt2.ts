class DeclStmt {
    private varN;
    constructor(private varName: string) {
      this.varN = varName;
    }
  
    public getVarName(): string {
      return this.varN;
    }

    public text(): string {
        return "declare " + this.varN;
      }
  }
  
  export default DeclStmt;
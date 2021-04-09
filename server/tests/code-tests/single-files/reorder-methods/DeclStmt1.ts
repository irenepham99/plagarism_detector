class DeclStmt {
  private varN;
  constructor(private varName: string) {
    this.varN = varName;
  }

  public text(): string {
    return "declare " + this.varN;
  }

  public getVarName(): string {
    return this.varN;
  }
}

export default DeclStmt;
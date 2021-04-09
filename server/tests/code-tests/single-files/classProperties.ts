class ManyProperties { 
    private aString : string; 
    private aBool : boolean = true; 
    private aNumber : number = 0; 
    private aListOfString : string[] = [] 

    constructor () { 
        this.aString = "aString"
        this.aBool = false; 
        this.aNumber =1; 
        this.aListOfString.push("hello")
    }

    aMethod() { 
        let x : number; 
        const y : boolean = true; 
        var z : string; 
        x = 100; 
        z = "hello"
    }
}
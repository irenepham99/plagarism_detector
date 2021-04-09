//program 1
interface IAnimal1 {
    getNoiseDescription() : string; 

    getCombinedNoise(anotherNoise: string) : string; 

    getVaccinationRecord(year : number) : Object;

    getName() : string
}

//program 1 

interface IShape1 { 

    calcalateArea() : number; 

    getDimensions() : Object; 

}

//program2
interface IShape1 { 

    calcalateArea2() : number; 

    getDimensions2() : Object; 

}

//program2
interface IAnimal2 {
    getNoiseDescription2() : string; 

    getCombinedNoise2(anotherNoise: string) : string; 

    getVaccinationRecord2(year : number) : Object;

    getName2() : string
}
export * as Enumerations from './enumerations'

export enum Country { AR , BR, DE, DK, ES, FI, FR, GB, GR, HT, IL, IT, JP, LTU, MX, NL, TR, US, YUG } //by default start at 0 but you can asign values

export enum Position { PG,SG,SF,PF,C }


export function isEuropean(): Boolean {
    //TODO Implementar lógica
    return true;
}

export function toString(): String {
    //TODO Implementar lógica
    return ""
}

/*let countryType: Country = Country.ES;
let countryName: String = Country[2];
console.log(countryType, countryName);*/
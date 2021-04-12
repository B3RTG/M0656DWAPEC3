import Person from './Person'
import Team from './Team'
import PlayerAttributes from './PlayerAttributes'
import Training from './Training'

import { Position, Country } from './enumerations'

export default class Player extends Person {
    
    /*+---------1    1+-----------------+
      | Player |◆--- | PlayerAttribute |
      +--------+      +-----------------+*/
    private attributes: PlayerAttributes;
    private position: Position;
    private country: Country;

    public number: Number;
    public height: Number;
    public weight: Number;
    public numInternational: Number = 0;
    public injuriedWeeks: Number = 0;

    constructor(name: String, surname: String, nick: String, birthdate: Date, country: Country, salary: Number, cancelationClause: Number, contractYears: Number, team: Team, number: Number, heigth: Number,weight:Number, numInternational: Number) {
        super(name, surname, nick, birthdate);
    }

    getAttributes(): PlayerAttributes {
        return this.attributes;
    }
    setAttributes(attr: PlayerAttributes) {
        this.attributes = attr;
    }

    getPosition(): Position {
        return this.position;
    }
    setPosition(pos: Position) {
        this.position = pos;
    }

    getCountry(): Country {
        return this.country;
    }
    setCountry(country: Country) {
        this.country = country;
    }

    getNumber(): Number {
        return 0;
    }
    setNumber(number: Number) {
        this.number = number;
    }

    getNumInternational(): Number {
        return 0;
    }
    setNumInternational(numInternational: Number) {
        this.numInternational = numInternational;
    }
    
    isInjuried(): Boolean {
        return false;
    }

    getInjuredWeeks(): Number  {
        return 0;
    }
    setInjuriedWeeks(injWeeks: Number) {
        //TODO
    }

    getTraining(): Training {
        return {} as Training;
    }
    setTraining(training: Training) {
        //TODO
    }

    toString(): String {
        return "";
    }

}

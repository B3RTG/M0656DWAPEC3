import Team from './Team'
import { Country } from './enumerations'

export default class League {

    private shortName: String;
    private longName: String;

    /*+------+     +--------+
      | Team |---<>| Leage  |
      +------+     +--------+*/
      private teams: Team[];

    constructor(shortName: String, longName: String, country: Country) {
        this.shortName = shortName;
        this.longName = longName;
    }

    getShortName(): String {
        return this.shortName;
    }
    setShortName(shortName: String) {
        this.shortName = shortName;
    }

    getLongName(): String {
        return this.longName;
    }
    setLongName(longName: String) {
        this.longName = longName;
    }

    getCountry(): Country {
        return Country.ES;
    }
    setCountry(country: Country) {
        //TODO
    }

    getTeams(): Team[] {
        return this.teams;
    }
    addTeam(team: Team) {
        this.teams.push(team);
    }
    removeTeam(team: Team) {
        //TODO delete team
    }

    toString(): String {
        return "";
    }

}
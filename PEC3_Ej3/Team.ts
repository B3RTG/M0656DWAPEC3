import Player from './Player'
import League from './Leage'

export default class Team {
    private shortName: String;
    private longName: String;
    private imageSrc: String;
    private president: String;
    private sponsor: String;
    private members: Number;
    private budget: Number;
    private founded: Number;

    /*+------+     +--------+
      | Team |<>---| Player |
      +------+     +--------+*/
    private squad: Player[];

    constructor()
    constructor(shortName: String, longName:String)
    constructor(shortName?: String, longName?:String)
    {
                
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
        this.shortName = longName;
    }

    getImageSrc(): String {
        return this.imageSrc;
    }
    setImageSrc(imageSrc: String) {
        this.imageSrc = imageSrc;
    }

    getPresident(): String {
        return this.president;
    }
    setPresident(president: String) {
        this.president = president;
    }

    getSponsor(): String {
        return this.sponsor;
    }
    setSponsor(sponsor: String) {
        this.sponsor = sponsor;
    }

    getMembers(): Number {
        return this.members;
    }
    setMembers(members: Number) {
        this.members = members;
    }

    getBudget(): Number {
        return this.budget;
    }
    setBudget(budget: Number) {
        this.budget = budget;
    }

    getFounded(): Number {
        return this.founded;
    }
    setFounded(founded: Number) {
        this.founded = founded;
    }

    addPlayer(player: Player) {
        //TODO add player
    }
    removePlayer(player: Player) {
        //TODO remove player
    }

    setSquad(squad: Player[]) {
        //Todo Add all players in array
    }

    getLineup(): Player[] {
        //TODO Return real data
        return [] as Player[];
    }

    getPlayerByNumber(number: Number): Player {
        return {} as Player;
    }

    getLeague() : League {
        return {} as League;
    }
    setLeague(league: League) {
        //TODO Set league
    }

    toString(): String {
        return "";
    }
}


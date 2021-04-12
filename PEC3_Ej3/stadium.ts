import Team from './Team'

export default class stadium {

    private name: String;
    private address: String;
    private location: String;
    private capacity: Number;
    private parkingLots: Number;
    private createDate: Date;

    constructor(name: String, addres: String, location: String, capacity: Number, parkingLots: Number, created: Date) {
        //TODO
    }

    getName(): String {
        return this.name;
    }
    setName(name: String) {
        this.name = name;
    }

    getAddress(): String {
        return this.address;
    }
    setAddress(address: String) {
        this.address = address;
    }

    getLocation(): String {
        return this.location;
    }
    setLocation(location: String) {
        this.location = location;
    }

    getCapacity(): Number {
        return this.capacity;
    }
    setCapacity(capacity: Number) {
        this.capacity = capacity;
    }

    getParkingLots(): Number {
        return this.parkingLots;
    }
    setParkingLots(lots: Number) {
        this.parkingLots = lots;
    }

    getCreated(): Date {
        return this.createDate;
    }
    setCreated(created: Date) {
        this.createDate = created;
    }

    getTeam(): Team[] {
        return [];
    }

    toString(): String {
        return "";
    }
}
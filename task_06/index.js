

class Airplane {
    constructor(model, name, max_speed) {
        this.model = model
        this.name = name
        this.max_speed = max_speed
        this.flies = false
        this.fuel = 30
        this.health = 100
    }
    takeoff() {
        this.flies = true
    }
    landing() {
        this.flies = false
    }
    refuel(fuel_count) {
        this.fuel += fuel_count
    }
    getHealth() {
        return this.health
    }
    getStatus() {
        return this.flies
    }
}

class MIG_Airplane extends Airplane {
    constructor(model, name, max_speed) {
        super(model, name, max_speed)
        console.log(this.name)
    }
    attack() {
        return 'RATA-TA-TA-TA'
    }
}

class TU_Airplane extends Airplane {
    constructor(model, name, max_speed) {
        super(model, name, max_speed)
        console.log(this.name)
    }
}


const newMig = new MIG_Airplane('МИГ', 'МИГ', 300)
const newTU = new TU_Airplane('ТУ', 'ТУ-154', 300)


class Airport {
    constructor(name, coordinate = [12.2324, 65.2321], limit_parking = 5, airplanes) {
        this.name = name.toLocaleUpperCase()
        this.coordinate = coordinate
        this.limit_parking = limit_parking
        this.parking = []
        this.servise_airplanes = airplanes
    }
    takeThePlane(plane) {
        const valid = this.validParking()
        if (valid) {
            console.log('Принимаем')
            this.planeParking(plane)
        } else console.log('Посадка запрещена')

    }
    planeTakeOff() {
        this.parking.pop()
    }
    planeParking(plane) {
        this.parking.push(plane)
    }
    planeReadyTakeOff(plane) {
        console.log(`${plane.name} готов подняться в воздух`)
    }
    checkStatePlane(plane) {
        return plane.getHealth()
    }
    refuelPlane(plane) {
        plane.refuel(20)
    }
    getPlanesInPark() {
        return this.parking
    }
    validParking() {
        const result = this.parking.length < this.limit_parking
        if (!result) return false
        else return true
    }
}


const createAirplanesForAirport = (type, count) => {
    const airplanes_for_aiprot = []
    for (let i = 0; i < count; i++) {
        if (type === 'mig') airplanes_for_aiprot.push(new MIG_Airplane('МИГ', 'ПВА-24', 1000))
        if (type === 'tu') airplanes_for_aiprot.push(new TU_Airplane('ТУ', 'ДДА-5', 1500))
    }
    return airplanes_for_aiprot
}


const airplanesIzh = createAirplanesForAirport('mig', 10)
const IzhevskAirport = new Airport('IzhAvie', [32.21312, 65.3322], 10, airplanesIzh)
IzhevskAirport.takeThePlane(newMig)

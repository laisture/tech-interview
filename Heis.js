class Heis {
    constructor(naaverendeEtasje, nesteStoppEtasje, kjoreRetning, estimertTidTilAnkomst, tidPerEtasje, nodStopp ){
        this.naaverendeEtasje = naaverendeEtasje
        this.nesteStoppEtasje = nesteStoppEtasje
        this.kjoreRetning = kjoreRetning
        this.estimertTidTilAnkomst = estimertTidTilAnkomst
        this.tidPerEtasje = tidPerEtasje
        this.nodStopp = nodStopp
    }

    set nesteStoppEtasje(etasje) {
        this.nesteStoppEtasje = etasje
    }
    get kjoreRetning() {
        return this.kjoreRetning
    }

    get estimertTidTilAnkomst() {
        let etasjerIgjenTilAnkomst = 0
        if(this.kjoreRetning === "opp") {
            etasjerIgjenTilAnkomst = this.nesteStoppEtasje - this.naaverendeEtasje
        }
        else if (this.kjoreRetning === "ned") {
            etasjerIgjenTilAnkomst = this.naaverendeEtasje - this.nesteStoppEtasje
        }
        return etasjerIgjenTilAnkomst * this.tidPerEtasje
    }

    set nodStoppKnappTrykket(nodStopp) {
        this.nodStopp = nodStopp
    }
}

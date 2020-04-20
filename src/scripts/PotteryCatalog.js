let potteryCatalog = []

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.cracked) {
        return false
    } else {
        if (potteryObj.weight >= 6) {
            potteryObj.price = 40
        } else {
            potteryObj.price = 20
        } 
        potteryCatalog.push(potteryObj)  
    }
    
}

export const usePottery = () => {
    return potteryCatalog.slice()
}
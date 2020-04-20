import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 8)
let vase = makePottery("vase", 7, 12)
let bowl = makePottery("bowl", 2, 3)
let plate = makePottery("plate", 1, 1)
let pot = makePottery("pot", 6, 7)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2500)
let firedVase = firePottery(vase, 2000)
let firedBowl = firePottery(bowl, 1000)
let firedPlate = firePottery(plate, 4000)
let firedPot = firePottery(pot, 2200)

// Determine which ones should be sold, and their price
let mugForSale = toSellOrNotToSell(firedMug)
let vaseForSale = toSellOrNotToSell(firedVase)
let bowlForSale = toSellOrNotToSell(firedBowl)
let plateForSale = toSellOrNotToSell(firedPlate)
let potForSale = toSellOrNotToSell(firedPot)

// Invoke the component function that renders the HTML list
PotteryList()
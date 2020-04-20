import { usePottery } from "./PotteryCatalog.js"

const contentTarget = document.querySelector(".potteryCatalog")

export const PotteryList = () => {
    const potteryCollection = usePottery()
    contentTarget.innerHTML = `
        ${potteryCollection.map(potteryPiece => {
            return `
                <div class="pottery__piece" id="${potteryPiece.id}">
                    <p class="pottery--shape">Piece: ${potteryPiece.shape}</p>
                    <p>Weight: ${potteryPiece.weight} lbs</p>
                    <p>Height: ${potteryPiece.height} in</p>
                    <p>Price: $${potteryPiece.price}</p>
                </div>
            `
        }).join("")}    
    `
}
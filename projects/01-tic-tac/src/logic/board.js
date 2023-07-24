import { WINNER_COMBOS } from "../constants";


export const checkWinnerFrom = (boarToCheck) => {
    // revisamos todas las combinaciones ganadoras
    // saber si gano X o O
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo

        if (
            boarToCheck[a] &&
            boarToCheck[a] === boarToCheck[b] &&
            boarToCheck[a] === boarToCheck[c]
        ) {
            return boarToCheck[a]
        }
    }
    // si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    // revisamos si hay un empate
    // si no hay más espacios vacíos
    // en el tablero
    return newBoard.every((square) => square !== null)
}

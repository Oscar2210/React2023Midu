/* eslint-disable react/prop-types */
export const Square = ({ children, isSelected, updateBoard, index }) => {

    const className = `square ${isSelected ? 'is-selected' : ''}` // Renderizado condicional del estado isSelected para ver que turno le toca

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}
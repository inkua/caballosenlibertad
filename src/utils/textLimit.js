// max 70 caracters
const truncateDescription = (descripcion)=>{
    if (descripcion.length <= 70) return descripcion; 
    return descripcion.slice(0, 70) + " ..."; 
}

const truncateString = (text, maxLength = 30) => {
    if (text.length <= maxLength) return text; // No truncar si no es necesario

    const truncationIndicator = " ...";
    const availableLength = maxLength - truncationIndicator.length; // Espacio real para el texto

    let truncated = text.slice(0, availableLength);

    // Evitar cortar palabras: busca el último espacio antes del corte
    const lastSpaceIndex = truncated.lastIndexOf(" ");
    if (lastSpaceIndex > 0) {
        truncated = truncated.slice(0, lastSpaceIndex);
    }

    return truncated + truncationIndicator;
};

export {
    truncateDescription,
    truncateString,
}


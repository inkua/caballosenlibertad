function getDateFormated(date) {
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const fecha = date
    const nombreMes = meses[fecha.getMonth()];
    const dia = fecha.getDate();
    const año = fecha.getFullYear();

    return `${nombreMes} ${dia}, ${año}`;
}

function formatDateForUser(dateString) {
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const [year, month, day] = dateString.split('-');
    
    // Convertimos el mes de número (01-12) a su nombre correspondiente
    const monthName = months[parseInt(month, 10) - 1];

    return `${monthName} ${parseInt(day, 10)}, ${year}`;
}

function convertToDateObject(dateString) {
    return new Date(dateString + "T00:00:00"); // Aseguramos la conversión correcta a zona horaria local
}

// Función para convertir la fecha en un objeto Date
function parseDate(dateStr) {
    const months = {
        "Enero": 0, "Febrero": 1, "Marzo": 2, "Abril": 3, "Mayo": 4, "Junio": 5,
        "Julio": 6, "Agosto": 7, "Septiembre": 8, "Octubre": 9, "Noviembre": 10, "Diciembre": 11
    };
    const [month, day, year] = dateStr.split(" ");
    return new Date(year, months[month], parseInt(day.replace(",", "")));
}
export {
    getDateFormated,
    parseDate,
    formatDateForUser,
    convertToDateObject,
}
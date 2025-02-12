export function useFormatter() {
  function convertToHours(duration: string): string {
    // Si no hay duración, retornar un valor por defecto
    if (!duration)
      return '0h 0m'

    // Extraer los números de la cadena y convertirlos a números
    const numbers = (duration.match(/\d+/g) || [])
    const totalMinutes = numbers.reduce((acc, curr) => acc + Number(curr), 0)

    // Convertir minutos a horas y minutos
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    return `${hours ? `${hours}h` : ''} ${minutes ? `${minutes}m` : ''}`.trim() || '0h 0m'
  }

  return {
    convertToHours,
  }
}

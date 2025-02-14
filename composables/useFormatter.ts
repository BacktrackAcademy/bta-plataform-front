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

  function timeAgo(date: string): string {
    const now = new Date()
    const past = new Date(date)
    const diff = now.getTime() - past.getTime()

    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30)
    const years = Math.floor(months / 12)

    if (years > 0)
      return `hace ${years} ${years === 1 ? 'año' : 'años'}`
    if (months > 0)
      return `hace ${months} ${months === 1 ? 'mes' : 'meses'}`
    if (days > 0)
      return `hace ${days} ${days === 1 ? 'día' : 'días'}`
    if (hours > 0)
      return `hace ${hours} ${hours === 1 ? 'hora' : 'horas'}`
    if (minutes > 0)
      return `hace ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`
    return 'hace unos segundos'
  }

  return {
    convertToHours,
    timeAgo,
  }
}

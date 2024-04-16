export function convertWindSpeed(speedInMetersPerSecond: number): string {
    const speedInKiloMetersPerHour = speedInMetersPerSecond * 3.6; // Conversion from m/s to km/h
    return `${speedInKiloMetersPerHour.toFixed(0)}km/h`
}
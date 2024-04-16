export function getDayOrNightIcon(
    iconName: string,
    dateTimeString: string
): string {
    const hours = new Date(dateTimeString).getHours(); // get hours form the given date and time string
    const isDayTime = hours >= 6 && hours < 18; // consider daytime from 6AM to 6PM
    return isDayTime ? iconName.replace(/.$/, "d") : iconName.replace(/.$/, "n")
}
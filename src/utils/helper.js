

export const getCurrentTimezone = () => {
    return Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone;
}
import moment from 'moment-timezone'

export const userTimeZone = moment.tz.guess()

/**
 * Formats a date to readable value from now.
 * Dates coming from server are always UTC.
 *
 *
 * Examples:
 * dateFromNow(now) // "Il y a quelques secondes."
 * dateFromNow(lastWekk) // "05/09/2020 - 13:37"
 *
 * @param {(Date | string)} date
 * @return {*}  {string}
 */
export const dateFromNow = (date: Date | string, includePrefix: boolean = false): string => {
	const serverUTCDate = moment.utc(date)

	const daysDifference: number = moment().diff(serverUTCDate, 'days')

	if (daysDifference >= 1) {
		let formattedDate = formatToLocalDate(date, 'DD/MM/YYYY à HH:MM')
		if (includePrefix) {
			formattedDate = `le ${formattedDate}`
		}
		return formattedDate
	} else {
		return moment(serverUTCDate).local().fromNow()
	}
}

export const formatToLocalDate = (date: Date | string, format: string = 'DD/MM/YYYY à HH:MM'): string => {
	return moment.utc(date).local().format(format)
}

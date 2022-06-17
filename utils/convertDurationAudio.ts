function convertDurationAudio(minutes: number): string {
    if (minutes) {
        const hour = minutes/60
        const minute = hour.toString().split('.')[0]
        const percent = parseInt(hour.toString().split('.')[1].slice(0, 2))
        const second = Math.ceil((60*percent)/100)

        if (parseInt(minute) < 10 && second < 10) {
            return `0${minute}:0${second}`
        }

        if (parseInt(minute) < 10) {
            return `0${minute}:${second}`
        }

        if (second < 10) {
            return `${minute}:0${second}`
        }

        return `${minute}:${second}`
    } else {
        return 'Duração não detectada'
    }
}

export default convertDurationAudio
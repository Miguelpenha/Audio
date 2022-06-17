import { Iplayer, Iaudio, IaudioPlayed } from '../../../types'
import { green, blue, magenta } from '../../../utils/colorsLogs'
import convertDurationAudio from '../../../utils/convertDurationAudio'

async function play(player: Iplayer, audioSelect: Iaudio): Promise<IaudioPlayed> {
    if (player) {
        player.status.isLoaded && await player.sound.unloadAsync()
        
        await player.sound.loadAsync({
            uri: audioSelect.localization
        })

        await player.sound.playAsync()

        console.log(green('> Playing audio'))
        console.log(blue(`  > Player: ${player ? 'non-default' : 'default'}`))
        console.log(blue(`  > Audio: ${audioSelect.name}`))
        console.log(magenta(`       > Duration: ${convertDurationAudio(audioSelect.duration)}`))
        console.log(magenta(`       > Name: ${audioSelect.name}`))
        console.log(magenta(`       > Localization: ${audioSelect.localization}`))
        
        return {
            audio: audioSelect,
            player: player ? 'non-default' : 'default'
    }
    }
}

export default play
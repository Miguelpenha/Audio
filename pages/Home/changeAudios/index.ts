import { Iplayer, Iaudio } from '../../../types'
import { Dispatch, SetStateAction } from 'react'
import play from './play'
import { green } from '../../../utils/colorsLogs'
import { Audio } from 'expo-av'

async function changeAudios(player: Iplayer, audioSelect: Iaudio, setPlayer: Dispatch<SetStateAction<Iplayer>>) {
    if (player) {
        await play(player, audioSelect)
    } else {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            staysActiveInBackground: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            playThroughEarpieceAndroid: false
        })

        const player = await Audio.Sound.createAsync({
            uri: audioSelect.localization
        })
    
        setPlayer(player)
    
        console.log(green('> Player criado'))

        await play(player, audioSelect)
    }
}

export default changeAudios
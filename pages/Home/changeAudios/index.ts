import { Iplayer, Iaudio } from '../../../types'
import { Dispatch, SetStateAction } from 'react'
import play from './play'
import { green } from '../../../utils/colorsLogs'
import { Audio } from 'expo-av'

async function changeAudios(player: Iplayer, audioSelect: Iaudio, setPlayer: Dispatch<SetStateAction<Iplayer>>) {
    if (player) {
        await play(player, audioSelect)
    } else {
        const player = await Audio.Sound.createAsync({
            uri: audioSelect.localization
        })
    
        setPlayer(player)
    
        console.log(green('> Player criado'))

        await play(player, audioSelect)
    }
}

export default changeAudios
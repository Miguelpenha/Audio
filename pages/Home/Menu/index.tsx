import { Iaudio, Iplayer } from '../../../types'
import { FC, useEffect, useState } from 'react'
import { Container, Column1, AudioName, Column2, ContainerPlayerOrPause, IconPlayerOrPause } from './style'
import limitText from '../../../utils/limitText'
import { AVPlaybackStatus } from 'expo-av'

interface Iprops {
    audio: Iaudio
    player: Iplayer
}

const Menu: FC<Iprops> = ({ audio, player }) => {
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        async function verification() {
            const status = await player.sound.getStatusAsync()

            setIsPlaying(!status.isPlaying)
        }

        player && verification().then()
    }, [audio, player])

    return (
        <Container>
            <Column1>
                <AudioName>{audio && limitText(audio.name, 10)}</AudioName>
            </Column1>
            <Column2>
                <ContainerPlayerOrPause onPress={async () => {
                    const status = await player.sound.getStatusAsync()

                    status.isPlaying ? await player.sound.pauseAsync() : await player.sound.playAsync()

                    setIsPlaying(status.isPlaying ? false : true)
                }}>
                    <IconPlayerOrPause name={isPlaying ? 'pause' : 'play-arrow'} size={40}/>
                </ContainerPlayerOrPause>
            </Column2>
        </Container>
    )
}

export default Menu
import { Iaudio, Iplayer } from '../../../types'
import { FC, useEffect, useState } from 'react'
import { Container, Column1, AudioName, Duration, Column2, ContainerBack, IconBack, ContainerPlayerOrPause, IconPlayerOrPause, ContainerNext, IconNext } from './style'
import limitText from '../../../utils/limitText'
import convertDurationAudio from '../../../utils/convertDurationAudio'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Dimensions } from 'react-native'

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
                <AudioName>{audio && limitText(audio.name, 13)}</AudioName>
                <Duration>{audio && convertDurationAudio(audio.duration)}</Duration>
            </Column1>
            <Column2>
                <ContainerBack>
                    <IconBack name="fast-rewind" size={RFPercentage(5)}/>
                </ContainerBack>
                <ContainerPlayerOrPause onPress={async () => {
                    const status = await player.sound.getStatusAsync()

                    status.isPlaying ? await player.sound.pauseAsync() : await player.sound.playAsync()

                    setIsPlaying(status.isPlaying ? false : true)
                }}>
                    <IconPlayerOrPause name={isPlaying ? 'pause' : 'play-arrow'} size={RFPercentage(5)}/>
                </ContainerPlayerOrPause>
                <ContainerNext>
                    <IconNext name="fast-forward" size={RFPercentage(5)}/>
                </ContainerNext>
            </Column2>
        </Container>
    )
}

export default Menu
import { Iaudio } from '../../../types'
import { Dispatch, SetStateAction, FC, memo } from 'react'
import { Container, Column1, Row1, Name, Row2, Duration, Message, IconMessage, Column2, IconMore } from './style'
import limitText from '../../../utils/limitText'
import { Dimensions } from 'react-native'
import convertDurationAudio from '../../../utils/convertDurationAudio'
import { TouchableOpacity } from 'react-native'

interface Iprops {
    audio: Iaudio
    audioSelect: Iaudio
    setAudioSelect: Dispatch<SetStateAction<Iaudio>>
}

const AudioItem: FC<Iprops> = ({ audio, audioSelect, setAudioSelect }) => {
    return (
        <Container select={audioSelect && audio.name === audioSelect.name} onPress={() => setAudioSelect(audio)}>
            <Column1>
                <Row1>
                    <Name>{limitText(audio.name, Dimensions.get('window').scale*9.5)}</Name>
                </Row1>
                <Row2>
                    <Duration>{convertDurationAudio(audio.duration)}</Duration>
                    {audioSelect && audio.name === audioSelect.name && <>
                        <Message>Reproduzindo</Message>
                        <IconMessage name="play-arrow" size={18}/>
                    </>}
                </Row2>
            </Column1>
            <Column2>
                <TouchableOpacity>
                    <IconMore name="more-vert" size={25}/>
                </TouchableOpacity>
            </Column2>
        </Container>
    )
}

export default memo(AudioItem)
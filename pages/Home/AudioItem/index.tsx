import { Iaudio } from '../../../types'
import { FC, Dispatch, SetStateAction, memo } from 'react'
import { Container, Row1, Name, Row2, Duration, Column2, IconMore } from './style'
import { View, TouchableOpacity } from 'react-native'
import limitText from '../../../utils/limitText'
import convertDurationAudio from '../../../utils/convertDurationAudio'

interface Iprops {
    audio: Iaudio
    setAudioSelect: Dispatch<SetStateAction<Iaudio>>
}

const AudioItem: FC<Iprops> = ({ audio, setAudioSelect }) => {
    return (
        <Container onPress={() => setAudioSelect(audio)}>
            <View>
                <Row1>
                    <Name>{limitText(audio.name, 30)}</Name>
                </Row1>
                <Row2>
                    <Duration>{convertDurationAudio(audio.duration)}</Duration>
                </Row2>
            </View>
            <Column2>
                <TouchableOpacity>
                    <IconMore name="more-vert" size={25}/>
                </TouchableOpacity>
            </Column2>
        </Container>
    )
}

export default memo(AudioItem)
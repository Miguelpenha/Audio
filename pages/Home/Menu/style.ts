import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
    top: 175%;
    z-index: 1;
    width: 90%;
    padding: 3%;
    align-self: center;
    flex-direction: row;
    border-radius: ${RFPercentage(4.5)}px;
    background-color: ${props => props.theme.secondary};
`

export const Column1 = styled.View`
    width: 50%;
`

export const AudioName = styled.Text`
    margin: auto;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.backgroundColor};
`

export const Column2 = styled.View`
    width: 50%;
`

export const ContainerPlayerOrPause = styled.TouchableOpacity`
    margin: auto;
    align-self: center;
`

export const IconPlayerOrPause = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`
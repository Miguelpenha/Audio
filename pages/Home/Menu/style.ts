import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
    top: 172%;
    z-index: 1;
    width: 90%;
    padding: 2%; 
    align-self: center;
    flex-direction: row;
    border-radius: ${RFPercentage(4.5)}px;
    background-color: ${props => props.theme.secondaryColor};
`

export const Column1 = styled.View`
    width: 50%;
    padding-left: 5%;
`

export const AudioName = styled.Text`
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.primary};
`

export const Duration = styled.Text`
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.select};
`

export const Column2 = styled.View`
    width: 45%;
    flex-direction: row;
    margin-left: auto;
`

export const ContainerBack = styled.TouchableOpacity`
    margin: auto;
    align-self: center;
`

export const IconBack = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const ContainerPlayerOrPause = styled.TouchableOpacity`
    margin: auto;
    align-self: center;
`

export const IconPlayerOrPause = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const ContainerNext = styled.TouchableOpacity`
    margin: auto;
    align-self: center;
`

export const IconNext = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`
import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
    width: 92%;
    padding: 3%;
    margin-top: 2%;
    margin-bottom: 2%;
    align-self: center;
    flex-direction: row;
    border-radius: ${RFPercentage(2.5)}px;
    background-color: ${props => props.theme.secondary};
`

export const Row1 = styled.View`
    flex-direction: row;
`

export const Name = styled.Text`
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const Row2 = styled.View`
    margin-top: 1%;
    flex-direction: row;
`

export const Duration = styled.Text`
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.select};
`

export const Column2 = styled.View`
    margin-left: auto;
    justify-content: center;
`

export const IconMore = styled(MaterialIcons)`
    color: ${props => props.theme.select};
`
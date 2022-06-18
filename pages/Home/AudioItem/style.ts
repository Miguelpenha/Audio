import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'

interface IContainer {
    select: boolean
}

export const Container = styled.TouchableOpacity<IContainer>`
    width: 92%;
    padding: 3%;
    margin-top: 2%;
    margin-bottom: 2%;
    align-self: center;
    flex-direction: row;
    border-radius: ${RFPercentage(2.5)}px;
    background-color: ${props => props.select ? props.theme.secondaryColor : props.theme.secondary};
`

export const Column1 = styled.View`
    width: 90%;
`

export const Row1 = styled.View`
    flex-direction: row;
`

export const Name = styled.Text`
    color: ${props => props.theme.primary};
    font-size: ${Dimensions.get('window').fontScale*20}px;
`

export const Row2 = styled.View`
    margin-top: 1%;
    flex-direction: row;
`

export const Duration = styled.Text`
    color: ${props => props.theme.select};
    font-size: ${Dimensions.get('window').fontScale*16}px;
`

export const Message = styled.Text`
    margin-left: 6%;
    color: ${props => props.theme.select};
    font-size: ${Dimensions.get('window').fontScale*16}px;
`

export const IconMessage = styled(MaterialIcons)`
    align-self: center;
    color: ${props => props.theme.select};
`

export const Column2 = styled.View`
    margin-left: auto;
    justify-content: center;
`

export const IconMore = styled(MaterialIcons)`
    color: ${props => props.theme.select};
`
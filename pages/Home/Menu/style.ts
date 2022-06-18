import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'
import { heightPercentageToDP } from 'react-native-responsive-screen'

export const Container = styled.View`
    z-index: 1;
    width: 90%;
    padding: ${heightPercentageToDP('0.3%')}%;
    align-self: center;
    top: ${heightPercentageToDP('76.4%')+((Dimensions.get('window').fontScale*22)*5)}px;
    flex-direction: row;
    border-radius: ${RFPercentage(4.5)}px;
    background-color: ${props => props.theme.secondaryColor};
`

export const Column1 = styled.View`
    width: 50%;
    padding-left: 5%;
`

export const AudioName = styled.Text`
    font-size: ${Dimensions.get('window').fontScale*22}px;
    color: ${props => props.theme.primary};
`

export const Duration = styled.Text`
    font-size: ${Dimensions.get('window').fontScale*18}px;
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
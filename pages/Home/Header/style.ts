import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
    margin-top: 7.5%;
    align-items: center;
    flex-direction: row;
`

export const ContainerSettings = styled.TouchableOpacity`
    margin-right: 2%;
    margin-left: auto;
`

export const Settings = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`
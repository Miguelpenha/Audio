import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
    margin-bottom: 5%;
    align-items: center;
    flex-direction: column;
`

export const ContainerSettings = styled.TouchableOpacity`
    margin-right: 3%;
    margin-left: auto;
`

export const Settings = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`
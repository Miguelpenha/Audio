import styled from 'styled-components/native'

export const List = styled.FlatList`

`

export const ContainerAudio = styled.TouchableOpacity`
    background-color: ${props => props.theme.secondaryColor};
`

export const NameAudio = styled.Text`
    color: ${props => props.theme.primary};
`
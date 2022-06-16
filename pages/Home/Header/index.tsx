import { memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, ContainerSettings, Settings } from './style'

function Header() {
    const navigation = useNavigation()

    return <>
        <Container>
            <ContainerSettings onPress={() => navigation.navigate('Settings')}>
                <Settings name="more-vert" size={40}/>
            </ContainerSettings>
        </Container>
    </>
}

export default memo(Header)
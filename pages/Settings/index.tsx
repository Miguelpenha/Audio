import React, { useState, useEffect, FC, Dispatch, SetStateAction } from 'react'
import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { dark as darkTheme, light as lightTheme } from '../../theme'
import { ScrollView } from 'react-native'
import { ContainerSwitch, TextSwitch, Switch, Button, IconButton, IconUpdateButton, TextButton, Version, ContainerPoweredBy, TextPoweredBy, TextPoweredByName } from './style'
import Constants from 'expo-constants'
import checkUpdate from './checkUpdate'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getThemeFunction } from '../../utils/getTheme'

interface Iprops {
    setTheme: Dispatch<SetStateAction<'light' | 'dark'>>
    theme: 'light' | 'dark'
}

const Settings: FC<Iprops> = ({ setTheme, theme }) => {
    const navigation = useNavigation()
    const [dark, setDark] = useState(theme==='light' ? false : true)
    const [checkUpdating, setCheckUpdating] = useState(false)

    useEffect(() => {
        async function changeTheme() {
            setTheme(dark ? 'dark' : 'light')
            await AsyncStorage.setItem('@exercise-app:theme', dark ? 'dark' : 'light')
        }
        
        changeTheme().then()
    }, [dark])
    
    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title="Configurações"/>
            <ScrollView>
                <ContainerSwitch>
                    <TextSwitch>Tema escuro</TextSwitch>
                    <Switch trackColor={{false: darkTheme.secondary, true: lightTheme.secondary}} thumbColor={dark ? darkTheme.secondary : lightTheme.secondary} value={dark} onChange={() => dark ? setDark(false) : setDark(true)}/>
                </ContainerSwitch>
                <Button onPress={async () => {
                    await AsyncStorage.removeItem('@audio:theme')
                    await getThemeFunction(setTheme)

                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }]
                    })
                }}>
                    <IconButton name="delete" size={30}/>
                    <TextButton>Apagar dados</TextButton>
                </Button>
                <Button disabled={checkUpdating} onPress={async () => checkUpdate(setCheckUpdating)} loading={checkUpdating}>
                    <IconUpdateButton checkUpdating={checkUpdating} name="sync" size={30}/>
                    <TextButton>Verificar atualizações</TextButton>
                </Button>
            </ScrollView>
            <Version>Versão {Constants.manifest.version}</Version>
            <ContainerPoweredBy>
                <TextPoweredBy>Powered by</TextPoweredBy>
                <TextPoweredByName>Miguel da Penha</TextPoweredByName>
            </ContainerPoweredBy>
        </ContainerPd>
    )
}

export default Settings
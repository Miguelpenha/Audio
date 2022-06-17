import * as MediaLibrary from 'expo-media-library'
import { useState, useEffect } from 'react'
import { Iaudio, Iplayer } from '../../types'
import getAudios from './getAudios'
import changeAudios from './changeAudios'
import { FlatList, ListRenderItemInfo } from 'react-native'
import AudioItem from './AudioItem'
import ContainerPd from '../../components/ContainerPd'
import Header from './Header'
import Menu from './Menu'

export default function Home() {
  const [status, requestPermission] = MediaLibrary.usePermissions()
  const [audios, setAudios] = useState<Iaudio[]>([])
  const [audioSelect, setAudioSelect] = useState<Iaudio>()
  const [player, setPlayer] = useState<Iplayer>()

  useEffect(() => {
    async function verificationGetAudios() {
      if (status && status.granted) {
        await requestPermission()
      } else {
        setAudios(await getAudios())
      }
    }

    verificationGetAudios().then()
  }, [])

  useEffect(() => {
    audioSelect && changeAudios(player, audioSelect, setPlayer).then()
  }, [audioSelect])

  function renderItem({ item }: ListRenderItemInfo<Iaudio>) {
    return (
      <AudioItem audio={item} setAudioSelect={setAudioSelect}/>
    )
  }

  function funcPlayer() {
    return player
  }

  return (
    <ContainerPd>
      <Menu audio={audioSelect} player={funcPlayer()}/>
      <FlatList
        data={audios}
        renderItem={renderItem}
        ListHeaderComponent={Header}
        contentContainerStyle={{paddingBottom: '25%'}}
        keyExtractor={(item, index) => String(index)}
      />
    </ContainerPd>
  )
}
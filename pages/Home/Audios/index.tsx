import { Iaudio } from '../../../types'
import { List, ContainerAudio, NameAudio } from './style'
import { ListRenderItemInfo } from 'react-native'
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useState } from 'react'

function Musics() {
    const [status, requestPermission] = MediaLibrary.usePermissions()
    const [audios, setAudios] = useState<Iaudio[]>([])

    function renderItem({ item }: ListRenderItemInfo<Iaudio>) {
        return (
            <ContainerAudio>
                <NameAudio>{item.name}</NameAudio>
            </ContainerAudio>
        )
    }

    async function getAudios() {
        if (status && status.granted) {
            await requestPermission()
        } else {
            let assets = await MediaLibrary.getAssetsAsync({
                mediaType: 'audio'
            })
    
            assets = await MediaLibrary.getAssetsAsync({
                mediaType: 'audio',
                first: assets.totalCount
            })
    
            assets.assets.map(asset => {
                setAudios(audiosMap => [...audiosMap, {
                    name: asset.filename,
                    localization: asset.uri
                }])
            })
        }
    }

    useEffect(() => {
        getAudios().then()
    }, [])

    return (
        <List
            data={audios}
            renderItem={renderItem}
            keyExtractor={(item, index) => String(index)}
        />
    )
}

export default Musics
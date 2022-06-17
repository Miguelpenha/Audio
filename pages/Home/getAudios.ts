import { Iaudio } from '../../types'
import * as MediaLibrary from 'expo-media-library'

async function getAudios(): Promise<Iaudio[]> {
    let assetsTotalCount = (await MediaLibrary.getAssetsAsync({
        mediaType: 'audio'
    })).totalCount

    const assets = (await MediaLibrary.getAssetsAsync({
        mediaType: 'audio',
        first: assetsTotalCount
    })).assets

    const audios: Iaudio[] = []

    assets.map(asset => 
        audios.push({
            name: asset.filename,
            localization: asset.uri,
            duration: asset.duration
        })
    )

    return audios
}

export default getAudios
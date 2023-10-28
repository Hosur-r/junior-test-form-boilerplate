import axios from "axios"

const mainUrl = "https://api.unsplash.com/"

export interface IPhotos {
    color: string,
    created_at: string,
    description?: string,
    urls: {
        small: string
    },
    location: {
        name: string
    },
    id: string,
}

export const getPhotos = async () => {
    return await axios.get<IPhotos[]>(mainUrl + "photos/random?client_id=R3Bto6sGYvhUq5cDoi1_ov_8No3S_6FjR4oSuen_ni4&count=5")
}
import { useEffect, useState } from "react"
import Block from "./components/ImagesBlock"
import { IPhotos, getPhotos } from "./reqs/reqs"
import { FlexPhotos, FormBlockWrap, HrStyle } from "./media/styles"
import FormComponent from "./components/FormComponent"

export default function MainPage() {

    const [photos, setPhotos] = useState<IPhotos[]>()

    useEffect(() => {
        getPhotos()
            .then(res => {
                setPhotos(res.data)
            })
            .catch(err => {
                alert(`Произошла ошибка: ${err.message}`)
            })
    }, [])

    return (
        <FormBlockWrap>

            <FormComponent photos={photos} setPhotos={setPhotos} />

            <HrStyle />

            <FlexPhotos>
                {photos?.map((item, idx) => { return <Block description={item.description} photos={photos} setPhotos={setPhotos} key={idx} id={item.id} color={item.color} created_at={item.created_at} urls={item.urls} location={item.location} /> })}
            </FlexPhotos>

        </FormBlockWrap>
    )
}

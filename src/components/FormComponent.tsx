import { ErrorSpan, FlexRowStrechWrap, FlexRowWrap, FlexWrap, FormButton, FormInput, FormLabel, FormTextBox, PhotoForm } from '../media/styles'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IPhotos } from '../reqs/reqs'
import { useState } from 'react'
import styled from 'styled-components'

type Inputs = {
    titleImg: string
    linkImg: string
    textArea: string
}

interface IProps {
    photos: IPhotos[] | undefined,
    setPhotos: React.Dispatch<React.SetStateAction<IPhotos[] | undefined>>
}

export default function FormComponent({ photos, setPhotos }: IProps) {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const [textAreaCheck, setTextAreaCheck] = useState<boolean>(false)

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const date = new Date().toDateString()
        if (photos) {
            setPhotos([...photos, {
                color: "#d9d9d9",
                created_at: date,
                urls: { small: data.linkImg, },
                location: { name: data.titleImg },
                id: (photos.length + 1).toString(),
                description: data.textArea
            }])
        }
    }

    const FormInputTitle = styled(FormInput)`
        border: ${errors.titleImg ? " 1px solid #BC2F36" : "1px solid black"};

        &::placeholder{
        color:${errors.titleImg ? "#BC2F36" : "gray"};
        }
    `;

    const FormInputImg = styled(FormInput)`
        border: ${errors.linkImg ? " 1px solid #BC2F36" : "1px solid black"};

        &::placeholder{
        color:${errors.linkImg ? "#BC2F36" : "gray"};
        }
    `;

    const FormTextArea = styled.textarea`
        width:570px;
        height:100px;
        resize:none;
        font-size: 1rem;
        border-radius:5px;
        border: ${errors.textArea ? " 1px solid #BC2F36" : "1px solid black"};

        &::placeholder{
        color:${errors.textArea ? "#BC2F36" : "gray"};
        }

        @media (max-width: 768px) {
            width:285px;
        }
    `;

    // Стили выше можно сделать с помощью useContext, передавая через глобал контекст пропсы 

    return (
        <div>
            <PhotoForm onSubmit={handleSubmit(onSubmit)}>

                <FlexRowWrap>
                    <FlexWrap>
                        <FormLabel htmlFor="titleImg">Название фото</FormLabel>
                        <FormInputTitle placeholder="Yosemite National Park" {...register("titleImg", { required: true, maxLength: 30 })} />

                        {errors.titleImg && <ErrorSpan>Обязательноe поле</ErrorSpan>}
                    </FlexWrap>

                    <FlexWrap>
                        <FormLabel htmlFor="titleImg">Ссылка на фото</FormLabel>
                        <FormInputImg placeholder="https://images.unsplash.com/photo-1417325384643" {...register("linkImg", { required: true })} />

                        {errors.linkImg && <ErrorSpan>Обязательноe поле</ErrorSpan>}
                    </FlexWrap>
                </FlexRowWrap>

                <FlexWrap>
                    <FormLabel>Описание</FormLabel>
                    <FlexRowStrechWrap>

                        <label htmlFor="checkBox">Добавить описание?</label>
                        <FormTextBox name="checkBox" type="checkbox" checked={textAreaCheck} onChange={(e) => setTextAreaCheck(e.target.checked)} />
                    </FlexRowStrechWrap>

                    {textAreaCheck ?
                        <FlexWrap>
                            <FormTextArea placeholder="Описание" {...register("textArea", { required: true, maxLength: 30 })}></FormTextArea>
                            {errors.textArea && <ErrorSpan>Обязательноe поле</ErrorSpan>}
                        </FlexWrap>
                        : ""}
                </FlexWrap>

                <FormButton type="submit" value={"Добавить фото"} />
            </PhotoForm>
        </div>
    )
}


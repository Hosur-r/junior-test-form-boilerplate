import { DeleteIcon, Image, InfoWrap, Title, DateP, BlockContainer, DescParagraph } from '../media/styles';
import { IPhotos } from '../reqs/reqs';
import styled from 'styled-components';

interface IProps extends IPhotos {
  photos: IPhotos[] | undefined,
  setPhotos: React.Dispatch<React.SetStateAction<IPhotos[] | undefined>>,
}

export default function Block({ color, created_at, urls, location, id, photos, setPhotos, description }: IProps) {

  const handlerDelete = () => {
    setPhotos(photos?.filter(obj => obj.id !== id))
  }

  const ruDate = (date: string) => {
    return new Date(date).toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  const HrStyle = styled.hr`
          background-color:${color};
          width:100%;
          padding-bottom: 15px;
          border:none;
          border-radius:5px;
    `

  // Стили выше можно сделать с помощью useContext, передавая через глобал контекст пропсы 

  return (
    <BlockContainer>

      <div style={{ width: "100%" }}>
        <InfoWrap>
          <Title>{location.name ? location.name : "Location not specified"}</Title>
          <DeleteIcon onClick={handlerDelete}>&times;</DeleteIcon>
        </InfoWrap>

        <DateP>Дата добавления: {ruDate(created_at)}</DateP>
        <DescParagraph>{description ? description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit."}</DescParagraph>
      </div>

      <div>
        <Image src={urls.small} alt="Image" />

        <HrStyle />
      </div>

    </BlockContainer>
  );
};

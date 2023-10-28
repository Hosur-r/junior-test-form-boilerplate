import styled from "styled-components";


// IMAGE BLOCK STYLE

export const Image = styled.img`
  width: 300px;
  height: 250px;
  object-fit: cover;
  border-radius: 5px;
`;

export const Title = styled.h3`
  font-size: 16px;
  margin: 0;
  max-width:290px;
`;

export const DateP = styled.p`
  font-size: 12px;
  color: #888;
  margin: 0;
  padding-top:5px;
`;

export const DeleteIcon = styled.span`
  font-size: 16px;
  color: red;
  cursor: pointer;
`;

export const InfoWrap = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between ;
  width:100%;
`;

export const BlockContainer = styled.div`
display: flex;
align-items: start;
flex-direction:column;
justify-content:space-between;
gap: 5px;
padding: 10px;
border-radius: 10px;
height:440px;
box-shadow: 0px 0px 100px -12px rgb(0 0 0 / 0.25);
--tw-shadow-color: #111827;
`;

export const DescParagraph = styled.p`
color:#6b839e;
font-size:14px;
display: -webkit-box;
-webkit-line-clamp: 2; /* Установите количество строк, которые хотите отобразить */
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
max-width:255px
`;


// FORM STYLE

export const FormTextBox = styled.input`
appearance: none;
width: 20px;
height: 20px;
border: 2px solid #3770B1;
border-radius: 5px;
background-color: transparent;
display: inline-block;
position: relative;
margin-right: 10px;
cursor: pointer;

&::before{
    content: "";
    background-color: #3770B1;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 10px;
    height: 10px;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
 }

 &:checked::before{
    transform: translate(-50%, -50%) scale(1);
 }
`;

export const FlexRowWrap = styled.div`
display:flex;
gap:5px;

@media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FlexRowStrechWrap = styled.div`
display:flex;
align-items:strech;  
gap:5px;
`;

export const FormBlockWrap = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding-top:20px;
`;

export const HrStyle = styled.hr`
width:70%;
margin-top: 30px;
margin-bottom: 30px;
`

export const FlexPhotos = styled.div`
display:flex;
align-items:center;
flex-wrap:wrap;
justify-content:center;
gap:20px;
max-width:1160px;
`;

export const FormButton = styled.input`
margin-top: 0.5rem;
margin-bottom: 0.5rem;
border-radius:5px;
border:none;
background-color: #0064D7;
padding-left: 0.75rem;
padding-right: 0.75rem;
padding-top: 0.375rem;
padding-bottom: 0.375rem;
font-size: 1rem;
line-height: 1.25rem/* 20px */;
color: rgb(255 255 255 / var(--tw-text-opacity));
cursor: pointer;
transition:all;
transition-duration:150ms;
color:white;
font-weight:bold;

&:hover{
   background-color: #0059be;
}
`;

export const ErrorSpan = styled.span`
color:#BC2F36;
font-size:14px;  
`;

export const PhotoForm = styled.form`
display:flex;
flex-direction:column;
max-width:500px;
gap: 1rem;

`;

export const FlexWrap = styled.div`
display:flex;  
flex-direction:column;
gap: 3px;
align-items:start;
`;

export const FormLabel = styled.label`
color:#3770B1;
font-weight:bolder;
font-size: 1rem;
`;

export const FormInput = styled.input`
border-radius:5px;
padding-top: 0.375rem;
padding-bottom: 0.375rem;
padding-left: 0.5rem;
padding-right: 5rem;
color: rgb(17 24 39 / var(--tw-text-opacity));
--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
--tw-ring-inset: inset;
--tw-ring-opacity: 1;
--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
outline: 2px solid transparent;
outline-offset: 2px;
font-size: 1rem;
`;
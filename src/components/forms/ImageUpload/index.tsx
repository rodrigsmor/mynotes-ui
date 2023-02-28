import { ChangeEventHandler, useState } from 'react';
import { HiOutlinePhoto } from 'react-icons/hi2';
import Note_DefaultIcon from '../../../assets/images/default/Note_DefaultIcon.png';
import Note_DefaultCover from '../../../assets/images/default/Note_DefaultCover.png';
import { ImageUploadContainer, PreviewBackground, UploadInput, UploadInputLabel } from './styled';

type ImageUploadProps = {
  name: string;
  label: string;
  image?: File | undefined;
  type: 'cover' | 'thumbnail' | 'picture';
  setImage: (value: File | undefined) => void;
}

type DefaultImageType = {
  [name in 'cover' | 'thumbnail' | 'picture']: string;
};

export const ImageUpload: React.FC<ImageUploadProps> = ({ label, name, type, image, setImage }) => {
  const [preview, setPreview] = useState<string | undefined>('');
  
  const selectImage: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { files } = event.target

    if(files && files.length > 0) {
      setImage(files[0])
      setPreview(URL.createObjectURL(files[0]))
    }
  }
  
  const defaultImage: DefaultImageType = {
    cover: Note_DefaultCover,
    thumbnail: Note_DefaultIcon,
    picture: Note_DefaultIcon,
  }

  return (
    <ImageUploadContainer className={`upload-image-${name} ${type}`}>
      <UploadInput
        id={name}
        type='file'
        accept="image/*"
        onChange={selectImage}
      />
      <UploadInputLabel htmlFor={name} aria-label={label}>
        <HiOutlinePhoto size={30} /> 
        <span>{label}</span>
      </UploadInputLabel>
      <PreviewBackground
        className='image-upload-preview'
        src={preview || defaultImage[type]}
        alt='preview da imagem selecionada'
      />
    </ImageUploadContainer>
  );
}
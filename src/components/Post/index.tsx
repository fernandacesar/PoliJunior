import * as S from './styles';

export type TestProps = {
    title: string;
    text: string;
    img: string;
    imgLike: string;
};

const Post: React.FC<TestProps> = ({ title, text, img, imgLike }) => {
    return (
        <S.PostContainer>
            <S.PostTitle> {title}</S.PostTitle>
            <S.PostText>{text}</S.PostText>
            <S.PostImage src={img} />
            <S.PostLike src={imgLike} />
        </S.PostContainer>
    );
};

export default Post;

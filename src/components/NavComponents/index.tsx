import * as S from './styles';

export type NavComponentProps = {
    title: string;
    img: string;
};

const NavComponents: React.FC<NavComponentProps> = ({ title, img }) => (
    <S.Container>
        <S.Icon src={img} />
        <S.NomeIcone> {title} </S.NomeIcone>
    </S.Container>
);

export default NavComponents;

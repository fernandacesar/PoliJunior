// import Test from 'components/TestComponent';

import * as S from './styles';

const HomeTemplate = () => {
    return (
        <>
            <S.SideBar>
                <S.UserDiv>
                    <S.FotoPerfil> </S.FotoPerfil>
                    <S.NomesDiv>
                        <S.Nome> Fernanda Cesar </S.Nome>
                        <S.User> @eufercesar </S.User>
                    </S.NomesDiv>
                </S.UserDiv>

                <S.Icone>
                    <S.NomeIcone> Home </S.NomeIcone>
                </S.Icone>
            </S.SideBar>

            <S.TopBarDiv>
                <S.Search> </S.Search>
            </S.TopBarDiv>

            <S.TrendingDiv>
                <S.Box> </S.Box>
            </S.TrendingDiv>
        </>
    );
};
export default HomeTemplate;

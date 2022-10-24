import NavComponents from 'components/NavComponents';
import Post from 'components/Post';

import { useState } from 'react';
import * as S from './styles';

const HomeTemplate = () => {
    const [mensagem, setMensagem] = useState('Nenhum piu até agora...');
    const [valorInputMsg, setValorInputMsg] = useState('');
    function handleClick() {
        setMensagem(valorInputMsg);
    }
    return (
        <>
            <S.MainBody>
                <S.SideBar>
                    <S.UserDiv>
                        <S.FotoPerfil> </S.FotoPerfil>
                        <S.NomesDiv>
                            <S.Nome> Fernanda Cesar </S.Nome>
                            <S.User> @eufercesar </S.User>
                        </S.NomesDiv>
                    </S.UserDiv>
                    <S.NavContainer>
                        <NavComponents
                            title="Home"
                            img="/assets/icons/houseorange.png"
                        >
                            {' '}
                        </NavComponents>
                        <NavComponents
                            title="Mensagem"
                            img="/assets/icons/message.png"
                        >
                            {' '}
                        </NavComponents>
                        <NavComponents
                            title="Amigos"
                            img="/assets/icons/friend.png"
                        >
                            {' '}
                        </NavComponents>
                        <NavComponents
                            title="Group"
                            img="/assets/icons/group.png"
                        >
                            {' '}
                        </NavComponents>
                        <NavComponents
                            title="Coração Partido"
                            img="/assets/icons/brokenheart.png"
                        >
                            {' '}
                        </NavComponents>
                        <NavComponents
                            title="Like"
                            img="/assets/icons/heart.png"
                        >
                            {' '}
                        </NavComponents>
                        <NavComponents
                            title="Trending"
                            img="/assets/icons/trending.png"
                        >
                            {' '}
                        </NavComponents>
                        <NavComponents
                            title="Eventos"
                            img="/assets/icons/calendar.png"
                        >
                            {' '}
                        </NavComponents>
                    </S.NavContainer>
                </S.SideBar>

                <S.TopBarDiv>
                    <S.Search> </S.Search>
                </S.TopBarDiv>

                <S.TrendingDiv>
                    <S.Box> </S.Box>
                    <S.Box> </S.Box>
                    <S.Box> </S.Box>
                    <S.Box> </S.Box>
                    <S.Box> </S.Box>
                    <S.Box> </S.Box>
                </S.TrendingDiv>

                <S.Piu
                    value={valorInputMsg}
                    onChange={(valor) => setValorInputMsg(valor.target.value)}
                />
                <S.SendPiuButton onClick={() => handleClick()}>
                    {' '}
                    PIAR{' '}
                </S.SendPiuButton>

                <S.Recente> Meu ultimo piu foi: {mensagem}</S.Recente>

                <S.PostsContainer>
                    <Post
                        title=" @eufercesar "
                        img="/assets/cazeBday.png"
                        text="Circula em redes sociais uma foto do youtuber Casimiro com dois balões no formato de 22, número de urna de Jair Bolsonaro (PL). É #FAKE."
                        imgLike="/assets/icons/heartorange.png"
                    >
                        {' '}
                    </Post>
                    <Post
                        title=" @eufercesar "
                        img="/assets/cazeBday.png"
                        text="Circula em redes sociais uma foto do youtuber Casimiro com dois balões no formato de 22, número de urna de Jair Bolsonaro (PL). É #FAKE."
                        imgLike="/assets/icons/heartorange.png"
                    >
                        {' '}
                    </Post>
                    <Post
                        title=" @eufercesar "
                        img="/assets/cazeBday.png"
                        text="Circula em redes sociais uma foto do youtuber Casimiro com dois balões no formato de 22, número de urna de Jair Bolsonaro (PL). É #FAKE."
                        imgLike="/assets/icons/heartorange.png"
                    >
                        {' '}
                    </Post>
                </S.PostsContainer>
            </S.MainBody>
        </>
    );
};
export default HomeTemplate;

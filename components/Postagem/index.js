import { PostContainder, Column, SubtitleText, TitleText, ImageAuthor, NomeAuthor, ColumnCenter } from './styles'

const Postagem = ({title, subtitle, nameauthor, imgauthor}) => {

    return (
        <PostContainder>
            <Column>
                <TitleText>{title}</TitleText>
                <SubtitleText>{subtitle}</SubtitleText>
            </Column>
            <ColumnCenter>
                <ImageAuthor src={imgauthor} alt="Foto do perfil do usuário no GitHub" />
                <NomeAuthor>{nameauthor}</NomeAuthor>
            </ColumnCenter>
        </PostContainder>
    )

}

export default Postagem;
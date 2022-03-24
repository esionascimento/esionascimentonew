import * as S from './styles';

function IconLink({ src, text, href }) {
    return (
        <a href={href}>
            <S.SpanImg>
                {src}
            </S.SpanImg>
            {text}
        </a>
    );
}

export default IconLink;

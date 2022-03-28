import {
    PageHeader, Tag, Row, Col, Tooltip,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import DropdownMenu from './dropDownMenu';
import Content from './content';
import ContentInfo from './contentInfo';
import { RootState } from '../../store';
import { decrement, increment } from '../../store/Theme/Theme.store';
import * as S from './styles';

function Bio({ props: { locale } }) {
    const { t } = useTranslation();
    const router = useRouter();
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.stateTheme);

    const handlerTheme = () => {
        if (theme === 'dark') {
            dispatch(increment());
        } else {
            dispatch(decrement());
        }
    };

    const handlerLanguage = () => {
        if (locale === 'pt-BR') {
            router.push('/', '', {
                locale: 'en',
            });
        } else {
            router.push('/', '', {
                locale: 'pt-BR',
            });
        }
    };

    return (
        <Row justify="center">
            <Col
                xs={{ span: 22 }}
                md={{ span: 20 }}
                lg={{ span: 18 }}
            >
                <PageHeader
                    title="Esio Nascimento"
                    /* className="site-page-header" */
                    subTitle={t('home-info:my-bio')}
                    tags={<Tag color="blue">{t('home-info:profession')}</Tag>}
                    extra={[
                        <Tooltip placement="topLeft" title={`${t('label:tooltip.theme')}`}>
                            <S.ButtonPageHeader
                                key="3"
                                onClick={handlerTheme}
                            >
                                {theme === 'light'
                                    ? t('buttons:theme.dark')
                                    : t('buttons:theme.light')}
                            </S.ButtonPageHeader>
                        </Tooltip>,
                        <Tooltip placement="topLeft" title={`${t('label:tooltip.language')}`}>
                            <S.ButtonPageHeader
                                key="2"
                                onClick={handlerLanguage}
                            >
                                {locale === 'pt-BR'
                                    ? t('buttons:language.en')
                                    : t('buttons:language.pt') }
                            </S.ButtonPageHeader>
                        </Tooltip>,
                        <Tooltip placement="topLeft" title={`${t('label:tooltip.curriculum')}`}>
                            <S.ButtonPageHeader key="1" type="primary">
                                <Link href="https://esionascimento.github.io/cv.html">CV</Link>
                            </S.ButtonPageHeader>
                        </Tooltip>,
                        <Tooltip placement="topLeft" title="">
                            <div key="0">
                                <DropdownMenu />
                            </div>
                        </Tooltip>,
                    ]}
                    avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
                >
                    <Content>
                        <ContentInfo />
                    </Content>
                </PageHeader>
            </Col>
        </Row>

    );
}

export default Bio;

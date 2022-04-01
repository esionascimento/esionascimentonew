import {
    PageHeader, Tag, Col, Tooltip,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useEffect } from 'react';
import DropdownMenu from './dropDownMenu';
import Content from './content';
import { RootState } from '../../store';
import { decrement, increment } from '../../store/Theme/Theme.store';
import * as S from './styles';

type Theme = 'light' | 'dark'

function Bio({ props: { locale } }) {
    const { t } = useTranslation();
    const router = useRouter();
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.stateTheme);

    const handlerTheme = (th: string) => {
        if (th === 'dark') {
            dispatch(decrement());
        } else {
            dispatch(increment());
        }
    };

    const stylesheets = {
        light: 'https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.4/antd.min.css',
        dark: 'https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.4/antd.dark.min.css',
    };

    const createStylesheetLink = (): HTMLLinkElement => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.id = 'antd-stylesheet';
        document.head.appendChild(link);
        return link;
    };

    const getStylesheetLink = (): HTMLLinkElement => document.head.querySelector('#antd-stylesheet') || createStylesheetLink();

    const systemTheme = () => (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');

    const getTheme = () => (localStorage.getItem('theme') as Theme) || systemTheme();

    const setTheme = (th: Theme) => {
        localStorage.setItem('theme', th);
        handlerTheme(th);
        getStylesheetLink().href = stylesheets[th];
    };

    const toggleTheme = () => {
        setTheme(getTheme() === 'dark' ? 'light' : 'dark');
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

    useEffect(() => {
        setTheme(getTheme() === 'dark' ? 'dark' : 'light');
    }, []);

    return (
        <S.RowBody justify="center">
            <Col
                xs={{ span: 22 }}
                md={{ span: 20 }}
                lg={{ span: 18 }}
            >
                <PageHeader
                    style={{ color: 'white' }}
                    title="Esio Nascimento"
                    /* className="site-page-header" */
                    subTitle={t('home-info:my-bio')}
                    tags={<Tag color="blue">{t('home-info:profession')}</Tag>}
                    extra={[
                        <Tooltip key="3" placement="topLeft" title={`${t('label:tooltip.theme')}`}>
                            <S.ButtonPageHeader
                                key="3"
                                onClick={toggleTheme}
                            >
                                {theme === 'light'
                                    ? t('buttons:theme.dark')
                                    : t('buttons:theme.light')}
                            </S.ButtonPageHeader>
                        </Tooltip>,
                        <Tooltip key="2" placement="topLeft" title={`${t('label:tooltip.language')}`}>
                            <S.ButtonPageHeader
                                key="2"
                                onClick={handlerLanguage}
                            >
                                {locale === 'pt-BR'
                                    ? t('buttons:language.en')
                                    : t('buttons:language.pt') }
                            </S.ButtonPageHeader>
                        </Tooltip>,
                        <Tooltip
                            key="1"
                            placement="topLeft"
                            title={`${t('label:tooltip.curriculum')}`}
                        >
                            <S.ButtonPageHeader key="1" type="primary">
                                <Link href="https://esionascimento.github.io/cv.html">CV</Link>
                            </S.ButtonPageHeader>
                        </Tooltip>,
                        <Tooltip style={{ color: 'white' }} key="0" placement="topLeft" title="">
                            <div style={{ color: 'white' }} key="0">
                                <DropdownMenu />
                            </div>
                        </Tooltip>,
                    ]}
                    avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
                >
                    <Content />
                </PageHeader>
            </Col>
        </S.RowBody>

    );
}

export default Bio;

/* https://stackblitz.com/edit/antd-dark-mode-toggle-example-xyt28h?file=App.tsx */

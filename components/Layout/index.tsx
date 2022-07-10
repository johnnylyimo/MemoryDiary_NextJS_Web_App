import NextHead from '@components/NextHead';
import { ReactNode } from 'react'

type MetaProps = {
    title:string;
    description:string;
}

type LayoutProps = {
    meta: MetaProps;
    children:ReactNode;
}
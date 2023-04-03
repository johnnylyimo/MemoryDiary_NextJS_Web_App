import Footer from '@components/Footer';
import { NavBar } from '@components/NavBar';
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

export default function Layout({meta, children}:LayoutProps){
    return (
        <>
            <NextHead title={meta.title} description={meta.description} />
            <NavBar />
            {children}
            <Footer />
        </>
    )
}
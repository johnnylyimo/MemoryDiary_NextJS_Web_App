import Head from "next/head";

interface NextHeadProps{
    title:string;
    description:string;
}

export default function NextHead({title, description}:NextHeadProps){
    <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    </Head>

}


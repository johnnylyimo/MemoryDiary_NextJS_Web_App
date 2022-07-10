import Head from "next/head";

type NextHeadProps = {
    title:string;
    description:string;
}

export default function NextHead({title, description}:NextHeadProps){
    return (
        <Head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
            <title>{title}</title>
            <link rel="icon" href="/cartoon.ico" />
        </Head>
    )
}


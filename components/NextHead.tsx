import Head from "next/head";

interface NextHeadProps{
    title:string;
    description:string;
}

export default function NextHead({title, description}:NextHeadProps){
    <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />

    </Head>

}


import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import logo from '../../images/logo.png'
import logo_bleu from '../../images/logo-bleu.png'

export default function (props) {
        const {title, description, keywords} = props;
    return (
        <Helmet>
                <title>{title}</title>

                <link rel="icon" href={logo_bleu} />

            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <link rel="canonical" href="https://orluxe-estate.com/" />
            <link rel="next" href=" https://orluxe-estate.com/" />

            <meta property="og:locale" content="fr_FR" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description}/>
            <meta property="og:url" content="https://orluxe-estate.com/" />
            <meta property="og:site_name" content="ORLUXE Estate" />
            <meta property="article:modified_time" content="2023-10-17T11:08:30+00:00" />
            <meta property="og:image" content={logo} />
            <meta property="og:image:type" content="image/svg+xml" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:domain" content="https://orluxe-estate.com"/>
            <meta name="twitter:image:src" content={logo}/>
        </Helmet>
    )
}
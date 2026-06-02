import { MetadataRoute } from "next";

export default function robots():MetadataRoute.Sitemap{
    const baseURL="https://edwardo-portfolio.netlify.app"
    return[
        {
            url: baseURL,
            lastModified: new Date(),
            changeFrequency:"yearly",
            priority:1
        }
    ]
}

/*
rules:[
    {
        userAgent:"*",//<--- TOUT LES AGENTS
        allow:"/",
        disallow:["/security", "/api/"]
    },
    {
        userAgent:"Googlebot",
        allow:"/",
        disallow:["/security", "/api/"]
    },
]
    
*/
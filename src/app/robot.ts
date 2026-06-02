import { MetadataRoute } from "next";

export default function robots():MetadataRoute.Robots{
    return{
        rules:{
            userAgent:"Googlebot",
            allow:"/",
            // disallow:["/security", "/api/"]
        }
    }
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
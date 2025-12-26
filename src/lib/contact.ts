import { z } from "zod"
export const contactSchema = z.object({
    nom : z.string().min(2, "Votre nom est trop court🙄"),
    mail : z.email({error:"Email invalide"}),
    phone : z.string().optional(),
    objets : z.string().min(5, "Objet non claire 👉 min en 5 mots"),
    message : z.string().min(10, "Le message est trop court"),
})
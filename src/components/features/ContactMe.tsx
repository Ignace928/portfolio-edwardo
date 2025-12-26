"use client"

import { sendMessage } from "@/app/contact/action_contact"
import { useActionState, useState, useEffect } from "react"
import Phone, { Value } from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { BtnEyes } from "../ui/btnMotion"
import ConfettiBoom from "react-confetti-boom"

export const ContactMe = () => {
    const [state, formAction, isPending] = useActionState(sendMessage, null)
    const [phoneValue, setPhoneValue] = useState<Value>()
    const [showConfetti, setShowConfetti] = useState(false)

  // Déclenche le confetti 3 secondes si success
    useEffect(() => {
        if (state?.success) {
            const timerShow = setTimeout(() => setShowConfetti(true), 0) // décale le setState
            const timerHide = setTimeout(() => setShowConfetti(false), 3000)
            return () => {
            clearTimeout(timerShow)
            clearTimeout(timerHide)
            }
        }
        }, [state?.success])

    return (
        <form action={formAction} className="flex flex-col gap-4 relative">
            {/* Nom */}
            <div>
                <label htmlFor="nom">Nom</label>
                <Input id="nom" name="nom" placeholder="Votre nom" />
                {state?.detail?.nom && (
                <p className="text-red-500 text-sm">{state.detail.nom}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <label htmlFor="mail">Email</label>
                <Input id="mail" name="mail" placeholder="Votre adresse" />
                {state?.detail?.mail && (
                <p className="text-red-500 text-sm">{state.detail.mail}</p>
                )}
            </div>

            {/* Téléphone */}
            <div>
                <label htmlFor="phone-input">Téléphone</label>
                <Phone
                id="phone-input"
                international
                defaultCountry="FR"
                value={phoneValue}
                onChange={setPhoneValue}
                className={`border p-2 rounded ${
                    state?.detail?.phone ? "border-red-500" : "border-gray-300"
                }`}
                />
                {state?.detail?.phone && (
                <p className="text-red-500 text-sm mt-1">{state.detail.phone}</p>
                )}
                <input type="hidden" name="phone" value={phoneValue || ""} />
            </div>

            {/* Objet */}
            <div>
                <label htmlFor="objets">Object</label>
                <Input id="objets" name="objets" placeholder="Objet du mail" />
                {state?.detail?.objets && (
                <p className="text-red-500 text-sm">{state.detail.objets}</p>
                )}
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message">Discussion</label>
                <Textarea
                id="message"
                name="message"
                placeholder="Envoyez-moi votre tweet"
                />
                {state?.detail?.message && (
                <p className="text-red-500 text-sm">{state.detail.message}</p>
                )}
            </div>

            {/* Bouton submit */}
            <BtnEyes type="submit" disabled={isPending}>
                Envoyer
            </BtnEyes>

            {/* Confetti */}
            {showConfetti && <ConfettiBoom particleCount={200} spreadDeg={90} />}

            {/* Message succès */}
            {state?.success && (
                <p className="text-green-600 font-medium mt-2">✅ {state.message}</p>
            )}

            {/* Message erreur */}
            {state?.error && !state.detail && (
                <p className="text-red-600 font-medium mt-2">❌ {state.error}</p>
            )}
        </form>
    )
}


import React from 'react';

export const COLORS = {
  emerald: '#065f46',
  gold: '#d4af37',
  sand: '#fef3c7',
};

export const SYSTEM_INSTRUCTIONS = {
  CHAT: `Tu es "AT-TIJANI Help", un assistant spirituel expert de la Tariqa Tidiane. 
  Ta mission est d'aider les fidèles à comprendre la jurisprudence (fiqh) de la voie, 
  les hadiths authentiques et les enseignements des grands maîtres comme Cheikh Ahmad Tijani et Cheikh Ibrahim Niass (Baye Niass).
  Réponds avec une profonde courtoisie, humilité et précision. 
  Cite tes sources quand c'est possible (Le Coran, Jawahir al-Ma'ani, Kashif al-Ilbas, etc.). 
  Si une question dépasse tes connaissances théologiques, encourage l'utilisateur à consulter un Muqaddam ou un savant local qualifié.
  Utilise le français comme langue principale, mais inclus des termes arabes spirituels appropriés avec leur traduction.`,
  
  TRANSLATOR: `Tu es un traducteur et exégète spécialisé dans les textes de la Tariqa Tidiane et les Hadiths. 
  Analyse le texte fourni, traduis-le fidèlement en français et donne une explication (sharh) détaillée basée sur la spiritualité Tidiane. 
  Identifie les concepts clés et leur importance pratique pour le disciple (mouride).`,
  
  WISDOM: `Génère une parole inspirante de Cheikh Ibrahim Niass (Baye Niass). 
  La réponse doit être au format JSON avec les champs: "text" (la citation), "source" (le livre ou le discours d'origine si connu), 
  et "explanation" (une brève explication spirituelle de la portée de cette parole).`,

  BIOGRAPHY: `Tu es un historien et hagiographe expert de la Tariqa Tidiane. 
  Réponds aux questions précises sur la vie (naissance, voyages, épreuves) et l'œuvre (livres, fondation de cités, Fayda) de Cheikh Ahmad Tidiane Chérif et de Cheikh Ibrahim Niass. 
  Sois factuel, respectueux et souligne l'importance historique de leurs actions pour l'Islam.`
};

export const Icons = {
  Chat: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  ),
  Book: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  Star: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.499Z" />
    </svg>
  ),
  History: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  Info: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
  )
};

import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de BizBridge, une plateforme B2B qui connecte les apporteurs d'affaires avec les entreprises.

À propos de BizBridge :
- BizBridge permet aux apporteurs d'affaires de publier des leads (opportunités commerciales)
- Les entreprises peuvent consulter ces leads et envoyer des propositions
- Quand une entreprise est sélectionnée, un contrat est automatiquement généré
- Les apporteurs définissent librement leur commission (pourcentage ou montant fixe)
- La plateforme facilite la communication via une messagerie intégrée

Tarifs :
- GRATUIT pour les apporteurs d'affaires (création de leads illimitée)
- 20$ par an pour les entreprises (accès à tous les leads)

Fonctionnalités :
- Leads qualifiés et vérifiés
- Contrats automatisés avec signature électronique
- Messagerie intégrée
- Système de notation et avis
- Multi-langue (Français, Anglais, Arabe, Espagnol, Chinois)
- Application mobile (PWA)

Tu dois :
- Répondre de manière concise et professionnelle
- Répondre dans la langue de l'utilisateur
- Encourager les visiteurs à s'inscrire sur app.trybizbridge.com
- Être enthousiaste mais pas trop commercial`;

export async function POST(request: NextRequest) {
  try {
    const { message, locale } = await request.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    return NextResponse.json({ 
      reply: data.choices[0].message.content 
    });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue' },
      { status: 500 }
    );
  }
}
'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Mail, Phone, MessageCircle, HelpCircle, Send } from 'lucide-react';

export default function SupportPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '7b43b213-33bb-4b93-8ce6-f79ee54291e8',
          subject: `Support BizBridge: ${formData.subject}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          to: 'contact@trybizbridge.com'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Centre d'Aide & Support
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Notre équipe est là pour vous aider. Trouvez des réponses ou contactez-nous directement.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Mail className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">
                Réponse sous 24h
              </p>
              <a 
                href="mailto:contact@trybizbridge.com"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                contact@trybizbridge.com
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Phone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
              <p className="text-gray-600 mb-4">
                Lun-Ven 9h-18h
              </p>
              <a 
                href="tel:+33123456789"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                +33 1 23 45 67 89
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Chat en direct</h3>
              <p className="text-gray-600 mb-4">
                Disponible 9h-18h
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Démarrer le chat →
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  ✅ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                  ❌ Erreur lors de l'envoi. Veuillez réessayer ou nous contacter par email.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="jean.dupont@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Comment puis-je vous aider ?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Comment créer un compte ?</h3>
                  <p className="text-gray-600">
                    Téléchargez l'application BizBridge depuis l'App Store ou Google Play, puis suivez les étapes d'inscription. 
                    Vous pouvez vous inscrire en tant qu'apporteur d'affaires ou entreprise.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Quels sont les tarifs ?</h3>
                  <p className="text-gray-600">
                    BizBridge propose un abonnement mensuel de 49,99€. Profitez de 7 jours d'essai gratuit pour tester toutes les fonctionnalités.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Comment supprimer mon compte ?</h3>
                  <p className="text-gray-600">
                    Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l'application ou via{' '}
                    <a href="/fr/suppression" className="text-blue-600 hover:text-blue-700 underline">
                      cette page
                    </a>
                    . La suppression est immédiate et définitive.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Comment puis-je modifier mes informations ?</h3>
                  <p className="text-gray-600">
                    Connectez-vous à votre compte et accédez aux paramètres pour modifier vos informations personnelles, 
                    coordonnées bancaires, et préférences de notification.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Mes données sont-elles sécurisées ?</h3>
                  <p className="text-gray-600">
                    Oui, BizBridge utilise un chiffrement de niveau bancaire (AES-256) pour protéger vos données. 
                    Consultez notre{' '}
                    <a href="/fr/confidentialite" className="text-blue-600 hover:text-blue-700 underline">
                      politique de confidentialité
                    </a>
                    {' '}pour plus de détails.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

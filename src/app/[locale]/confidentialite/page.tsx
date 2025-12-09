import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - BizBridge',
  description: 'Politique de confidentialité de la plateforme BizBridge',
};

export default function Confidentialite() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité</h1>
          <p className="text-emerald-100">Dernière mise à jour : Décembre 2024</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">La société JARVIS SAS (ci-après nous, notre ou BizBridge) s engage à protéger la vie privée des utilisateurs de sa plateforme BizBridge. Cette Politique de Confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Responsable du traitement</h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p><strong>JARVIS SAS</strong></p>
              <p>64, avenue Marinville – 94100 Saint-Maur-des-Fossés, France</p>
              <p>RCS : 938 848 546 RCS Créteil</p>
              <p>Email : contact@trybizbridge.com</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Données collectées</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Nous collectons les catégories de données suivantes :</p>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">2.1 Données d identification</h3>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Nom de l entreprise (pour les professionnels)</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">2.2 Données de connexion</h3>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Adresse IP</li>
              <li>Type de navigateur</li>
              <li>Données de connexion (date, heure)</li>
              <li>Identifiants de compte (Google, Apple le cas échéant)</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">2.3 Données professionnelles</h3>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Secteurs d activité</li>
              <li>Régions d intervention</li>
              <li>Informations sur les leads publiés</li>
              <li>Messages échangés sur la plateforme</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">2.4 Données bancaires</h3>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>IBAN (pour les apporteurs d affaires)</li>
              <li>BIC</li>
              <li>Nom du titulaire du compte</li>
            </ul>
            <p className="text-gray-500 text-sm mt-2">Note : Les paiements d abonnement sont gérés par Stripe. Nous ne stockons pas vos numéros de carte bancaire.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalités du traitement</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span><span><strong>Gestion des comptes :</strong> création, authentification et gestion de votre compte utilisateur</span></li>
              <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span><span><strong>Fourniture des services :</strong> mise en relation entre apporteurs d affaires et entreprises</span></li>
              <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span><span><strong>Paiements :</strong> gestion des abonnements et versement des commissions</span></li>
              <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span><span><strong>Communication :</strong> notifications relatives à votre compte</span></li>
              <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1">✓</span><span><strong>Amélioration des services :</strong> analyse statistique</span></li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base légale du traitement</h2>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li><strong>Exécution du contrat :</strong> pour vous fournir nos services</li>
              <li><strong>Consentement :</strong> pour l envoi de communications marketing</li>
              <li><strong>Intérêt légitime :</strong> pour améliorer nos services</li>
              <li><strong>Obligation légale :</strong> pour respecter nos obligations légales</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Destinataires des données</h2>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li><strong>Autres utilisateurs :</strong> dans le cadre de la mise en relation</li>
              <li><strong>Stripe :</strong> pour le traitement des paiements</li>
              <li><strong>Supabase :</strong> hébergement de la base de données</li>
              <li><strong>Vercel :</strong> hébergement de la plateforme</li>
              <li><strong>Autorités :</strong> si requis par la loi</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">Nous ne vendons jamais vos données personnelles à des tiers.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Durée de conservation</h2>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li><strong>Données de compte :</strong> pendant la durée de votre inscription, puis 3 ans après suppression</li>
              <li><strong>Données de transaction :</strong> 10 ans (obligations comptables)</li>
              <li><strong>Messages :</strong> 5 ans après la clôture de la conversation</li>
              <li><strong>Cookies :</strong> 13 mois maximum</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vos droits</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4"><h3 className="font-semibold text-gray-800 mb-2">📋 Droit d accès</h3><p className="text-gray-600 text-sm">Obtenir une copie de vos données personnelles</p></div>
              <div className="bg-gray-50 rounded-xl p-4"><h3 className="font-semibold text-gray-800 mb-2">✏️ Droit de rectification</h3><p className="text-gray-600 text-sm">Corriger vos données inexactes</p></div>
              <div className="bg-gray-50 rounded-xl p-4"><h3 className="font-semibold text-gray-800 mb-2">🗑️ Droit à l effacement</h3><p className="text-gray-600 text-sm">Demander la suppression de vos données</p></div>
              <div className="bg-gray-50 rounded-xl p-4"><h3 className="font-semibold text-gray-800 mb-2">�� Droit à la portabilité</h3><p className="text-gray-600 text-sm">Recevoir vos données dans un format structuré</p></div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-6">Pour exercer ces droits, contactez-nous à : <strong>contact@trybizbridge.com</strong></p>
            <p className="text-gray-600 leading-relaxed mt-2">Vous pouvez également demander la suppression via notre <a href="/suppression" className="text-emerald-600 hover:underline">formulaire dédié</a>.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sécurité des données</h2>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>Chiffrement des données en transit (HTTPS/TLS)</li>
              <li>Chiffrement des données au repos</li>
              <li>Authentification sécurisée</li>
              <li>Accès restreint aux données personnelles</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Réclamations</h2>
            <p className="text-gray-600 leading-relaxed">Si vous estimez que le traitement de vos données ne respecte pas la réglementation, vous pouvez introduire une réclamation auprès de la CNIL :</p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <p><strong>Commission Nationale de l Informatique et des Libertés (CNIL)</strong></p>
              <p>3 Place de Fontenoy, TSA 80715</p>
              <p>75334 PARIS CEDEX 07</p>
              <p>Site : <a href="https://www.cnil.fr" className="text-emerald-600 hover:underline">www.cnil.fr</a></p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>📧 Email : <a href="mailto:contact@trybizbridge.com" className="text-emerald-600 hover:underline">contact@trybizbridge.com</a></li>
              <li>📍 Adresse : JARVIS SAS - 64, avenue Marinville – 94100 Saint-Maur-des-Fossés</li>
            </ul>
          </section>
        </div>
        <div className="mt-8 text-center">
          <a href="/" className="text-emerald-600 hover:underline font-medium">← Retour à l accueil</a>
        </div>
      </main>
    </div>
  );
}

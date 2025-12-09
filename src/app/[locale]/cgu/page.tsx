import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales d Utilisation - BizBridge',
  description: 'CGU de la plateforme BizBridge',
};

export default function CGU() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Conditions Générales d Utilisation</h1>
          <p className="text-emerald-100">Dernière mise à jour : Décembre 2024</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Préambule</h2>
            <p className="text-gray-600 leading-relaxed">Les présentes Conditions Générales d Utilisation (ci-après CGU) régissent l accès et l utilisation de la plateforme BizBridge (ci-après la Plateforme), éditée par la société JARVIS SAS, société par actions simplifiée au capital de 1 000 euros, immatriculée au RCS de Créteil sous le numéro 938 848 546, dont le siège social est situé au 64, avenue Marinville – 94100 Saint-Maur-des-Fossés.</p>
            <p className="text-gray-600 leading-relaxed mt-4">L utilisation de la Plateforme implique l acceptation pleine et entière des présentes CGU.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 1 - Définitions</h2>
            <ul className="space-y-3 text-gray-600">
              <li><strong>Plateforme :</strong> désigne le site web BizBridge accessible à l adresse app.trybizbridge.com et ses applications mobiles.</li>
              <li><strong>Utilisateur :</strong> désigne toute personne qui accède et utilise la Plateforme.</li>
              <li><strong>Apporteur d affaires :</strong> désigne un Utilisateur qui propose des leads commerciaux sur la Plateforme.</li>
              <li><strong>Entreprise :</strong> désigne un Utilisateur professionnel qui recherche des opportunités commerciales sur la Plateforme.</li>
              <li><strong>Lead :</strong> désigne une opportunité commerciale proposée par un Apporteur d affaires.</li>
              <li><strong>Commission :</strong> désigne la rémunération convenue entre l Apporteur d affaires et l Entreprise.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 2 - Objet de la Plateforme</h2>
            <p className="text-gray-600 leading-relaxed">BizBridge est une plateforme B2B de mise en relation entre des Apporteurs d affaires et des Entreprises. Elle permet aux Apporteurs d affaires de proposer des leads commerciaux et aux Entreprises de répondre à ces opportunités.</p>
            <p className="text-gray-600 leading-relaxed mt-4">La Plateforme offre les fonctionnalités suivantes :</p>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>Publication et gestion de leads par les Apporteurs d affaires</li>
              <li>Consultation et réponse aux leads par les Entreprises</li>
              <li>Messagerie intégrée entre Utilisateurs</li>
              <li>Génération automatique de contrats</li>
              <li>Système de notation et d avis</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 3 - Inscription et compte</h2>
            <p className="text-gray-600 leading-relaxed">Pour accéder aux services de la Plateforme, l Utilisateur doit créer un compte en fournissant des informations exactes et à jour. L Utilisateur s engage à :</p>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>Fournir des informations véridiques lors de l inscription</li>
              <li>Maintenir la confidentialité de ses identifiants de connexion</li>
              <li>Informer immédiatement BizBridge de toute utilisation non autorisée de son compte</li>
              <li>Mettre à jour ses informations en cas de changement</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 4 - Abonnements et tarifs</h2>
            <p className="text-gray-600 leading-relaxed">L accès aux fonctionnalités de la Plateforme est soumis à un abonnement annuel :</p>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-emerald-700 mb-2">Apporteurs d affaires</h3>
                <p className="text-3xl font-bold text-emerald-600">10€<span className="text-base font-normal">/an</span></p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-emerald-700 mb-2">Entreprises</h3>
                <p className="text-3xl font-bold text-emerald-600">20$<span className="text-base font-normal">/an</span></p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">Les paiements sont gérés de manière sécurisée par Stripe. Les abonnements sont renouvelés automatiquement sauf annulation préalable.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 5 - Obligations des Utilisateurs</h2>
            <p className="text-gray-600 leading-relaxed">Chaque Utilisateur s engage à :</p>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>Utiliser la Plateforme de manière loyale et conforme à sa destination</li>
              <li>Ne pas publier de contenu illicite, diffamatoire ou contraire aux bonnes moeurs</li>
              <li>Respecter les droits de propriété intellectuelle des tiers</li>
              <li>Ne pas tenter de contourner les mesures de sécurité de la Plateforme</li>
              <li>Honorer les engagements pris envers les autres Utilisateurs</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 6 - Commissions et paiements</h2>
            <p className="text-gray-600 leading-relaxed">Les commissions entre Apporteurs d affaires et Entreprises sont librement négociées entre les parties. BizBridge n intervient pas dans la fixation ni le paiement des commissions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 7 - Responsabilité</h2>
            <p className="text-gray-600 leading-relaxed">BizBridge agit en tant qu intermédiaire technique et ne saurait être tenue responsable des contenus publiés par les Utilisateurs, de la qualité des leads proposés, des transactions effectuées entre Utilisateurs, des dommages indirects résultant de l utilisation de la Plateforme.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 8 - Données personnelles</h2>
            <p className="text-gray-600 leading-relaxed">Le traitement des données personnelles est décrit dans notre <a href="/confidentialite" className="text-emerald-600 hover:underline">Politique de confidentialité</a>.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 9 - Propriété intellectuelle</h2>
            <p className="text-gray-600 leading-relaxed">La Plateforme et l ensemble de ses contenus (textes, images, logos, logiciels, etc.) sont la propriété exclusive de JARVIS SAS et sont protégés par les droits de propriété intellectuelle.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 10 - Résiliation</h2>
            <p className="text-gray-600 leading-relaxed">L Utilisateur peut résilier son compte à tout moment en contactant le support. BizBridge se réserve le droit de suspendre ou supprimer tout compte en cas de violation des présentes CGU.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 11 - Modification des CGU</h2>
            <p className="text-gray-600 leading-relaxed">BizBridge se réserve le droit de modifier les présentes CGU à tout moment. Les Utilisateurs seront informés des modifications par email ou notification sur la Plateforme.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 12 - Droit applicable et litiges</h2>
            <p className="text-gray-600 leading-relaxed">Les présentes CGU sont soumises au droit français. En cas de litige, les parties s engagent à rechercher une solution amiable. À défaut d accord, les tribunaux de Créteil seront seuls compétents.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 13 - Contact</h2>
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

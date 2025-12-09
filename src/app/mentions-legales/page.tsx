import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales - BizBridge',
  description: 'Mentions légales de la plateforme BizBridge',
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Mentions Légales</h1>
          <p className="text-emerald-100">Dernière mise à jour : Décembre 2024</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Éditeur du site</h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p><strong>Raison sociale :</strong> JARVIS SAS</p>
              <p><strong>Forme juridique :</strong> Société par Actions Simplifiée</p>
              <p><strong>Capital social :</strong> 1 000 €</p>
              <p><strong>Siège social :</strong> 64, avenue Marinville – 94100 Saint-Maur-des-Fossés, France</p>
              <p><strong>RCS :</strong> 938 848 546 RCS Créteil</p>
              <p><strong>Présidente :</strong> Asmae HOUAT</p>
              <p><strong>Directeur général :</strong> Shafiya KERDOUCI</p>
              <p><strong>Email :</strong> contact@trybizbridge.com</p>
              <p><strong>Site web :</strong> <a href="https://www.extjarvis.fr" className="text-emerald-600 hover:underline">www.extjarvis.fr</a></p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hébergeur</h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p><strong>Raison sociale :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-emerald-600 hover:underline">vercel.com</a></p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
            <p className="text-gray-600 leading-relaxed">L ensemble du contenu du site BizBridge (textes, images, logos, icônes, sons, logiciels, etc.) est la propriété exclusive de JARVIS SAS ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.</p>
            <p className="text-gray-600 leading-relaxed mt-4">Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de JARVIS SAS.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Données personnelles</h2>
            <p className="text-gray-600 leading-relaxed">Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d un droit d accès, de rectification, de suppression et d opposition aux données personnelles vous concernant.</p>
            <p className="text-gray-600 leading-relaxed mt-4">Pour exercer ces droits ou pour toute question relative à vos données personnelles, vous pouvez nous contacter à l adresse : <strong>contact@trybizbridge.com</strong></p>
            <p className="text-gray-600 leading-relaxed mt-4">Pour plus d informations, consultez notre <a href="/confidentialite" className="text-emerald-600 hover:underline">Politique de confidentialité</a>.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">Le site BizBridge utilise des cookies pour améliorer l expérience utilisateur et analyser le trafic. En continuant à naviguer sur ce site, vous acceptez l utilisation de cookies.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation de responsabilité</h2>
            <p className="text-gray-600 leading-relaxed">JARVIS SAS s efforce de fournir sur le site BizBridge des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Droit applicable</h2>
            <p className="text-gray-600 leading-relaxed">Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>📧 Email : <a href="mailto:contact@trybizbridge.com" className="text-emerald-600 hover:underline">contact@trybizbridge.com</a></li>
              <li>📍 Adresse : 64, avenue Marinville – 94100 Saint-Maur-des-Fossés, France</li>
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

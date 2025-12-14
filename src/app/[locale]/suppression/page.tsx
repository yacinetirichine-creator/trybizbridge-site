import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demande de Suppression - BizBridge',
  description: 'Demandez la suppression de vos données personnelles sur BizBridge',
};

export default function Suppression() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Demande de Suppression de Données</h1>
          <p className="text-emerald-100">Exercez votre droit à l effacement (RGPD)</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Votre droit à l effacement</h2>
            <p className="text-gray-600 leading-relaxed">Conformément au Règlement Général sur la Protection des Données (RGPD), vous avez le droit de demander la suppression de vos données personnelles. Cette page vous permet d exercer ce droit auprès de BizBridge, édité par JARVIS SAS.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce qui sera supprimé</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✓</span><span className="text-gray-600">Votre compte utilisateur et vos identifiants</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✓</span><span className="text-gray-600">Vos informations personnelles (nom, email, téléphone)</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✓</span><span className="text-gray-600">Vos leads publiés et leur historique</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✓</span><span className="text-gray-600">Vos messages et conversations</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✓</span><span className="text-gray-600">Vos informations bancaires (IBAN)</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✓</span><span className="text-gray-600">Vos préférences et paramètres</span></li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Données conservées pour obligations légales</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">⚠</span><span className="text-gray-600"><strong>Factures et transactions :</strong> conservées 10 ans (obligation comptable)</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">⚠</span><span className="text-gray-600"><strong>Contrats signés :</strong> conservés pour la durée légale de prescription</span></li>
              <li className="flex items-start gap-3"><span className="text-amber-500 mt-1">⚠</span><span className="text-gray-600"><strong>Logs de connexion :</strong> conservés 1 an (obligation légale)</span></li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Faire une demande de suppression</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Remplissez le formulaire ci-dessous pour demander la suppression de vos données :</p>
            <div className="bg-emerald-50 rounded-xl p-6">
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                <input type="hidden" name="access_key" value="7b43b213-33bb-4b93-8ce6-f79ee54291e8" />
                <input type="hidden" name="subject" value="Demande de suppression de compte BizBridge" />
                <input type="hidden" name="from_name" value="Suppression de compte" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" placeholder="Jean Dupont" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email du compte *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" placeholder="jean.dupont@example.com" />
                </div>
                
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">Raison (optionnel)</label>
                  <textarea id="reason" name="message" rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500" placeholder="Pourquoi souhaitez-vous supprimer votre compte ?"></textarea>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800"><strong>⚠️ Attention :</strong> Cette action est irréversible. Toutes vos données seront supprimées définitivement sous 30 jours.</p>
                </div>
                
                <button type="submit" className="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                  Demander la suppression de mon compte
                </button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-emerald-200">
                <p className="text-sm text-emerald-700"><strong>Ou envoyez un email à :</strong> <a href="mailto:contact@trybizbridge.com" className="underline">contact@trybizbridge.com</a></p>
                <h4 className="font-medium text-emerald-800 mb-3 mt-4">Informations à inclure dans votre email :</h4>
                <ul className="space-y-2 text-emerald-700">
                  <li>• Votre nom complet</li>
                  <li>• L adresse email associée à votre compte BizBridge</li>
                  <li>• Le type de compte (Apporteur d affaires ou Entreprise)</li>
                  <li>• Le motif de votre demande (optionnel)</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Délais de traitement</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center"><span className="text-emerald-600 text-xl">⏱️</span></div>
                <div><p className="font-semibold text-gray-800">Réponse sous 30 jours maximum</p><p className="text-gray-600 text-sm">Conformément au RGPD</p></div>
              </div>
              <p className="text-gray-600">Nous traiterons votre demande dans un délai maximum de 30 jours à compter de sa réception.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">⚠️ Conséquences de la suppression</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-red-800 leading-relaxed"><strong>Attention :</strong> La suppression de vos données est <strong>irréversible</strong>. Une fois votre compte supprimé :</p>
              <ul className="mt-4 space-y-2 text-red-700">
                <li>• Vous ne pourrez plus accéder à votre compte</li>
                <li>• Vos leads et historique seront définitivement perdus</li>
                <li>• Vos conversations seront supprimées</li>
                <li>• Vous devrez créer un nouveau compte si vous souhaitez réutiliser le service</li>
              </ul>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions ?</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>📧 Email : <a href="mailto:contact@trybizbridge.com" className="text-emerald-600 hover:underline">contact@trybizbridge.com</a></li>
              <li>📍 Adresse : JARVIS SAS - 64, avenue Marinville – 94100 Saint-Maur-des-Fossés</li>
            </ul>
          </section>
          <section className="pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-4">Liens utiles</h3>
            <div className="flex flex-wrap gap-4">
              <a href="/confidentialite" className="text-emerald-600 hover:underline">Politique de confidentialité</a>
              <span className="text-gray-300">|</span>
              <a href="/cgu" className="text-emerald-600 hover:underline">Conditions d utilisation</a>
              <span className="text-gray-300">|</span>
              <a href="/mentions-legales" className="text-emerald-600 hover:underline">Mentions légales</a>
            </div>
          </section>
        </div>
        <div className="mt-8 text-center">
          <a href="/" className="text-emerald-600 hover:underline font-medium">← Retour à l accueil</a>
        </div>
      </main>
    </div>
  );
}

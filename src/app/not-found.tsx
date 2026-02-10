// Force dynamic rendering (no prerendering)
export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-white mt-4">
          Page non trouvée
        </h2>
        <p className="text-gray-400 mt-4 max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <a
          href="/accueil"
          className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
        >
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}

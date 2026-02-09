'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
            Erreur
          </h1>
          <h2 className="text-2xl font-semibold text-white mt-4">
            Une erreur s&apos;est produite
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            Nous nous excusons pour ce désagrément. Veuillez réessayer.
          </p>
          <button
            onClick={() => reset()}
            className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}

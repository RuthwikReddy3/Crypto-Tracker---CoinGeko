import { ErrorBoundary } from "react-error-boundary";

function CustomErrorBoundaryUI({ error, resetErrorBoundary }) {
    return (
        <div role="alert" className="p-6 text-red-900 bg-red-100 border border-red-500 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">Oops! Something went wrong.</h2>
            <p className="mt-2">An unexpected error occurred. Please try again.</p>

            {error?.message && (
                <div className="p-3 mt-4 overflow-auto text-sm text-gray-700 bg-white border border-gray-300 rounded-md max-h-40">
                    <strong>Error Message:</strong> {error.message}
                </div>
            )}

            {error?.stack && (
                <details className="p-3 mt-2 overflow-auto text-sm text-gray-500 bg-white border border-gray-300 rounded-md max-h-40">
                    <summary className="cursor-pointer">View Error Details</summary>
                    <pre className="whitespace-pre-wrap">{error.stack}</pre>
                </details>
            )}

            <button 
                onClick={resetErrorBoundary} 
                className="px-4 py-2 mt-4 text-white transition bg-red-600 rounded-lg hover:bg-red-700"
            >
                Try Again
            </button>
        </div>
    );
}

export default function CustomErrorBoundary({ children }) {
    return (
        <ErrorBoundary 
            FallbackComponent={CustomErrorBoundaryUI}
            onReset={() => window.location.reload()} 
        >
            {children}
        </ErrorBoundary>
    );
}

"use client";

import { useEffect } from 'react';

export default function TawkToChat() {
  useEffect(() => {
    // Substitua YOUR_PROPERTY_ID e YOUR_WIDGET_ID pelos seus IDs do Tawk.to
    // Para obter esses IDs, crie uma conta em https://www.tawk.to/
    // Este é um exemplo de implementação que pode ser ativado quando você tiver os IDs

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/_s/v4/app/654d1e9d07843602b803d39c/1hf0hmvt5'; // ID de exemplo
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Comentado para não carregar sem IDs válidos
    // document.body.appendChild(script);

    return () => {
      // Cleanup
      const tawkScript = document.querySelector('script[src*="tawk.to"]');
      if (tawkScript) {
        document.body.removeChild(tawkScript);
      }
    };
  }, []);

  return null; // Este componente não renderiza nada visível
}

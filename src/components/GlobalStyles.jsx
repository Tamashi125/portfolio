import React from 'react';

const GlobalStyles = () => (
  <style>{`
    /* Webkit browsers (Chrome, Safari, Edge) */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #18181b; /* zinc-950 */
    }
    ::-webkit-scrollbar-thumb {
      background: #3f3f46; /* zinc-700 */
      border-radius: 9999px;
      border: 2px solid #18181b; /* creates padding effect */
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #52525b; /* zinc-600 */
    }

    /* Firefox */
    * {
      scrollbar-width: thin;
      scrollbar-color: #3f3f46 #18181b;
    }

    /* Custom utility class for specific containers if needed */
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
  `}</style>
);

export default GlobalStyles;

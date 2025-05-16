
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add meta tags for SEO
document.title = "A&M Boné & Cia | Bonés Country e Dad Hat | Boa Vista - RR";

const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'A&M Boné & Cia, sua loja online de Bonés originais, de qualidade, conforto e estilo. Bonés Country e Dad Hat. Atacado e varejista mais completa de Boa Vista, Roraima.';
document.head.appendChild(metaDescription);

createRoot(document.getElementById("root")!).render(<App />);

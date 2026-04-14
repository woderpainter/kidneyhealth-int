import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
      id: 8543029461129,
      name: "Kidney Transplant Journey",
      description: "A complete patient guide to transplant surgeons, surgery, and life after transplant.",
      fullDescription: "Ce guide complet est conçu pour éliminer la peur et l'incertitude du parcours de transplantation rénale. Il couvre tout, du diagnostic initial au choix du bon chirurgien, en passant par les détails de l'opération, la gestion des médicaments anti-rejet et le retour à une vie normale et saine. Écrit dans un langage simple et accessible.",
      price: "450 MAD",
      oldPrice: "650 MAD",
      rating: 5.0,
      reviews: 42,
      badge: "Featured",
      image: "https://cdn.shopify.com/s/files/1/0656/4849/2681/files/mockup.png?v=1776001845",
      whatsappMsg: "Bonjour, je souhaite commander le guide 'Kidney Transplant Journey'.",
      customerReviews: [
        { name: "Ahmed R.", date: "Il y a 2 semaines", comment: "Ce guide a sauvé ma famille. Nous étions perdus avant de le lire.", rating: 5 },
        { name: "Sarah B.", date: "Il y a 1 mois", comment: "Très clair et rassurant. Je le recommande à tous les patients.", rating: 5 }
      ]
    },
    {
      id: 8514700378249,
      name: "Living with Kidney Failure",
      description: "The complete guide for patients and families to navigate dialysis and daily life.",
      fullDescription: "Vivre avec une insuffisance rénale peut être accablant. Ce guide pratique aide les patients et leurs familles à comprendre les différentes options de traitement (hémodialyse, dialyse péritonéale, transplantation), à gérer le régime alimentaire et les fluides, et à maintenir une force émotionnelle au quotidien.",
      price: "300 MAD",
      oldPrice: "450 MAD",
      rating: 4.9,
      reviews: 128,
      badge: "Best Seller",
      image: "https://cdn.shopify.com/s/files/1/0656/4849/2681/files/living-with-kidney-failure-complete-guide-for-patients-families-5806444.jpg?v=1774355589",
      whatsappMsg: "Bonjour, je souhaite commander le guide 'Living with Kidney Failure'.",
      customerReviews: [
        { name: "Youssef M.", date: "Il y a 3 jours", comment: "Les conseils sur la dialyse sont excellents. Très pratique.", rating: 5 },
        { name: "Fatima Z.", date: "Il y a 3 semaines", comment: "Un livre indispensable pour comprendre ce qui nous arrive.", rating: 4 }
      ]
    },
    {
      id: 8513107001481,
      name: "Complete Kidney Diet Guide",
      description: "2026 Edition: What to avoid and what to eat safely to protect your kidneys.",
      fullDescription: "La nutrition est la clé de la santé rénale. Ce guide 2026 simplifie les règles complexes en identifiant clairement les aliments à éviter (riches en potassium, phosphore, sodium) et en proposant des alternatives délicieuses et sûres. Comprend des listes de courses et des conseils de préparation.",
      price: "50 MAD",
      oldPrice: "100 MAD",
      rating: 4.8,
      reviews: 256,
      badge: "Essential",
      image: "https://cdn.shopify.com/s/files/1/0656/4849/2681/files/the-complete-kidney-diet-guide-what-to-avoid-what-to-eat-safely-2026-edition-9292441.webp?v=1774355589",
      whatsappMsg: "Bonjour, je souhaite commander le 'Complete Kidney Diet Guide'.",
      customerReviews: [
        { name: "Karim T.", date: "Il y a 1 semaine", comment: "Enfin des listes claires sur ce qu'on peut manger au Maroc.", rating: 5 },
        { name: "Laila S.", date: "Il y a 2 mois", comment: "Très utile pour planifier mes repas sans stress.", rating: 5 }
      ]
    }
  ];

  return NextResponse.json(products);
}

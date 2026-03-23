import { NextResponse } from "next/server";

export async function GET() {
  const reviews = [
        //Movies 
        { "title": "Oppenheimer", "review": "A visually stunning and intellectually gripping film. Nolan delivers brilliance.", "user": "Akshay", "rating": 9.2 },
        { "title": "Barbie", "review": "Fun, colorful and surprisingly deep. A fresh take on identity and society.", "user": "Chetna", "rating": 8.5 },
        { "title": "Joker", "review": "Dark, intense and Joaquin Phoenix is phenomenal.", "user": "Kanishka", "rating": 9 },
        { "title": "Interstellar", "review": "Emotion + science perfectly blended. One of Nolan’s best.", "user": "Rahul", "rating": 9.5 },
        { "title": "Avengers: Endgame", "review": "A satisfying conclusion with epic moments throughout.", "user": "Neha", "rating": 8.8 },
        { "title": "The Batman", "review": "Gritty and atmospheric. A fresh take on the character.", "user": "Arjun", "rating": 8.7 },
        { "title": "Inception", "review": "Mind-bending story with perfect execution.", "user": "Simran", "rating": 9.3 },
        { "title": "Dune", "review": "Visually breathtaking but slow paced storytelling.", "user": "Rohit", "rating": 8.2 },
        { "title": "Fight Club", "review": "A cult classic that challenges perception.", "user": "Aman", "rating": 9.1 },
        { "title": "The Dark Knight", "review": "Heath Ledger’s Joker is unforgettable.", "user": "Priya", "rating": 9.6 },

        //Series 
        { "title": "Stranger Things", "review": "Nostalgia, horror and great characters. Super engaging.", "user": "Akshay", "rating": 8.9 },
        { "title": "Breaking Bad", "review": "Perfect storytelling and character development.", "user": "Rahul", "rating": 9.8 },
        { "title": "Money Heist", "review": "Thrilling with emotional depth.", "user": "Chetna", "rating": 8.7 },
        { "title": "The Witcher", "review": "Great world-building but inconsistent pacing.", "user": "Neha", "rating": 7.8 },
        { "title": "Game of Thrones", "review": "Epic storytelling, though final season disappointed.", "user": "Arjun", "rating": 8.5 },
        { "title": "The Boys", "review": "Dark, bold and brutally honest.", "user": "Aman", "rating": 9 },
        { "title": "Wednesday", "review": "Fun and quirky with a strong lead performance.", "user": "Simran", "rating": 8 },
        { "title": "Loki", "review": "Creative storytelling and great character arc.", "user": "Kanishka", "rating": 8.6 },
        { "title": "Peaky Blinders", "review": "Stylish and intense drama.", "user": "Rohit", "rating": 9.2 },
        { "title": "Dark", "review": "Complex and mind-blowing narrative.", "user": "Priya", "rating": 9.4 },

        //Drama
        { "title": "Queen of Tears", "review": "Emotional and beautifully written love story.", "user": "Chetna", "rating": 9 },
        { "title": "Crash Landing on You", "review": "Romantic, funny and heartwarming.", "user": "Simran", "rating": 9.3 },
        { "title": "Business Proposal", "review": "Light-hearted and super entertaining.", "user": "Neha", "rating": 8.4 },
        { "title": "Goblin", "review": "A magical story with deep emotions.", "user": "Priya", "rating": 9.1 },
        { "title": "Vincenzo", "review": "Dark comedy mixed with crime and drama.", "user": "Aman", "rating": 8.8 },
        { "title": "Descendants of the Sun", "review": "Great chemistry and emotional storytelling.", "user": "Rahul", "rating": 8.9 },
        { "title": "My Demon", "review": "Interesting concept but uneven execution.", "user": "Kanishka", "rating": 7.9 },
        { "title": "When I Fly Towards You", "review": "Pure and wholesome storytelling.", "user": "Arjun", "rating": 8.7 },
        { "title": "The Glory", "review": "Dark and powerful revenge story.", "user": "Rohit", "rating": 9.2 },
        { "title": "It's Okay to Not Be Okay", "review": "Unique and emotionally rich.", "user": "Akshay", "rating": 9 },

        //Anime 
        { "title": "Attack on Titan", "review": "Epic storytelling with shocking twists.", "user": "Akshay", "rating": 9.7 },
        { "title": "Jujutsu Kaisen", "review": "Amazing animation and fight sequences.", "user": "Aman", "rating": 9 },
        { "title": "Demon Slayer", "review": "Beautiful visuals with emotional depth.", "user": "Neha", "rating": 9.2 },
        { "title": "One Piece", "review": "A legendary journey full of adventure.", "user": "Rahul", "rating": 9.5 },
        { "title": "Naruto", "review": "Emotional and inspiring story.", "user": "Arjun", "rating": 9.1 },
        { "title": "Death Note", "review": "Brilliant psychological thriller.", "user": "Priya", "rating": 9.6 },
        { "title": "Spy x Family", "review": "Fun, wholesome and entertaining.", "user": "Simran", "rating": 8.8 },
        { "title": "Chainsaw Man", "review": "Unique and chaotic storytelling.", "user": "Kanishka", "rating": 8.5 },
        { "title": "Tokyo Revengers", "review": "Interesting concept but inconsistent pacing.", "user": "Rohit", "rating": 7.8 },
        { "title": "Horimiya", "review": "Simple and heartwarming romance.", "user": "Chetna", "rating": 8.6 },
  ];

  return NextResponse.json({ reviews });
}
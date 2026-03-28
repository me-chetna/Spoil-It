import { Poll } from "@/types/poll";

export const polls: Poll[] = [
  {
    id: "poll3",
    title: "Best Pakistani Actress (TMDB Rating Based)",
    cost: 10,
    options: [
      { id: "p1", title: "Mahira Khan", image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Mahira_Khan_2024_%281%29.png", tmdbId: 135545 },
      { id: "p2", title: "Sajal Aly", image: "/actors/sajal.jpg", tmdbId: 211528 },
      { id: "p3", title: "Hania Aamir", image: "/actors/hania.jpg", tmdbId: 3011234 },
    ],
  },

  {
    id: "poll4",
    title: "Best Pakistani Actor",
    cost: 10,
    options: [
      { id: "p1", title: "Fawad Khan", image: "/actors/fawad.jpg", tmdbId: 932968 },
      { id: "p2", title: "Wahaj Ali", image: "/actors/wahaj.jpg", tmdbId: 3444572 },
      { id: "p3", title: "Ahad Raza Mir", image: "/actors/ahad.jpg", tmdbId: 2311896 },
    ],
  },

  {
    id: "poll5",
    title: "Best K-Drama",
    cost: 10,
    options: [
      { id: "k1", title: "Crash Landing on You", image: "/kdrama/cloy.jpg", tmdbId: 94796 },
      { id: "k2", title: "Goblin", image: "/kdrama/goblin.jpg", tmdbId: 67915 },
      { id: "k3", title: "Descendants of the Sun", image: "/kdrama/dots.jpg", tmdbId: 67004 },
    ],
  },

  {
    id: "poll6",
    title: "Best Pakistani Drama",
    cost: 10,
    options: [
      { id: "p1", title: "Humsafar", image: "/pakdrama/humsafar.jpg", tmdbId: 63329 },
      { id: "p2", title: "Tere Bin", image: "/pakdrama/terebin.jpg", tmdbId: 217365 },
      { id: "p3", title: "Zindagi Gulzar Hai", image: "/pakdrama/zgh.jpg", tmdbId: 63258 },
    ],
  },

  {
    id: "poll7",
    title: "Best C-Drama",
    cost: 10,
    options: [
      { id: "c1", title: "Hidden Love", image: "/cdrama/hiddenlove.jpg", tmdbId: 229176 },
      { id: "c2", title: "Love O2O", image: "/cdrama/loveo2o.jpg", tmdbId: 66276 },
      { id: "c3", title: "Go Ahead", image: "/cdrama/goahead.jpg", tmdbId: 107548 },
    ],
  },

  {
    id: "poll8",
    title: "Best Netflix Series",
    cost: 10,
    options: [
      { id: "n1", title: "Stranger Things", image: "/series/st.jpg", tmdbId: 66732 },
      { id: "n2", title: "Money Heist", image: "/series/mh.jpg", tmdbId: 71446 },
      { id: "n3", title: "Wednesday", image: "/series/wednesday.jpg", tmdbId: 119051 },
    ],
  },

  {
    id: "poll9",
    title: "Best Bollywood Movie",
    cost: 10,
    options: [
      { id: "b1", title: "3 Idiots", image: "/bollywood/3idiots.jpg", tmdbId: 20453 },
      { id: "b2", title: "Dangal", image: "/bollywood/dangal.jpg", tmdbId: 360814 },
      { id: "b3", title: "Zindagi Na Milegi Dobara", image: "/bollywood/znmd.jpg", tmdbId: 64720 },
    ],
  },

  {
    id: "poll10",
    title: "Best Anime",
    cost: 10,
    options: [
      { id: "a1", title: "Attack on Titan", image: "/anime/aot.jpg", tmdbId: 1429 },
      { id: "a2", title: "Demon Slayer", image: "/anime/demonslayer.jpg", tmdbId: 85937 },
      { id: "a3", title: "Jujutsu Kaisen", image: "/anime/jjk.jpg", tmdbId: 95479 },
    ],
  },

  {
    id: "poll11",
    title: "Best Hollywood Actor",
    cost: 10,
    options: [
      { id: "h1", title: "Leonardo DiCaprio", image: "/actors/leo.jpg", tmdbId: 6193 },
      { id: "h2", title: "Robert Downey Jr.", image: "/actors/rdj.jpg", tmdbId: 3223 },
      { id: "h3", title: "Tom Holland", image: "/actors/tom.jpg", tmdbId: 1136406 },
    ],
  },

  {
    id: "poll12",
    title: "Best Female Singer (Global)",
    cost: 10,
    options: [
      { id: "s1", title: "Taylor Swift", image: "/singers/taylor.jpg", tmdbId: 8167 },
      { id: "s2", title: "Billie Eilish", image: "/singers/billie.jpg", tmdbId: 2350423 },
      { id: "s3", title: "Ariana Grande", image: "/singers/ariana.jpg", tmdbId: 1901983 },
    ],
  },
  {
    id: "poll13",
    title: "Best Hollywood Actress",
    cost: 10,
    options: [
      { id: "ha1", title: "Scarlett Johansson", image: "/actors/scarlett.jpg", tmdbId: 1245 },
      { id: "ha2", title: "Emma Stone", image: "/actors/emma.jpg", tmdbId: 54693 },
      { id: "ha3", title: "Margot Robbie", image: "/actors/margot.jpg", tmdbId: 234352 },
    ],
  },

  {
    id: "poll14",
    title: "Most Popular K-Drama Actor",
    cost: 10,
    options: [
      { id: "k1", title: "Lee Min Ho", image: "/actors/leeminho.jpg", tmdbId: 124559 },
      { id: "k2", title: "Song Kang", image: "/actors/songkang.jpg", tmdbId: 206208 },
      { id: "k3", title: "Ji Chang Wook", image: "/actors/jichang.jpg", tmdbId: 122185 },
    ],
  },

  {
    id: "poll15",
    title: "Best Netflix Original Show",
    cost: 10,
    options: [
      { id: "n1", title: "Dark", image: "/series/dark.jpg", tmdbId: 70523 },
      { id: "n2", title: "The Witcher", image: "/series/witcher.jpg", tmdbId: 71912 },
      { id: "n3", title: "Squid Game", image: "/series/squidgame.jpg", tmdbId: 93405 },
    ],
  },

  {
    id: "poll16",
    title: "Best Anime Character Popularity",
    cost: 10,
    options: [
      { id: "a1", title: "Levi Ackerman", image: "/anime/levi.jpg", tmdbId: 132168 },
      { id: "a2", title: "Gojo Satoru", image: "/anime/gojo.jpg", tmdbId: 241134 },
      { id: "a3", title: "Naruto Uzumaki", image: "/anime/naruto.jpg", tmdbId: 10859 },
    ],
  },

  {
    id: "poll17",
    title: "Best Bollywood Actress",
    cost: 10,
    options: [
      { id: "b1", title: "Deepika Padukone", image: "/actors/deepika.jpg", tmdbId: 35707 },
      { id: "b2", title: "Alia Bhatt", image: "/actors/alia.jpg", tmdbId: 1198880 },
      { id: "b3", title: "Priyanka Chopra", image: "/actors/priyanka.jpg", tmdbId: 4587 },
    ],
  },

  {
    id: "poll18",
    title: "Most Popular Web Series (Global)",
    cost: 10,
    options: [
      { id: "w1", title: "Breaking Bad", image: "/series/bb.jpg", tmdbId: 1396 },
      { id: "w2", title: "Game of Thrones", image: "/series/got.jpg", tmdbId: 1399 },
      { id: "w3", title: "The Boys", image: "/series/theboys.jpg", tmdbId: 76479 },
    ],
  },

  {
    id: "poll19",
    title: "Best Pakistani Drama Actress",
    cost: 10,
    options: [
      { id: "p1", title: "Iqra Aziz", image: "/actors/iqra.jpg", tmdbId: 2401527 },
      { id: "p2", title: "Ayeza Khan", image: "/actors/ayeza.jpg", tmdbId: 2109566 },
      { id: "p3", title: "Yumna Zaidi", image: "/actors/yumna.jpg", tmdbId: 2399444 },
    ],
  },

  {
    id: "poll20",
    title: "Best Marvel Superhero",
    cost: 10,
    options: [
      { id: "m1", title: "Iron Man", image: "/marvel/ironman.jpg", tmdbId: 3223 },
      { id: "m2", title: "Spider-Man", image: "/marvel/spiderman.jpg", tmdbId: 1136406 },
      { id: "m3", title: "Thor", image: "/marvel/thor.jpg", tmdbId: 74568 },
    ],
  },

  {
    id: "poll21",
    title: "Best Korean Actress",
    cost: 10,
    options: [
      { id: "k1", title: "Kim Ji-won", image: "/actors/kimjiwon.jpg", tmdbId: 139900 },
      { id: "k2", title: "IU (Lee Ji-eun)", image: "/actors/iu.jpg", tmdbId: 131901 },
      { id: "k3", title: "Park Shin-hye", image: "/actors/park.jpg", tmdbId: 122129 },
    ],
  },

  {
    id: "poll22",
    title: "Best OTT Thriller Series",
    cost: 10,
    options: [
      { id: "t1", title: "Mindhunter", image: "/series/mindhunter.jpg", tmdbId: 67744 },
      { id: "t2", title: "True Detective", image: "/series/td.jpg", tmdbId: 46648 },
      { id: "t3", title: "Ozark", image: "/series/ozark.jpg", tmdbId: 69740 },
    ],
  },
];
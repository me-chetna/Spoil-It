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
  // 🔥 CONTINUE FROM poll23

  {
    id: "poll23",
    title: "Best Anime Villain",
    cost: 10,
    options: [
      { id: "a1", title: "Light Yagami", image: "/anime/light.jpg", tmdbId: 125 },
      { id: "a2", title: "Madara Uchiha", image: "/anime/madara.jpg", tmdbId: 126 },
      { id: "a3", title: "Hisoka", image: "/anime/hisoka.jpg", tmdbId: 127 },
    ],
  },

  {
    id: "poll24",
    title: "Best Hollywood Movie (All Time)",
    cost: 10,
    options: [
      { id: "h1", title: "Inception", image: "/movies/inception.jpg", tmdbId: 27205 },
      { id: "h2", title: "Interstellar", image: "/movies/interstellar.jpg", tmdbId: 157336 },
      { id: "h3", title: "The Dark Knight", image: "/movies/darkknight.jpg", tmdbId: 155 },
    ],
  },

  {
    id: "poll25",
    title: "Best Netflix Female Lead",
    cost: 10,
    options: [
      { id: "n1", title: "Eleven (Stranger Things)", image: "/series/eleven.jpg", tmdbId: 123 },
      { id: "n2", title: "Wednesday Addams", image: "/series/wednesday.jpg", tmdbId: 124 },
      { id: "n3", title: "Tokyo (Money Heist)", image: "/series/tokyo.jpg", tmdbId: 125 },
    ],
  },

  {
    id: "poll26",
    title: "Best Anime Movie",
    cost: 10,
    options: [
      { id: "a1", title: "Your Name", image: "/anime/yourname.jpg", tmdbId: 372058 },
      { id: "a2", title: "A Silent Voice", image: "/anime/silentvoice.jpg", tmdbId: 378064 },
      { id: "a3", title: "Spirited Away", image: "/anime/spirited.jpg", tmdbId: 129 },
    ],
  },

  {
    id: "poll27",
    title: "Best Web Series Ending",
    cost: 10,
    options: [
      { id: "w1", title: "Breaking Bad", image: "/series/bb.jpg", tmdbId: 1396 },
      { id: "w2", title: "Dark", image: "/series/dark.jpg", tmdbId: 70523 },
      { id: "w3", title: "Mr. Robot", image: "/series/mrrobot.jpg", tmdbId: 62560 },
    ],
  },

  {
    id: "poll28",
    title: "Best MCU Movie",
    cost: 10,
    options: [
      { id: "m1", title: "Avengers: Endgame", image: "/marvel/endgame.jpg", tmdbId: 299534 },
      { id: "m2", title: "Infinity War", image: "/marvel/infinitywar.jpg", tmdbId: 299536 },
      { id: "m3", title: "Civil War", image: "/marvel/civilwar.jpg", tmdbId: 271110 },
    ],
  },

  {
    id: "poll29",
    title: "Best Anime Duo",
    cost: 10,
    options: [
      { id: "a1", title: "Naruto & Sasuke", image: "/anime/ns.jpg", tmdbId: 1 },
      { id: "a2", title: "Gojo & Geto", image: "/anime/gg.jpg", tmdbId: 2 },
      { id: "a3", title: "Eren & Mikasa", image: "/anime/em.jpg", tmdbId: 3 },
    ],
  },

  {
    id: "poll30",
    title: "Best Female Anime Character",
    cost: 10,
    options: [
      { id: "a1", title: "Mikasa Ackerman", image: "/anime/mikasa.jpg", tmdbId: 1 },
      { id: "a2", title: "Zero Two", image: "/anime/zerotwo.jpg", tmdbId: 2 },
      { id: "a3", title: "Nezuko Kamado", image: "/anime/nezuko.jpg", tmdbId: 3 },
    ],
  },

  {
    id: "poll31",
    title: "Best Sci-Fi Series",
    cost: 10,
    options: [
      { id: "s1", title: "Dark", image: "/series/dark.jpg", tmdbId: 70523 },
      { id: "s2", title: "Stranger Things", image: "/series/st.jpg", tmdbId: 66732 },
      { id: "s3", title: "Black Mirror", image: "/series/bm.jpg", tmdbId: 42009 },
    ],
  },

  {
    id: "poll32",
    title: "Best OTT Platform",
    cost: 10,
    options: [
      { id: "o1", title: "Netflix", image: "/ott/netflix.jpg", tmdbId: 1 },
      { id: "o2", title: "Prime Video", image: "/ott/prime.jpg", tmdbId: 2 },
      { id: "o3", title: "Disney+", image: "/ott/disney.jpg", tmdbId: 3 },
    ],
  },

  {
    id: "poll33",
    title: "Best Romantic Anime",
    cost: 10,
    options: [
      { id: "a1", title: "Toradora", image: "/anime/toradora.jpg", tmdbId: 1 },
      { id: "a2", title: "Clannad", image: "/anime/clannad.jpg", tmdbId: 2 },
      { id: "a3", title: "Your Lie in April", image: "/anime/ylia.jpg", tmdbId: 3 },
    ],
  },

  {
    id: "poll34",
    title: "Best Thriller Movie",
    cost: 10,
    options: [
      { id: "t1", title: "Se7en", image: "/movies/seven.jpg", tmdbId: 807 },
      { id: "t2", title: "Gone Girl", image: "/movies/gonegirl.jpg", tmdbId: 210577 },
      { id: "t3", title: "Shutter Island", image: "/movies/shutter.jpg", tmdbId: 11324 },
    ],
  },

  {
    id: "poll35",
    title: "Best Bollywood Actor (Modern)",
    cost: 10,
    options: [
      { id: "b1", title: "Ranbir Kapoor", image: "/actors/ranbir.jpg", tmdbId: 85047 },
      { id: "b2", title: "Ranveer Singh", image: "/actors/ranveer.jpg", tmdbId: 113995 },
      { id: "b3", title: "Vicky Kaushal", image: "/actors/vicky.jpg", tmdbId: 168200 },
    ],
  },

  {
    id: "poll36",
    title: "Best Anime Fight Scene",
    cost: 10,
    options: [
      { id: "a1", title: "Naruto vs Sasuke", image: "/anime/fight1.jpg", tmdbId: 1 },
      { id: "a2", title: "Gojo vs Jogo", image: "/anime/fight2.jpg", tmdbId: 2 },
      { id: "a3", title: "Levi vs Beast Titan", image: "/anime/fight3.jpg", tmdbId: 3 },
    ],
  },

  {
    id: "poll37",
    title: "Best Drama Series (Global)",
    cost: 10,
    options: [
      { id: "d1", title: "Breaking Bad", image: "/series/bb.jpg", tmdbId: 1396 },
      { id: "d2", title: "The Crown", image: "/series/crown.jpg", tmdbId: 65494 },
      { id: "d3", title: "Succession", image: "/series/succession.jpg", tmdbId: 76331 },
    ],
  },

  {
    id: "poll38",
    title: "Best Horror Movie",
    cost: 10,
    options: [
      { id: "h1", title: "The Conjuring", image: "/movies/conjuring.jpg", tmdbId: 138843 },
      { id: "h2", title: "Hereditary", image: "/movies/hereditary.jpg", tmdbId: 493922 },
      { id: "h3", title: "It", image: "/movies/it.jpg", tmdbId: 346364 },
    ],
  },

  {
    id: "poll39",
    title: "Best Anime Opening",
    cost: 10,
    options: [
      { id: "a1", title: "Gurenge (Demon Slayer)", image: "/anime/op1.jpg", tmdbId: 1 },
      { id: "a2", title: "Unravel (Tokyo Ghoul)", image: "/anime/op2.jpg", tmdbId: 2 },
      { id: "a3", title: "Blue Bird (Naruto)", image: "/anime/op3.jpg", tmdbId: 3 },
    ],
  },

  {
    id: "poll40",
    title: "Best Male Anime Character",
    cost: 10,
    options: [
      { id: "a1", title: "Eren Yeager", image: "/anime/eren.jpg", tmdbId: 1 },
      { id: "a2", title: "Gojo Satoru", image: "/anime/gojo.jpg", tmdbId: 2 },
      { id: "a3", title: "Luffy", image: "/anime/luffy.jpg", tmdbId: 3 },
    ],
  },
  {
    id: "poll41",
    title: "Best Anime Studio",
    cost: 10,
    options: [
      { id: "s1", title: "MAPPA", image: "/anime/mappa.jpg", tmdbId: 1 },
      { id: "s2", title: "Ufotable", image: "/anime/ufotable.jpg", tmdbId: 2 },
      { id: "s3", title: "Wit Studio", image: "/anime/wit.jpg", tmdbId: 3 },
    ],
  },
  {
    id: "poll42",
    title: "Best Fantasy Series",
    cost: 10,
    options: [
      { id: "f1", title: "Game of Thrones", image: "/series/got.jpg", tmdbId: 1399 },
      { id: "f2", title: "The Witcher", image: "/series/witcher.jpg", tmdbId: 71912 },
      { id: "f3", title: "House of the Dragon", image: "/series/hod.jpg", tmdbId: 94997 },
    ],
  },

  {
    id: "poll43",
    title: "Best Bollywood Romantic Movie",
    cost: 10,
    options: [
      { id: "b1", title: "Kabir Singh", image: "/bollywood/kabir.jpg", tmdbId: 597 },
      { id: "b2", title: "Yeh Jawaani Hai Deewani", image: "/bollywood/yjhd.jpg", tmdbId: 20453 },
      { id: "b3", title: "Kal Ho Naa Ho", image: "/bollywood/khn.jpg", tmdbId: 425 },
    ],
  },

  {
    id: "poll44",
    title: "Best Netflix Thriller",
    cost: 10,
    options: [
      { id: "n1", title: "Mindhunter", image: "/series/mindhunter.jpg", tmdbId: 67744 },
      { id: "n2", title: "You", image: "/series/you.jpg", tmdbId: 78191 },
      { id: "n3", title: "Narcos", image: "/series/narcos.jpg", tmdbId: 63351 },
    ],
  },

  {
    id: "poll45",
    title: "Best Anime Transformation",
    cost: 10,
    options: [
      { id: "a1", title: "Goku Super Saiyan", image: "/anime/goku.jpg", tmdbId: 1 },
      { id: "a2", title: "Naruto Baryon Mode", image: "/anime/naruto.jpg", tmdbId: 2 },
      { id: "a3", title: "Eren Titan Form", image: "/anime/eren.jpg", tmdbId: 3 },
    ],
  },

  {
    id: "poll46",
    title: "Best Female Lead in Movies",
    cost: 10,
    options: [
      { id: "f1", title: "Wonder Woman", image: "/movies/ww.jpg", tmdbId: 297762 },
      { id: "f2", title: "Captain Marvel", image: "/movies/cm.jpg", tmdbId: 299537 },
      { id: "f3", title: "Black Widow", image: "/movies/bw.jpg", tmdbId: 497698 },
    ],
  },

  {
    id: "poll47",
    title: "Best Crime Series",
    cost: 10,
    options: [
      { id: "c1", title: "Breaking Bad", image: "/series/bb.jpg", tmdbId: 1396 },
      { id: "c2", title: "Peaky Blinders", image: "/series/pb.jpg", tmdbId: 60574 },
      { id: "c3", title: "Narcos", image: "/series/narcos.jpg", tmdbId: 63351 },
    ],
  },

  {
    id: "poll48",
    title: "Best Anime Ending",
    cost: 10,
    options: [
      { id: "a1", title: "Attack on Titan", image: "/anime/aot.jpg", tmdbId: 1429 },
      { id: "a2", title: "Code Geass", image: "/anime/cg.jpg", tmdbId: 1 },
      { id: "a3", title: "Death Note", image: "/anime/dn.jpg", tmdbId: 13916 },
    ],
  },

  {
    id: "poll49",
    title: "Best Comedy Movie",
    cost: 10,
    options: [
      { id: "c1", title: "The Hangover", image: "/movies/hangover.jpg", tmdbId: 18785 },
      { id: "c2", title: "Superbad", image: "/movies/superbad.jpg", tmdbId: 8363 },
      { id: "c3", title: "Deadpool", image: "/movies/deadpool.jpg", tmdbId: 293660 },
    ],
  },

  {
    id: "poll50",
    title: "Best Anime Rivalry",
    cost: 10,
    options: [
      { id: "a1", title: "Naruto vs Sasuke", image: "/anime/ns.jpg", tmdbId: 1 },
      { id: "a2", title: "L vs Light", image: "/anime/lvslight.jpg", tmdbId: 2 },
      { id: "a3", title: "Goku vs Vegeta", image: "/anime/gv.jpg", tmdbId: 3 },
    ],
  },

  {
    id: "poll51",
    title: "Best Sci-Fi Movie",
    cost: 10,
    options: [
      { id: "s1", title: "Interstellar", image: "/movies/interstellar.jpg", tmdbId: 157336 },
      { id: "s2", title: "Inception", image: "/movies/inception.jpg", tmdbId: 27205 },
      { id: "s3", title: "Blade Runner 2049", image: "/movies/br.jpg", tmdbId: 335984 },
    ],
  },

  {
    id: "poll52",
    title: "Best Korean Drama Couple",
    cost: 10,
    options: [
      { id: "k1", title: "Ri Jeong-hyeok & Yoon Se-ri", image: "/kdrama/cloy.jpg", tmdbId: 1 },
      { id: "k2", title: "Goblin & Ji Eun-tak", image: "/kdrama/goblin.jpg", tmdbId: 2 },
      { id: "k3", title: "Lee Su-ho & Lim Ju-kyung", image: "/kdrama/truebeauty.jpg", tmdbId: 3 },
    ],
  },

  {
    id: "poll53",
    title: "Best Anime Power System",
    cost: 10,
    options: [
      { id: "a1", title: "Chakra (Naruto)", image: "/anime/chakra.jpg", tmdbId: 1 },
      { id: "a2", title: "Nen (HxH)", image: "/anime/nen.jpg", tmdbId: 2 },
      { id: "a3", title: "Cursed Energy (JJK)", image: "/anime/ce.jpg", tmdbId: 3 },
    ],
  },

  {
    id: "poll54",
    title: "Best Hollywood Villain",
    cost: 10,
    options: [
      { id: "h1", title: "Joker", image: "/movies/joker.jpg", tmdbId: 475557 },
      { id: "h2", title: "Thanos", image: "/movies/thanos.jpg", tmdbId: 299536 },
      { id: "h3", title: "Darth Vader", image: "/movies/vader.jpg", tmdbId: 4 },
    ],
  },

  {
    id: "poll55",
    title: "Best Anime Arc",
    cost: 10,
    options: [
      { id: "a1", title: "Shibuya Arc (JJK)", image: "/anime/shibuya.jpg", tmdbId: 1 },
      { id: "a2", title: "Marineford (One Piece)", image: "/anime/marineford.jpg", tmdbId: 2 },
      { id: "a3", title: "Pain Arc (Naruto)", image: "/anime/pain.jpg", tmdbId: 3 },
    ],
  },

  {
    id: "poll56",
    title: "Best Bollywood Villain",
    cost: 10,
    options: [
      { id: "b1", title: "Gabbar Singh", image: "/bollywood/gabbar.jpg", tmdbId: 1 },
      { id: "b2", title: "Kancha Cheena", image: "/bollywood/kancha.jpg", tmdbId: 2 },
      { id: "b3", title: "Ra.One", image: "/bollywood/raone.jpg", tmdbId: 3 },
    ],
  },

  {
    id: "poll57",
    title: "Best Anime Friendship",
    cost: 10,
    options: [
      { id: "a1", title: "Naruto & Sakura", image: "/anime/ns2.jpg", tmdbId: 1 },
      { id: "a2", title: "Luffy & Zoro", image: "/anime/lz.jpg", tmdbId: 2 },
      { id: "a3", title: "Gon & Killua", image: "/anime/gk.jpg", tmdbId: 3 },
    ],
  },

  {
    id: "poll58",
    title: "Best OTT Comedy Series",
    cost: 10,
    options: [
      { id: "c1", title: "The Office", image: "/series/office.jpg", tmdbId: 2316 },
      { id: "c2", title: "Brooklyn Nine-Nine", image: "/series/b99.jpg", tmdbId: 48891 },
      { id: "c3", title: "Friends", image: "/series/friends.jpg", tmdbId: 1668 },
    ],
  },

  {
    id: "poll59",
    title: "Best Female Anime Lead",
    cost: 10,
    options: [
      { id: "a1", title: "Mikasa Ackerman", image: "/anime/mikasa.jpg", tmdbId: 1 },
      { id: "a2", title: "Asuna", image: "/anime/asuna.jpg", tmdbId: 2 },
      { id: "a3", title: "Rem", image: "/anime/rem.jpg", tmdbId: 3 },
    ],
  },

  {
    id: "poll60",
    title: "Best Action Movie Franchise",
    cost: 10,
    options: [
      { id: "f1", title: "John Wick", image: "/movies/jw.jpg", tmdbId: 245891 },
      { id: "f2", title: "Mission Impossible", image: "/movies/mi.jpg", tmdbId: 353081 },
      { id: "f3", title: "Fast & Furious", image: "/movies/ff.jpg", tmdbId: 9799 },
    ],
  },
];
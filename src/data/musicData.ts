export interface Track {
  id: string | number;
  title: string;
  genre: string;
  cover: string;
  link: string;
}

export const featuredTracks: Track[] = [
  {
    id: 1,
    title: "Conga Infinito",
    genre: "Brazilian Funk / Phonk",
    cover: "/assets/covers/conga.png",
    link: "https://open.spotify.com/album/164bZGgTQj1cIu2Fzg81Q7",
  },
  {
    id: 2,
    title: "Ievan Polkka Phonk",
    genre: "Phonk / Electronic",
    cover: "/assets/covers/ievan.png",
    link: "https://open.spotify.com/track/0kgX0tPzg8ys06KmSiKEkF",
  },
  {
    id: 3,
    title: "Conga Infinito - Sped Up",
    genre: "Brazilian Funk / Phonk",
    cover: "/assets/covers/conga.png",
    link: "https://open.spotify.com/album/164bZGgTQj1cIu2Fzg81Q7",
  },
];

// Define all 7 tracks first
const t1 = { id: 1, title: "Conga Infinito", genre: "Brazilian Funk / Phonk", cover: "/assets/covers/conga.png", link: "https://open.spotify.com/album/164bZGgTQj1cIu2Fzg81Q7" };
const t2 = { id: 2, title: "Ievan Polkka Phonk", genre: "Phonk / Electronic", cover: "/assets/covers/ievan.png", link: "https://open.spotify.com/track/0kgX0tPzg8ys06KmSiKEkF" };
const t3 = { id: 3, title: "Conga Infinito - Sped Up", genre: "Brazilian Funk / Phonk", cover: "/assets/covers/conga.png", link: "https://open.spotify.com/album/164bZGgTQj1cIu2Fzg81Q7" };
const t4 = { id: 4, title: "Conga Infinito - Gigantamax Slowed", genre: "Phonk / Slowed", cover: "/assets/covers/conga.png", link: "https://open.spotify.com/album/164bZGgTQj1cIu2Fzg81Q7" };
const t5 = { id: 5, title: "Conga Infinito - Ultra Slowed", genre: "Phonk / Atmospheric", cover: "/assets/covers/conga.png", link: "https://open.spotify.com/album/164bZGgTQj1cIu2Fzg81Q7" };
const t6 = { id: 6, title: "Conga Infinito - Super Slowed", genre: "Phonk / Chill", cover: "/assets/covers/conga.png", link: "https://open.spotify.com/album/164bZGgTQj1cIu2Fzg81Q7" };
const t7 = { id: 7, title: "Conga Infinito - Slowed", genre: "Phonk", cover: "/assets/covers/conga.png", link: "https://open.spotify.com/album/164bZGgTQj1cIu2Fzg81Q7" };

// Create an alternating marquee list to spread Ievan throughout
export const marqueeTracks: Track[] = [
  t1, t2, t3, t2, t4, t2, t5, t2, t6, t2, t7, t2
];

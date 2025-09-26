import React from "react";

const zaynAll = [
  // Mind of Mine (2016) — 18
  { artist: "ZAYN", title: "MiNd Of MiNdd (Intro)", album: "Mind of Mine", year: "2016", link: "https://open.spotify.com/search/ZAYN%20MiNd%20Of%20MiNdd%20(Intro)" },
  { artist: "ZAYN", title: "PILLOWTALK", album: "Mind of Mine", year: "2016", link: "https://open.spotify.com/search/ZAYN%20PILLOWTALK" },
  { artist: "ZAYN", title: "iT’s YoU", album: "Mind of Mine", year: "2016", link: "https://open.spotify.com/search/ZAYN%20iT%E2%80%99s%20YoU" },
  { artist: "ZAYN", title: "BeFoUr", album: "Mind of Mine", year: "2016", link: "https://open.spotify.com/search/ZAYN%20BeFoUr" },
  { artist: "ZAYN", title: "sHe", album: "Mind of Mine", year: "2016", link: "https://open.spotify.com/search/ZAYN%20sHe" },
  { artist: "ZAYN", title: "dRuNk", album: "Mind of Mine", year: "2016", link: "https://open.spotify.com/search/ZAYN%20dRuNk" },
  { artist: "ZAYN", title: "INTERMISSION: fLoWer", album: "Mind of Mine", year: "2016", link: "https://open.spotify.com/search/ZAYN%20INTERMISSION:%20fLoWer" },
  { artist: "ZAYN", title: "rEaR vIeW", album: "Mind of Mine", year: "2016", link: "https://open.spotify.com/search/ZAYN%20rEaR%20vIeW" },
  { artist: "ZAYN, Kehlani", title: "wRoNg", album: "Mind of Mine", year: "2016", link: "https://open.spotify.com/search/ZAYN%20Kehlani%20wRoNg" },
  { artist: "ZAYN", title: "fOoL fOr YoU", album: "Mind of Mine", year: "2016", link: "https://open.spotify.com/search/ZAYN%20fOoL%20fOr%20YoU" },
  { artist: "ZAYN", title: "BoRdErSz", album: "Mind of Mine", year: "2016", link: "https://open.spotify.com/search/ZAYN%20BoRdErSz" },
  { artist: "ZAYN", title: "tRuTh", album: "Mind of Mine", year: "2016", link: "https://open.spotify.com/search/ZAYN%20tRuTh" },
  { artist: "ZAYN", title: "lUcOzAdE", album: "Mind of Mine", year: "2016", link: "https://open.spotify.com/search/ZAYN%20lUcOzAdE" },
  { artist: "ZAYN", title: "TiO", album: "Mind of Mine", year: "2016", link: "https://open.spotify.com/search/ZAYN%20TiO" },
  { artist: "ZAYN", title: "BLUE", album: "Mind of Mine (Deluxe)", year: "2016", link: "https://open.spotify.com/search/ZAYN%20BLUE%20Mind%20of%20Mine" },
  { artist: "ZAYN", title: "BRIGHT", album: "Mind of Mine (Deluxe)", year: "2016", link: "https://open.spotify.com/search/ZAYN%20BRIGHT%20Mind%20of%20Mine" },
  { artist: "ZAYN", title: "LIKE I WOULD", album: "Mind of Mine (Deluxe)", year: "2016", link: "https://open.spotify.com/search/ZAYN%20LIKE%20I%20WOULD" },
  { artist: "ZAYN", title: "SHE DON’T LOVE ME", album: "Mind of Mine (Deluxe)", year: "2016", link: "https://open.spotify.com/search/ZAYN%20SHE%20DON%E2%80%99T%20LOVE%20ME" },

  // Icarus Falls (2018) — 27
  { artist: "ZAYN", title: "Let Me", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Let%20Me" },
  { artist: "ZAYN", title: "Natural", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Natural" },
  { artist: "ZAYN", title: "Back To Life", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Back%20To%20Life" },
  { artist: "ZAYN", title: "Common", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Common" },
  { artist: "ZAYN", title: "Imprint", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Imprint" },
  { artist: "ZAYN", title: "Stand Still", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Stand%20Still" },
  { artist: "ZAYN", title: "Tonight", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Tonight%20Icarus%20Falls" },
  { artist: "ZAYN", title: "Flight of the Stars", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Flight%20of%20the%20Stars" },
  { artist: "ZAYN", title: "If I Got You", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20If%20I%20Got%20You" },
  { artist: "ZAYN", title: "Talk To Me", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Talk%20To%20Me%20Icarus%20Falls" },
  { artist: "ZAYN", title: "There You Are", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20There%20You%20Are" },
  { artist: "ZAYN", title: "Icarus Interlude", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Icarus%20Interlude" },
  { artist: "ZAYN", title: "Good Years", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Good%20Years" },
  { artist: "ZAYN", title: "You Wish You Knew", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20You%20Wish%20You%20Knew" },
  { artist: "ZAYN", title: "Sour Diesel", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Sour%20Diesel" },
  { artist: "ZAYN", title: "Satisfaction", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Satisfaction%20Icarus%20Falls" },
  { artist: "ZAYN", title: "Scripted", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Scripted%20Icarus%20Falls" },
  { artist: "ZAYN", title: "Entertainer", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Entertainer" },
  { artist: "ZAYN", title: "All That", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20All%20That%20Icarus%20Falls" },
  { artist: "ZAYN", title: "Good Guy", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Good%20Guy%20Icarus%20Falls" },
  { artist: "ZAYN", title: "Fresh Air", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Fresh%20Air%20Icarus%20Falls" },
  { artist: "ZAYN", title: "Rainberry", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Rainberry" },
  { artist: "ZAYN, Nicki Minaj", title: "No Candle No Light", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Nicki%20Minaj%20No%20Candle%20No%20Light" },
  { artist: "ZAYN", title: "Fingers", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Fingers" },
  { artist: "ZAYN, Timbaland", title: "Too Much", album: "Icarus Falls", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Timbaland%20Too%20Much" },
  { artist: "ZAYN, Sia", title: "Dusk Till Dawn", album: "Icarus Falls", year: "2017", link: "https://open.spotify.com/search/ZAYN%20Sia%20Dusk%20Till%20Dawn" },

  // Nobody Is Listening (2021) — 11
  { artist: "ZAYN", title: "Calamity", album: "Nobody Is Listening", year: "2021", link: "https://open.spotify.com/search/ZAYN%20Calamity" },
  { artist: "ZAYN", title: "Better", album: "Nobody Is Listening", year: "2020", link: "https://open.spotify.com/search/ZAYN%20Better" },
  { artist: "ZAYN", title: "Outside", album: "Nobody Is Listening", year: "2021", link: "https://open.spotify.com/search/ZAYN%20Outside%20Nobody%20Is%20Listening" },
  { artist: "ZAYN", title: "Vibez", album: "Nobody Is Listening", year: "2021", link: "https://open.spotify.com/search/ZAYN%20Vibez" },
  { artist: "ZAYN, Syd", title: "When Love’s Around", album: "Nobody Is Listening", year: "2021", link: "https://open.spotify.com/search/ZAYN%20Syd%20When%20Love%E2%80%99s%20Around" },
  { artist: "ZAYN", title: "Connexion", album: "Nobody Is Listening", year: "2021", link: "https://open.spotify.com/search/ZAYN%20Connexion" },
  { artist: "ZAYN", title: "Sweat", album: "Nobody Is Listening", year: "2021", link: "https://open.spotify.com/search/ZAYN%20Sweat%20Nobody%20Is%20Listening" },
  { artist: "ZAYN", title: "Unfuckwitable", album: "Nobody Is Listening", year: "2021", link: "https://open.spotify.com/search/ZAYN%20Unfuckwitable" },
  { artist: "ZAYN, Devlin", title: "Windowsill", album: "Nobody Is Listening", year: "2021", link: "https://open.spotify.com/search/ZAYN%20Devlin%20Windowsill" },
  { artist: "ZAYN", title: "Tightrope", album: "Nobody Is Listening", year: "2021", link: "https://open.spotify.com/search/ZAYN%20Tightrope%20Nobody%20Is%20Listening" },
  { artist: "ZAYN", title: "River Road", album: "Nobody Is Listening", year: "2021", link: "https://open.spotify.com/search/ZAYN%20River%20Road" },

  // Standalone Singles & Collabs — enough to reach 65+
  { artist: "ZAYN, PARTYNEXTDOOR", title: "Still Got Time", album: "Single", year: "2017", link: "https://open.spotify.com/search/ZAYN%20PARTYNEXTDOOR%20Still%20Got%20Time" },
  { artist: "ZAYN, Taylor Swift", title: "I Don’t Wanna Live Forever", album: "Single", year: "2016", link: "https://open.spotify.com/search/ZAYN%20Taylor%20Swift%20I%20Don%E2%80%99t%20Wanna%20Live%20Forever" },
  { artist: "ZAYN, Zhavia Ward", title: "A Whole New World", album: "Single", year: "2019", link: "https://open.spotify.com/search/ZAYN%20Zhavia%20Ward%20A%20Whole%20New%20World" },
  { artist: "SHAED, ZAYN", title: "Trampoline (Remix)", album: "Single", year: "2019", link: "https://open.spotify.com/search/SHAED%20ZAYN%20Trampoline%20Remix" },
  { artist: "R3HAB, ZAYN, Jungleboi", title: "Flames", album: "Single", year: "2019", link: "https://open.spotify.com/search/R3HAB%20ZAYN%20Jungleboi%20Flames" },
  { artist: "ZAYN, Sabrina Claudio", title: "Rumors", album: "Single", year: "2018", link: "https://open.spotify.com/search/ZAYN%20Sabrina%20Claudio%20Rumors" },

  // 2023–2024 singles
  { artist: "ZAYN", title: "Love Like This", album: "Single", year: "2023", link: "https://open.spotify.com/search/ZAYN%20Love%20Like%20This" },
  { artist: "ZAYN", title: "What I Am", album: "Room Under the Stairs", year: "2024", link: "https://open.spotify.com/search/ZAYN%20What%20I%20Am" },
  { artist: "ZAYN", title: "Alienated", album: "Room Under the Stairs", year: "2024", link: "https://open.spotify.com/search/ZAYN%20Alienated" },
  { artist: "ZAYN", title: "Stardust", album: "Room Under the Stairs", year: "2024", link: "https://open.spotify.com/search/ZAYN%20Stardust%20ZAYN" },
  { artist: "ZAYN", title: "Grateful", album: "Room Under the Stairs", year: "2024", link: "https://open.spotify.com/search/ZAYN%20Grateful%20ZAYN" }
];

function DiscographyList({ items }) {
  return (
    <ul className="w-full divide-y divide-zinc-800/50 ">
      {items.map((item, idx) => (
        <li key={idx} className="w-full py-2">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="grid sm:grid-cols-4 grid-cols-2  gap-4 w-full text-gray-400 hover:underline"
          >
            <span className="truncate">{item.artist}</span>
            <span className="truncate">{item.title}</span>
            <span className="truncate noshow">{item.album}</span>
            <span className="truncate noshow">{item.year}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function ZaynDiscography() {
  return (
    <div className="w-full mx-auto p-6 text-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-6 text-start">Discography</h1>
      <DiscographyList items={zaynAll} />
    </div>
  );
}
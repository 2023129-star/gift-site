import { useState, useRef, useEffect } from "react";

import photo_baby from "@assets/IMG_20260516_153315_171_1778917565212.jpg";
import photo_night_city from "@assets/IMG_20260516_141134_943_1778917572312.jpg";
import photo_sunset_car from "@assets/IMG_20260516_141135_224_1778917579597.jpg";
import photo_beach from "@assets/IMG_20260516_141134_926_1778917586106.jpg";
import photo_car_wind from "@assets/2Qe7lCIuxrb95mZVDywdaRNArqcaBk7u4gcFenjvYBtissrDAGjgQjetJ23O5p_1778917613082.jpg";
import photo_mountains_car from "@assets/IMG_20260516_154832_044_1778917626518.jpg";
import photo_horse from "@assets/IMG_20260516_154831_460_1778917633946.jpg";
import photo_cafe from "@assets/P_HGSMSfEN0hyoakRRwp-RW9cFTtzVYsOub61C8t8W-8ww4Uv-hSfWSt4tYnfy_1778917645952.jpg";
import photo_basketball from "@assets/7OpNE_CzanmGM1E9D0wEX--FZwIrQPOi57O4kCKuSZI6KKJlQLYaLjVFi-ZzG0_1778917682277.jpg";
import photo_korean_food from "@assets/jCgQu8o4mscSzuvFHRtdXjozXXRY_m8HppSawpSAuxjDugc4P-KOzZpRgpjDvS_1778917710384.jpg";
import photo_camping from "@assets/AyqAGVGNgElHsWuJtsMhtE4dMH50yMnDiMzOP6cvV58BizqwkDlB4g7dkIFfuz_1778917719660.jpg";
import photo_night_group from "@assets/IMG_20260516_154831_274_1778917731164.jpg";
import photo_night_selfie from "@assets/IMG_20260516_155656_098_1778917741403.jpg";
import photo_cafe_night from "@assets/IMG_20260516_155656_084_1778917754241.jpg";
import photo_dinner from "@assets/IMG_20260516_155736_871_1778917761646.jpg";
import photo_winter from "@assets/IMG_20260516_155737_481_1778917767320.jpg";

import music_demchik from "@assets/DEMChIK_-_Ынакшылым_оду_ошпес_(1)_1778917549594.mp3";
import music_chassy from "@assets/Ай-Кыс_Кыргыс_-_Чассынамга_(cover)_1778919276111.mp3";
import music_bellyache from "@assets/bellyache_-_Billie_Eilish_1778919285658.mp3";

const songs = [
  { title: "Ынакшылым оду ошпес", artist: "DEMChIK", src: music_demchik },
  { title: "Чассынамга (cover)", artist: "Ай-Кыс Кыргыс", src: music_chassy },
  { title: "Bellyache", artist: "Billie Eilish", src: music_bellyache },
];

const people = [
  {
    name: "От Айданы",
    letter: "Ваше письмо здесь ❣️",
    photos: [photo_cafe, photo_basketball, photo_night_group],
  },
  {
    name: "От Аяны",
    letter: "Ваше письмо здесь ❣️",
    photos: [photo_camping, photo_horse, photo_cafe_night],
  },
  {
    name: "От Аюши",
    letter: "Ваше письмо здесь ❣️",
    photos: [photo_dinner, photo_korean_food, photo_night_selfie],
  },
  {
    name: "От Ай-Чырыы",
    letter: "Ваше письмо здесь ❣️",
    photos: [photo_winter, photo_mountains_car, photo_car_wind],
  },
];

const loveList = [
  "Твой смех",
  "Твои голосовые",
  "Как ты поддерживаешь людей",
  "Твои случайные шутки",
  "Как с тобой спокойно",
  "Твои истории",
  "Твоя доброта",
  "Твои фотографии",
  "Твоё чувство юмора",
  "То, как ты делаешь жизнь теплее",
];

const allPhotos = [
  photo_car_wind, photo_mountains_car, photo_horse, photo_cafe,
  photo_basketball, photo_korean_food, photo_camping, photo_night_group,
  photo_night_selfie, photo_cafe_night, photo_dinner, photo_winter,
];

function MusicPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = songs[currentIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const update = () => setProgress((audio.currentTime / audio.duration) * 100 || 0);
    audio.addEventListener("timeupdate", update);
    audio.addEventListener("ended", handleNext);
    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("ended", handleNext);
    };
  }, [currentIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = currentSong.src;
    if (isPlaying) audio.play().catch(() => {});
  }, [currentIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    setCurrentIndex((i) => (i + 1) % songs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((i) => (i - 1 + songs.length) % songs.length);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
  };

  const selectSong = (i: number) => {
    setCurrentIndex(i);
    setIsPlaying(true);
    setTimeout(() => audioRef.current?.play().catch(() => {}), 50);
  };

  return (
    <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl border border-white/40">
      <audio ref={audioRef} />

      <h2 className="text-4xl mb-3 text-center font-light">music while scrolling</h2>
      <p className="text-center mb-8 opacity-60 text-sm tracking-wide">Включай музыку и листай дальше ❣️</p>

      <div className="bg-[#fdf9f7] rounded-3xl p-8 border border-[#e8d9d4]">
        <div className="text-center mb-6">
          <p className="text-lg font-light">{currentSong.title}</p>
          <p className="text-sm opacity-50 mt-1">{currentSong.artist}</p>
        </div>

        <div
          className="w-full h-1.5 bg-[#e8d9d4] rounded-full mb-6 cursor-pointer relative"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-[#b5907a] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-center gap-8 items-center">
          <button
            onClick={handlePrev}
            className="text-2xl opacity-50 hover:opacity-80 transition"
          >
            ◂◂
          </button>
          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-[#b5907a] text-white flex items-center justify-center text-xl hover:bg-[#a07868] transition shadow-lg"
          >
            {isPlaying ? "▮▮" : "▶"}
          </button>
          <button
            onClick={handleNext}
            className="text-2xl opacity-50 hover:opacity-80 transition"
          >
            ▸▸
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        {songs.map((song, i) => (
          <div
            key={i}
            onClick={() => selectSong(i)}
            className={`flex items-center justify-between rounded-2xl px-5 py-3 cursor-pointer transition duration-300 ${
              i === currentIndex
                ? "bg-[#b5907a]/20 border border-[#b5907a]/40"
                : "hover:bg-white/50"
            }`}
          >
            <div>
              <p className="text-sm opacity-40 mb-0.5">{String(i + 1).padStart(2, "0")}</p>
              <p className="text-base">{song.title} — {song.artist}</p>
            </div>
            <div className="text-xl opacity-40">
              {i === currentIndex && isPlaying ? "♪" : "♫"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScrollFade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function GiftWebsite() {
  return (
    <div className="min-h-screen overflow-x-hidden font-serif relative" style={{ background: "#f7f1ee", color: "#5f4b4b" }}>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #f9ede8 0%, #f0e4dc 50%, #ecddd4 100%)" }} />
        <div className="relative z-10 max-w-3xl">
          <ScrollFade>
            <p className="tracking-[0.4em] uppercase text-sm mb-6 opacity-60">for you ❣️</p>
            <h1 className="text-5xl md:text-7xl leading-tight font-light mb-8" style={{ color: "#5f4b4b" }}>
              A little place
              <br />
              made from love
            </h1>
            <p className="text-lg md:text-xl leading-8 opacity-75 max-w-2xl mx-auto">
              Здесь собраны воспоминания, музыка, фотографии и слова,
              которые мы хотели оставить для тебя.
            </p>
            <div className="mt-12 animate-bounce text-2xl opacity-50">↓</div>
          </ScrollFade>
        </div>
      </section>

      {/* MUSIC PLAYER */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        <ScrollFade>
          <MusicPlayer />
        </ScrollFade>
      </section>

      {/* BIRTHDAY INTRO */}
      <section className="py-36 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <ScrollFade>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full" style={{ background: "rgba(255,255,255,0.3)", filter: "blur(30px)" }} />
              <div className="relative bg-white/90 p-4 rounded-[35px] shadow-2xl backdrop-blur-md" style={{ transform: "rotate(-4deg)" }}>
                <img src={photo_baby} className="w-[280px] h-[380px] object-cover rounded-[25px]" alt="little saglash" />
                <p className="text-center mt-4 text-sm tracking-[0.3em] uppercase opacity-40">little saglash ❣️</p>
              </div>
            </div>
          </ScrollFade>

          <ScrollFade className="max-w-2xl text-center md:text-left">
            <p className="tracking-[0.4em] uppercase text-sm opacity-50 mb-6">happy birthday</p>
            <h1 className="text-6xl md:text-8xl leading-none font-light mb-10">
              Saglash's
              <br />
              <span style={{ color: "#b5907a" }}>22nd</span>
              <br />
              birthday
            </h1>
            <p className="text-xl leading-10 opacity-75 font-light">
              22 — возраст красивых воспоминаний,
              ночных разговоров,
              спонтанных моментов,
              любимых людей
              и истории ❣️
            </p>
            <div className="mt-10 text-lg opacity-50 italic">16.05.2026 ✨</div>
          </ScrollFade>
        </div>
      </section>

      {/* ASSOCIATIONS */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollFade className="text-center mb-24">
            <p className="tracking-[0.4em] uppercase text-sm opacity-50 mb-6">associations</p>
            <h2 className="text-5xl md:text-7xl font-light leading-tight">
              things that
              <br />
              feel like you ❣️
            </h2>
          </ScrollFade>

          <div className="space-y-32">
            {[
              {
                num: "01",
                title: "ночной город",
                text: "потому что рядом с тобой даже обычные вечера ощущаются как сцены из фильма ❣️",
                photo: photo_night_city,
                rotate: "-4deg",
                flip: false,
              },
              {
                num: "02",
                title: "закаты",
                text: "потому что в тебе есть что-то очень тёплое, спокойное и красивое ❣️",
                photo: photo_sunset_car,
                rotate: "4deg",
                flip: true,
              },
              {
                num: "03",
                title: "море",
                text: "потому что с тобой одновременно спокойно и очень живо ❣️",
                photo: photo_beach,
                rotate: "-3deg",
                flip: false,
              },
            ].map((item) => (
              <ScrollFade key={item.num}>
                <div className={`grid md:grid-cols-2 gap-14 items-center`}>
                  <div className={item.flip ? "order-2 md:order-1" : ""}>
                    <p className="tracking-[0.3em] uppercase text-sm opacity-50 mb-5">{item.num}</p>
                    <h3 className="text-5xl font-light mb-8">{item.title}</h3>
                    <p className="text-lg leading-10 opacity-75 font-light">{item.text}</p>
                  </div>
                  <div className={`relative ${item.flip ? "order-1 md:order-2" : ""}`}>
                    <div className="absolute -inset-6 rounded-full" style={{ background: "rgba(255,255,255,0.1)", filter: "blur(40px)" }} />
                    <div
                      className="relative bg-white/70 backdrop-blur-md p-4 rounded-[35px] shadow-2xl"
                      style={{ transform: `rotate(${item.rotate})` }}
                    >
                      <img src={item.photo} className="w-full h-[450px] object-cover rounded-[25px]" alt={item.title} />
                    </div>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO ARCHIVE */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollFade>
            <div className="bg-white/40 backdrop-blur-xl rounded-[50px] p-12 md:p-16 shadow-2xl border border-white/30 text-center relative overflow-hidden">
              <p className="tracking-[0.35em] uppercase text-sm opacity-50 mb-5">hidden memories</p>
              <h2 className="text-5xl md:text-6xl font-light mb-16 leading-tight">
                photo archive ❣️
              </h2>

              <div className="columns-2 md:columns-4 gap-4 space-y-4">
                {allPhotos.map((photo, i) => (
                  <img
                    key={i}
                    src={photo}
                    className="rounded-[20px] shadow-xl hover:scale-[1.03] transition duration-500 w-full break-inside-avoid"
                    alt={`memory ${i + 1}`}
                  />
                ))}
              </div>

              <p className="mt-14 text-sm opacity-40 tracking-wide">
                a collection of moments we never want to forget ❣️
              </p>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* 10 THINGS */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollFade className="text-center mb-20">
            <p className="tracking-[0.3em] uppercase text-sm opacity-50 mb-5">little things</p>
            <h2 className="text-5xl md:text-6xl font-light leading-tight">
              10 things
              <br />
              we love about you ❣️
            </h2>
          </ScrollFade>

          <div className="grid md:grid-cols-2 gap-6">
            {loveList.map((item, index) => (
              <ScrollFade key={index}>
                <div className="bg-white/60 backdrop-blur-md rounded-[30px] p-8 shadow-lg border border-white/40 flex gap-6 items-center hover:scale-[1.02] transition duration-500">
                  <div className="text-4xl opacity-30 font-light min-w-[50px]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-xl">{item}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* LETTERS */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollFade className="text-center mb-24">
            <p className="tracking-[0.3em] uppercase text-sm opacity-60 mb-5">the most important part</p>
            <h2 className="text-5xl md:text-6xl font-light leading-tight">
              letters for you ❣️
            </h2>
          </ScrollFade>

          <div className="space-y-40">
            {people.map((person, index) => (
              <ScrollFade key={index}>
                <div>
                  {/* Scattered photos */}
                  <div className="relative h-[420px] mb-16 hidden md:block">
                    <div
                      className="absolute top-0 left-[5%] w-56 h-72 bg-white p-3 shadow-2xl rounded-2xl overflow-hidden"
                      style={{ transform: "rotate(-8deg)" }}
                    >
                      <img src={person.photos[0]} className="w-full h-full object-cover rounded-xl" alt="" />
                    </div>
                    <div
                      className="absolute top-16 left-[36%] w-60 h-80 bg-white p-3 shadow-2xl rounded-2xl overflow-hidden z-10"
                      style={{ transform: "rotate(4deg)" }}
                    >
                      <img src={person.photos[1]} className="w-full h-full object-cover rounded-xl" alt="" />
                    </div>
                    <div
                      className="absolute top-6 right-[5%] w-56 h-72 bg-white p-3 shadow-2xl rounded-2xl overflow-hidden"
                      style={{ transform: "rotate(10deg)" }}
                    >
                      <img src={person.photos[2]} className="w-full h-full object-cover rounded-xl" alt="" />
                    </div>
                  </div>

                  {/* Mobile photos */}
                  <div className="flex gap-3 mb-8 md:hidden overflow-x-auto pb-2">
                    {person.photos.map((photo, pi) => (
                      <img
                        key={pi}
                        src={photo}
                        className="w-32 h-44 object-cover rounded-2xl flex-shrink-0 shadow-lg"
                        alt=""
                      />
                    ))}
                  </div>

                  {/* Letter card */}
                  <div className="max-w-4xl mx-auto bg-white/65 backdrop-blur-md rounded-[45px] p-12 md:p-16 shadow-2xl border border-white/50">
                    <p className="uppercase tracking-[0.3em] text-sm opacity-50 mb-8">{person.name}</p>
                    <div className="leading-10 text-lg whitespace-pre-line opacity-90 font-light">
                      {person.letter}
                    </div>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.4))" }} />
        <ScrollFade className="relative z-10 max-w-4xl mx-auto">
          <p className="tracking-[0.4em] uppercase text-sm opacity-60 mb-8">thank you</p>
          <h2 className="text-5xl md:text-7xl font-light leading-tight mb-12">
            thank you
            <br />
            for existing
          </h2>

          <p className="text-xl leading-10 opacity-80 mb-16">
            Спасибо тебе за твоё тепло,
            поддержку,
            смех
            и все моменты,
            которые стали особенными благодаря тебе ❣️
            <br /><br />
            Мы очень надеемся,
            что впереди нас ждёт
            ещё огромное количество
            воспоминаний вместе.
          </p>

          <div className="space-y-5 text-lg opacity-70">
            <p>пусть ты всегда будешь счастлива ❣️</p>
            <p>пусть рядом всегда будут люди, рядом с которыми спокойно</p>
            <p>пусть жизнь будет красивой, тёплой и наполненной любовью</p>
          </div>

          <div className="mt-24 text-3xl md:text-5xl tracking-wide font-light" style={{ color: "#b5907a" }}>
            ЫНАК БИС ❣️
          </div>
        </ScrollFade>
      </section>

    </div>
  );
}

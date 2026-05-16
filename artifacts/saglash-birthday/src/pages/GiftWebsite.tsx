import { useState, useRef, useEffect } from "react";

import bg_flowers from "@assets/IMG_20260516_195445_338_1778928887521.jpg";
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

import photo_aidana from "@assets/IMG_20260516_183111_751_1778923880383.jpg";
import photo_ayana from "@assets/IMG_20260516_183056_420_1778923885389.jpg";
import photo_ayushi from "@assets/IMG_20260516_183107_563_1778923889250.jpg";
import photo_aichyraa from "@assets/IMG_20260516_183055_688_1778923892107.jpg";

import music_demchik from "@assets/DEMChIK_-_Ынакшылым_оду_ошпес_(1)_1778917549594.mp3";
import music_chassy from "@assets/Ай-Кыс_Кыргыс_-_Чассынамга_(cover)_1778923826803.mp3";
import music_bellyache from "@assets/bellyache_-_Billie_Eilish_1778923831737.mp3";
import music_ocean_eyes from "@assets/ocean_eyes_-_Billie_Eilish_1778923835749.mp3";
import music_dushkan from "@assets/Сайдаш_Сержикпей_-_Душкан_кызым_1778923839950.mp3";

const people = [
  {
    name: "От Айданы",
    letter: `С твоим прекрасным днем, дорогая Саглашка 🐣
Пусть в твоей жизни всегда будет больше радости чем грусти ✨
Пусть люди рядом будут настоящими. Эмоции искренними. Фотографии живыми. А глаза всегда горят от счастья, идей и любви к жизни ❣️

Ты заслуживаешь не "нормально", не "как у всех", а чего-то большого, красивого и настоящего 💋 Пусть этот год станет именно таким: с неожиданными встречами, исполнением желаний и моментами, когда ты вдруг понимаешь, что «вот оно, счастье».

Помни: люби, цени, оберегай себя больше всех на свете! Ты — самое главное, что есть у себя! 🤍

Я очень рада, что познакомилась с тобой!
Люблюю, сактыырю, куспактаарю 💋

Happy Birthday ❣️`,
    photo: photo_aidana,
  },
  {
    name: "От Аяны",
    letter: `Саглаааш ♡

С твоим чудесным днём, дорогаяяя ♡ Желаю тебе много-много греющих душу воспоминаний, цветов, незабываемых путешествий!

Ты замечательный человек! Столько в тебе доброты, мягкости, понимания, в то же время стойкости, спокойствия и мудрости ♡

Спасибо, что всегда поддерживаешь! Часто в сложных ситуациях думаю "как бы повела себя Саглаш? что бы она посоветовала?" Реально, рядом с тобой все переживания, страхи, неуверенность куда-то испаряются.

Не забывай также о себе, ведь ты заслуживаешь действительно большего, лучшего!!!

В первую очередь уважаю ♡ люблю ♡ и прооосто обожаю тебя всем сердцем!

Ццц

Роскошь, просто р-о-с-к-о-ш-ь, что ты есть у меня! ♡`,
    photo: photo_ayana,
  },
  {
    name: "От Аюши",
    letter: "Ваше письмо здесь ❣️",
    photo: photo_ayushi,
  },
  {
    name: "От Ай-Чырыы",
    letter: `Дорогая Саглашуня ❣️

Желаю тебе всего самого наилучшего, чтобы все по жизни шло так, как ты хочешь. Я знаю — ты добьёшься всего сама ✨

Ты самый прекрасный, добрый, ответственный и позитивный человек на свете. Оставайся такой же красивой и доброй ❤️

Пусть настоящая любовь и карьера будут с тобой по жизни.

Мы очень тебя любим, ценим и уважаем — скоро увидимся 😘

С любовью, Айч 💋`,
    photo: photo_aichyraa,
  },
];

const associatedSongs = [
  { num: "01", title: "Чассынамга (cover)", artist: "Ай-Кыс Кыргыс", note: "потому что весна напоминает о тебе ❣️", src: music_chassy },
  { num: "02", title: "Bellyache", artist: "Billie Eilish", note: "потому что ты любишь такие песни ❣️", src: music_bellyache },
  { num: "03", title: "Ocean Eyes", artist: "Billie Eilish", note: "потому что ты смотришь на мир по-особенному ❣️", src: music_ocean_eyes },
  { num: "04", title: "Душкан кызым", artist: "Сайдаш Сержикпей", note: "потому что это звучит как тёплая любовь ❣️", src: music_dushkan },
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

/* ─── Single-song scroll player ─── */
function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const update = () => setProgress((audio.currentTime / audio.duration) * 100 || 0);
    audio.addEventListener("timeupdate", update);
    return () => audio.removeEventListener("timeupdate", update);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) { audio.pause(); setIsPlaying(false); }
    else { audio.play().catch(() => {}); setIsPlaying(true); }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
  };

  return (
    <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 shadow-xl border border-white/40">
      <audio ref={audioRef} src={music_demchik} />

      <h2 className="text-4xl mb-3 text-center font-light">music while scrolling</h2>
      <p className="text-center mb-8 opacity-60 text-sm tracking-wide">Включай музыку и листай дальше ❣️</p>

      <div className="bg-[#fdf9f7] rounded-3xl p-8 border border-[#e8d9d4]">
        <div className="text-center mb-6">
          <p className="text-lg font-light">Ынакшылым оду ошпес</p>
          <p className="text-sm opacity-50 mt-1">DEMChIK</p>
        </div>

        <div
          className="w-full h-1.5 bg-[#e8d9d4] rounded-full mb-6 cursor-pointer"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-[#b5907a] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-[#b5907a] text-white flex items-center justify-center text-xl hover:bg-[#a07868] transition shadow-lg"
          >
            {isPlaying ? "▮▮" : "▶"}
          </button>
        </div>
      </div>

      <p className="text-center mt-6 text-sm opacity-40 italic">Любим ❣️</p>
    </div>
  );
}

/* ─── Individual playable song card ─── */
function SongCard({ song, num }: { song: typeof associatedSongs[0]; num: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const update = () => setProgress((audio.currentTime / audio.duration) * 100 || 0);
    const onEnded = () => { setIsPlaying(false); setProgress(0); };
    audio.addEventListener("timeupdate", update);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) { audio.pause(); setIsPlaying(false); }
    else { audio.play().catch(() => {}); setIsPlaying(true); }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
  };

  return (
    <div className="rounded-[28px] bg-[#fdf9f7] border border-[#eaded8] p-6 shadow-lg hover:shadow-xl transition duration-500">
      <audio ref={audioRef} src={song.src} />

      <div className="flex items-start gap-5">
        <div className="text-2xl opacity-30 font-light pt-0.5 min-w-[36px]">{num}</div>

        <div className="flex-1 min-w-0">
          <p className="text-xl font-light truncate">{song.title}</p>
          <p className="text-sm opacity-50 mt-0.5">{song.artist}</p>
          <p className="text-sm opacity-60 mt-2 italic">{song.note}</p>

          {/* Progress bar */}
          <div
            className="w-full h-1 bg-[#e8d9d4] rounded-full mt-4 cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-[#b5907a] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Play / pause button */}
        <button
          onClick={togglePlay}
          className="w-11 h-11 rounded-full bg-[#b5907a] text-white flex items-center justify-center text-base hover:bg-[#a07868] transition shadow-md flex-shrink-0 mt-1"
        >
          {isPlaying ? "▮▮" : "▶"}
        </button>
      </div>
    </div>
  );
}

/* ─── Scroll fade wrapper ─── */
function ScrollFade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
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
    <div className="min-h-screen overflow-x-hidden font-serif relative" style={{ color: "#5f4b4b" }}>

      {/* Fixed floral background */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg_flowers})` }}
      />
      {/* Soft pink cream overlay */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(255,240,245,0.45), transparent 40%),
            radial-gradient(circle at bottom right, rgba(255,210,225,0.30), transparent 45%),
            linear-gradient(rgba(255,248,245,0.72), rgba(255,235,228,0.72))
          `,
        }}
      />

      {/* 1. HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
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

      {/* 2. MAIN MUSIC PLAYER — DEMChIK only */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        <ScrollFade>
          <MusicPlayer />
        </ScrollFade>
      </section>

      {/* 3. BIRTHDAY INTRO */}
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
            <div className="mt-10 text-lg opacity-50 italic">16.05.2004 ✨</div>
          </ScrollFade>
        </div>
      </section>

      {/* 4. ASSOCIATIONS */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <ScrollFade className="text-center mb-20">
            <p className="tracking-[0.4em] uppercase text-sm opacity-50 mb-6">associations</p>
            <h2 className="text-5xl md:text-7xl font-light leading-tight">
              things that
              <br />
              feel like you ❣️
            </h2>
          </ScrollFade>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "ночной город", text: "потому что рядом с тобой даже обычные вечера ощущаются как сцены из фильма ❣️", photo: photo_night_city, rotate: "-2deg" },
              { num: "02", title: "закаты", text: "потому что в тебе есть что-то очень тёплое, спокойное и красивое ❣️", photo: photo_sunset_car, rotate: "1.5deg" },
              { num: "03", title: "море", text: "потому что с тобой одновременно спокойно и очень живо ❣️", photo: photo_beach, rotate: "-1.5deg" },
            ].map((item) => (
              <ScrollFade key={item.num}>
                <div
                  className="bg-white/65 backdrop-blur-md rounded-[32px] overflow-hidden shadow-xl border border-white/50 hover:scale-[1.02] transition duration-500"
                  style={{ transform: `rotate(${item.rotate})` }}
                >
                  <div className="relative">
                    <img
                      src={item.photo}
                      className="w-full h-[320px] object-cover"
                      alt={item.title}
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(255,245,240,0.6))" }} />
                  </div>
                  <div className="px-8 py-7">
                    <p className="text-xs tracking-[0.3em] uppercase opacity-40 mb-3">{item.num}</p>
                    <h3 className="text-2xl font-light mb-4" style={{ color: "#5f4b4b" }}>{item.title}</h3>
                    <p className="text-sm leading-7 opacity-65 font-light">{item.text}</p>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PHOTO ARCHIVE */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollFade>
            <div className="bg-white/40 backdrop-blur-xl rounded-[50px] p-12 md:p-16 shadow-2xl border border-white/30 text-center">
              <p className="tracking-[0.35em] uppercase text-sm opacity-50 mb-5">hidden memories</p>
              <h2 className="text-5xl md:text-6xl font-light mb-16 leading-tight">photo archive ❣️</h2>
              <div className="columns-2 md:columns-4 gap-4 space-y-4">
                {allPhotos.map((photo, i) => (
                  <img key={i} src={photo} className="rounded-[20px] shadow-xl hover:scale-[1.03] transition duration-500 w-full break-inside-avoid" alt={`memory ${i + 1}`} />
                ))}
              </div>
              <p className="mt-14 text-sm opacity-40 tracking-wide">a collection of moments we never want to forget ❣️</p>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* 6. 10 THINGS */}
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
                  <div className="text-4xl opacity-30 font-light min-w-[50px]">{String(index + 1).padStart(2, "0")}</div>
                  <p className="text-xl">{item}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SONGS THAT FEEL LIKE YOU — real playable cards */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollFade className="text-center mb-16">
            <p className="tracking-[0.3em] uppercase text-sm opacity-50 mb-5">soundtrack</p>
            <h2 className="text-5xl md:text-6xl font-light leading-tight">
              songs that
              <br />
              feel like you ❣️
            </h2>
          </ScrollFade>

          <div className="bg-white/50 backdrop-blur-md rounded-[40px] p-10 shadow-xl border border-white/40">
            <div className="space-y-5">
              {associatedSongs.map((song) => (
                <ScrollFade key={song.num}>
                  <SongCard song={song} num={song.num} />
                </ScrollFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. LETTERS */}
      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <ScrollFade className="text-center mb-24">
            <p className="tracking-[0.3em] uppercase text-sm opacity-60 mb-5">the most important part</p>
            <h2 className="text-5xl md:text-6xl font-light leading-tight">letters for you ❣️</h2>
          </ScrollFade>

          <div className="space-y-24">
            {people.map((person, index) => (
              <ScrollFade key={index}>
                {/* Mobile: flex-col → photo above letter. Desktop: grid 2 cols */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-start">

                  {/* Photo */}
                  <div className="relative w-full">
                    <div className="absolute -inset-4 rounded-full" style={{ background: "rgba(255,255,255,0.15)", filter: "blur(30px)" }} />
                    <div
                      className="relative bg-white/80 backdrop-blur-md p-3 rounded-[30px] shadow-2xl"
                      style={{ transform: index % 2 === 0 ? "rotate(-3deg)" : "rotate(3deg)" }}
                    >
                      <img
                        src={person.photo}
                        className="w-full h-[340px] md:h-[440px] object-cover rounded-[22px]"
                        alt={person.name}
                      />
                    </div>
                  </div>

                  {/* Letter */}
                  <div className="bg-white/65 backdrop-blur-md rounded-[40px] p-10 md:p-14 shadow-2xl border border-white/50 w-full">
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

      {/* 9. FINAL */}
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

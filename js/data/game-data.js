const domen = `https://guessmelody.anatoly-dolgov.ru`;

const gameData = [
  {
    type: `artist`,
    genre: null,
    src: `${domen}/library/Alphaville - Big In Japan.mp3`,
    answers: [
      {
        title: `Queen`,
        image: `${domen}/img/logos/queen.gif`,
        genre: `classic rock`,
        src: `${domen}/library/Queen - The Show Must Go On.mp3`,
        isCorrect: false
      },
      {
        title: `Alphaville`,
        image: `${domen}/img/logos/alphaville.png`,
        genre: `synthpop`,
        src: `${domen}/library/Alphaville - Big In Japan.mp3`,
        isCorrect: true
      },
      {
        title: `Nirvana`,
        image: `${domen}/img/logos/nirvana.jpg`,
        genre: `grunge`,
        src: `${domen}/library/04-Rape Me.mp3`,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    genre: `classic rock`,
    src: null,
    answers: [
      {
        title: `Duran Duran`,
        image: `${domen}/img/logos/duran_duran.jpg`,
        genre: `synthpop`,
        src: `${domen}/library/Duran Duran - Come Undone.mp3`,
        isCorrect: false
      },
      {
        title: `Evanescence`,
        image: `${domen}/img/logos/evanescence.png`,
        genre: `alternative`,
        src: `${domen}/library/Evanescence - 01 - Going Under.mp3`,
        isCorrect: false
      },
      {
        title: `Queen`,
        image: `${domen}/img/logos/queen.gif`,
        genre: `classic rock`,
        src: `${domen}/library/Queen - The Show Must Go On.mp3`,
        isCorrect: true
      },
      {
        title: `One Republic`,
        image: `${domen}/img/logos/one_republic.jpg`,
        genre: `pop-rock`,
        src: `${domen}/library/OneRepublic - Secrets.mp3`,
        isCorrect: false
      }
    ]
  },
  {
    type: `artist`,
    genre: null,
    src: `${domen}/library/Eurythmics - Sweet Dreams.mp3`,
    answers: [
      {
        title: `Nirvana`,
        image: `${domen}/img/logos/nirvana.jpg`,
        genre: `grunge`,
        src: `${domen}/library/04-Rape Me.mp3`,
        isCorrect: false
      },
      {
        title: `Plazma`,
        image: `${domen}/img/logos/plazma.jpg`,
        genre: `synthpop`,
        src: `${domen}/library/Plazma - Take My Love.mp3`,
        isCorrect: false
      },
      {
        title: `Eurythmics`,
        image: `${domen}/img/logos/eurythmics.png`,
        genre: `pop`,
        src: `${domen}/library/Eurythmics - Sweet Dreams.mp3`,
        isCorrect: true
      }
    ]
  },
  {
    type: `artist`,
    genre: null,
    src: `${domen}/library/No Doubt - Dont Speak.mp3`,
    answers: [
      {
        title: `No Doubt`,
        image: `${domen}/img/logos/no_doubt.gif`,
        genre: `ska-punk`,
        src: `${domen}/library/No Doubt - Dont Speak.mp3`,
        isCorrect: true
      },
      {
        title: `Evanescence`,
        image: `${domen}/img/logos/evanescence.png`,
        genre: `alternative`,
        src: `${domen}/library/Evanescence - 01 - Going Under.mp3`,
        isCorrect: false
      },
      {
        title: `Roxette`,
        image: `${domen}/img/logos/roxette.jpg`,
        genre: `pop-rock`,
        src: `${domen}/library/Roxette - Sleeping In My Car.mp3`,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    genre: `classic`,
    src: null,
    answers: [
      {
        title: `Hans Zimmer`,
        image: `${domen}/img/logos/zimmer.jpg`,
        genre: `classic`,
        src: `${domen}/library/Hans Zimmer - Our Destiny Lies Above Us.mp3`,
        isCorrect: true
      },
      {
        title: `One Republic`,
        image: `${domen}/img/logos/one_republic.jpg`,
        genre: `pop-rock`,
        src: `${domen}/library/OneRepublic - Secrets.mp3`,
        isCorrect: false
      },
      {
        title: `Clint Mansell`,
        image: `${domen}/img/logos/mansell.jpg`,
        genre: `classic`,
        src: `${domen}/library/Clint Mansell - Requiem For a Dream.mp3`,
        isCorrect: true
      },
      {
        title: `Chaikovsky`,
        image: `${domen}/img/logos/chaikovsky.jpeg`,
        genre: `classic`,
        src: `${domen}/library/Chaikovsky - adagio.mp3`,
        isCorrect: true
      }
    ]
  },
  {
    type: `artist`,
    genre: null,
    src: `${domen}/library/Chaikovsky - adagio.mp3`,
    answers: [
      {
        title: `Chaikovsky`,
        image: `${domen}/img/logos/chaikovsky.jpeg`,
        genre: `classic`,
        src: `${domen}/library/Chaikovsky - adagio.mp3`,
        isCorrect: true
      },
      {
        title: `Korol i Shut`,
        image: `${domen}/img/logos/kish.png`,
        genre: `punk-rock`,
        src: `${domen}/library/Korol i Shut - eli myaso muzhiki.mp3`,
        isCorrect: false
      },
      {
        title: `Pink`,
        image: `${domen}/img/logos/pink.jpg`,
        genre: `pop-rock`,
        src: `${domen}/library/P!nk - Just Like A Pill.mp3`,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    genre: `pop`,
    src: null,
    answers: [
      {
        title: `Eurythmics`,
        image: `${domen}/img/logos/eurythmics.png`,
        genre: `pop`,
        src: `${domen}/library/Eurythmics - Sweet Dreams.mp3`,
        isCorrect: true
      },
      {
        title: `Red Hot Chili Peppers`,
        image: `${domen}/img/logos/rhcp.jpg`,
        genre: `funk-rock`,
        src: `${domen}/library/Red Hot Chili Peppers - Californication.mp3`,
        isCorrect: false
      },
      {
        title: `Ludwig van Beethoven`,
        image: `${domen}/img/logos/beethoven.jpg`,
        genre: `classic`,
        src: `${domen}/library/Beethoven - Moonlight Sonata.mp3`,
        isCorrect: false
      },
      {
        title: `Evanescence`,
        image: `${domen}/img/logos/evanescence.png`,
        genre: `alternative`,
        src: `${domen}/library/Evanescence - 01 - Going Under.mp3`,
        isCorrect: false
      }
    ]
  },
  {
    type: `artist`,
    genre: null,
    src: `${domen}/library/Muse - 08 - Hysteria.mp3`,
    answers: [
      {
        title: `Muse`,
        image: `${domen}/img/logos/muse.gif`,
        genre: `alternative`,
        src: `${domen}/library/Muse - 08 - Hysteria.mp3`,
        isCorrect: true
      },
      {
        title: `Clint Mansell`,
        image: `${domen}/img/logos/mansell.jpg`,
        genre: `classic`,
        src: `${domen}/library/Clint Mansell - Requiem For a Dream.mp3`,
        isCorrect: false
      },
      {
        title: `Lumen`,
        image: `${domen}/img/logos/lumen.png`,
        genre: `alternative`,
        src: `${domen}/library/Lumen - Sid & Nancy.mp3`,
        isCorrect: false
      }
    ]
  },
  {
    type: `genre`,
    genre: `punk-rock`,
    src: null,
    answers: [
      {
        title: `Eurythmics`,
        image: `${domen}/img/logos/eurythmics.png`,
        genre: `pop`,
        src: `${domen}/library/Eurythmics - Sweet Dreams.mp3`,
        isCorrect: false
      },
      {
        title: `Sum 41`,
        image: `${domen}/img/logos/sum41.png`,
        genre: `punk-rock`,
        src: `${domen}/library/Sum_41-still_waiting.mp3`,
        isCorrect: true
      },
      {
        title: `Kipelov`,
        image: `${domen}/img/logos/kipelov.png`,
        genre: `metal`,
        src: `${domen}/library/Kipelov-Ya Zdes.mp3`,
        isCorrect: false
      },
      {
        title: `Korol i Shut`,
        image: `${domen}/img/logos/kish.png`,
        genre: `punk-rock`,
        src: `${domen}/library/Korol i Shut - eli myaso muzhiki.mp3`,
        isCorrect: true
      }
    ]
  },
  {
    type: `artist`,
    genre: null,
    src: `${domen}/library/Evanescence - 01 - Going Under.mp3`,
    answers: [
      {
        title: `Eurythmics`,
        image: `${domen}/img/logos/eurythmics.png`,
        genre: `pop`,
        src: `${domen}/library/Eurythmics - Sweet Dreams.mp3`,
        isCorrect: false
      },
      {
        title: `Linkin Park`,
        image: `${domen}/img/logos/lp.jpg`,
        genre: `alternative`,
        src: `${domen}/library/Linkin Park - 08 - Breaking The Habit.mp3`,
        isCorrect: false
      },
      {
        title: `Evanescence`,
        image: `${domen}/img/logos/evanescence.png`,
        genre: `alternative`,
        src: `${domen}/library/Evanescence - 01 - Going Under.mp3`,
        isCorrect: true
      }
    ]
  }
];

export default gameData;

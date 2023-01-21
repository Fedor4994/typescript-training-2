import { useState } from "react";

interface IWish {
  wish: string;
  youare: string;
  color?: string;
}

function App() {
  const [currentWish, setCurrentWish] = useState<IWish>({
    wish: "Папаа, с днем рождеенияяя!!!!",
    youare:
      "https://cdn6.aptoide.com/imgs/2/0/d/20d1690ef409b1ce69e8a4c968fcbdd0_icon.png",
    color: "#1FA675",
  });

  const [currentNumber, setCurrentNumber] = useState(0);

  const wishes: IWish[] = [
    {
      wish: "Ты мой самый крутой и сильный герой💪",
      youare:
        "https://juicebubble.co.za/wp-content/uploads/2018/06/captain-america-super-dad-white.png",
    },

    {
      wish: "Мы с тобой самая лучшая команда😎",
      youare:
        " https://i.pinimg.com/originals/50/73/3c/50733c49f1a40296ff812169deff1940.png",
    },
    {
      wish: "Самый большой авторитет и пример для подражания😊",
      youare:
        "https://officialpsds.com/imageview/r4/9x/r49x44_large.png?1528933894",
    },

    {
      wish: "Ты самый добрый, хоть порой выглядишь очень грозно😇",
      youare:
        "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2012/4/10/1334073131620/45-Darth-Vader---Ice-Crea-2lg.jpg?width=700&quality=85&auto=format&fit=max&s=34d30210ca58c689fbd5dce6e1ae0006",
    },
    {
      wish: "Самый крутой программист, вот тут то ты для меня точно незаменимый пример🧑‍💻",
      youare:
        "https://juststickers.in/wp-content/uploads/2018/04/the-codefather.png",
    },
    {
      wish: "Ты самый крутой геймер😋",
      youare:
        "https://images.fineartamerica.com/images/artworkimages/medium/3/dad-level-unlocked-vintage-funny-video-gamer-myloot-transparent.png",
    },
    {
      wish: "Самый умный, и с тобой когда угодно можно улететь куда то к звездам😍",
      youare:
        "https://i.fbcd.co/products/original/db-rocketdad-1-0884dad19ef112d40887c1c4bdc1fb3ecf871be2cb864c95ab97a362d5fcc4ad.jpg",
    },
    {
      wish: "Самый лучший папа на свете🥳",
      youare:
        "https://images.fineartamerica.com/images/artworkimages/medium/3/armwrestling-dad-arm-wrestling-father-quote-gift-john-romeo-transparent.png",
    },
  ];

  const colors = [
    "#D99AAB",
    "#1FA675",
    "#0D688C",
    "#0889A6",
    "#BF9411",
    "#D99AAB",
    "#BF9411",
    "#0D688C",
    "#1FA675",
    "#0889A6",
    "#F27C38",
    "#F27C38",
  ];

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 11) + 1;
    setCurrentWish({
      wish: wishes[currentNumber].wish,
      youare: wishes[currentNumber].youare,
      color: colors[randomNumber],
    });
    if (currentNumber < 7) {
      setCurrentNumber((prev) => prev + 1);
    } else {
      setCurrentNumber(0);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: currentWish.color,
        transition: "background-color 1s",
      }}
    >
      <div className="card">
        <h1 className="wish">{currentWish.wish}</h1>
        <img className="youare" src={currentWish.youare} alt="father" />
        <img
          className="heart"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Beating_Heart.gif"
          alt="heart"
        />
        <button
          className="button"
          style={{
            backgroundColor: currentWish.color,
          }}
          onClick={handleClick}
        >
          Ты самый...
        </button>
      </div>
    </div>
  );
}

export default App;

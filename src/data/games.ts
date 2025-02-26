export interface Game {
  id: string;
  name: string;
  description: string;
  icon: string; // Path to local image asset
  maxPlayers: number | null; // The maximum number of players that the game is intended to be played by
}

export const GAMES: Game[] = [
  {
    id: "coin-toss",
    name: "Coin Toss",
    description: "Quick and simple",
    icon: "/assets/coin_icon.png",
    maxPlayers: 2,
  },
  
  {
    id: "spin-the-wheel",
    name: "Spin the Wheel",
    description: "Use the + and - buttons to adjust the number of players",
    icon: "/assets/wheel_icon.png",
    maxPlayers: 6,
  },
  {
    id: "dice-roll",
    name: "dice",
    description: "",
    icon: "/assets/dice_icon.png",
    maxPlayers: 2
  },
  {
    id: "reaction-test",
    name: "Reaction Test",
    icon: "/assets/bolt_icon.webp",
    description:
      "When the blue buttons turns green, click as fast as you can. If you click early, you will lose immediately.",
    maxPlayers: 2,
  },
  {
    id: "click-test",
    name: "Clicking Test",
    icon: "/assets/cursor_icon.webp",
    description:
      "Click the button as many times as you can before the timer runs out",
    maxPlayers: 2,
  },
  {
    id: "stat-challenge",
    name: "Stats Challenge",
    description: "Click the button to generate a random question. Whoever has the highest stats wins!",
    icon: "/assets/stats_icon.png",
    maxPlayers: null,
  },
  {
    id: "balloon-pop",
    name: "Balloon Pop",
    description: "Take turns to pump the balloon until it pops",
    icon: "/assets/balloon_icon.png",
    maxPlayers: null
  },
  {
    id: "pen14",
    name: "Pen14",
    description: "In a public space, choose a word, take turns to say the word with increasing volume, first one who chickens out loses",
    icon: "/assets/pen_icon.png",
    maxPlayers: null
  },
  {
    id: "typing-test",
    name: "Typing Test",
    description: "Type as many words as you can within the time limit",
    icon: "/assets/keyboard_icon.png",
    maxPlayers: null
  }
];

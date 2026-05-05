import UniduniArt from "./UniduniArtGif.gif"
import PoinAndClick from "./POINTANDCLICKGIF.gif"
import ShadowDreams from "./ShadowDreamsGIF.gif"
import SpaceRogue from "./SpaceRogue.png"
import Birdwatch from "./Birdwatch.gif"
import Letrix from "./Letrix.gif"
import Charcos from "./Charcos.png"
import AindaAqui from "./AindaAqui.png"
import SplitHunt from "./SplitHunt.png"
import PG1 from "./PG1.png"
import PG3 from "./PG3.png"
import PG5 from "./PG5.png"

const projects = 
[
      {
      id: 1,
      name: "Charcos Congelados",
      introText: "A single-player game that blends point-and-click puzzle mechanics with narrative-driven gameplay, in which each decision made throughout the experience directly influences the final outcomes. \nFinal Project at Unisinos..",
      fullText: "The game is currently in development and features three narrative arcs in addition to its prologue. Throughout the experience, the player controls up to three characters who, through their decisions, must address the challenges faced by the riverside region of Azellion. \nPlayer movement is handled via mouse input, following the traditional point-and-click format. \nThe game is being developed in Unity, with its dialogue system integrated using Ink.\nThe entire initial segment of the project, encompassing the full prologue, was developed over the course of one semester at Unisinos as part of the final graduation project. The complete Act I is scheduled for release on April 28, featuring all playable characters.",
      habilities: [
        "Game Designer",
        "Game Developer",
        "Programmer",
        "Pixel Artist",
        "Unity",
        "C#"
      ],
      itchLink: "https://roedor.itch.io/charcos-congelados",
      gitLink: "#",
      img: Charcos
    },
        {
      id: 2,
      name: "Ainda Aqui",
      introText: "Ainda Aqui is a contemplative game entirely focused on narrative and atmosphere. The player’s choices shape and transform the world, leaving a lasting mark upon it. \nFelpojam 2026.",
      fullText: "The game was developed in 11 days with the goal of participating in FelpoJam 2026. In addition to myself—responsible for programming and narrative design—the team consisted of two other members: an artist and an audio designer/composer. \nThe game follows the perspective of Naive, a traveler who passes through Vila Serena, a rural town set in a dystopian future where the oceans have dried up and water is no longer abundant. The player moves through and explores the region while making decisions prompted by the reflections proposed throughout the experience. \nAll of these reflections are based on the game jam’s theme, “Stamp,” as NPCs recall defining moments in their lives. It is up to the player to decide, indirectly, how to guide and advise them in moving forward.",
      habilities: [
        "Game Designer",
        "Game Developer",
        "Programmer",
        "Writer",
        "Godot",
        "GDScript"
      ],
      itchLink: "https://roedor.itch.io/ainda-aqui",
      gitLink: "#",
      img: AindaAqui
    },
    {
      id: 3,
      name: "Uni Duni Artê",
      introText: "A two-player game designed to be played in an arcade or with two controllers. Each player is responsible for two colors that can be mixed together and can only control one direction. \nWinner of the 2024 Arcade Game Jam.",
      fullText: "I developed a chaotic cooperative indie game centered around the theme “2 in 1.” The project was created by a team of two, in which I was responsible for programming and level design. The game, built around a drawing-based core mechanic, was developed in Godot using GDScript.\nThe project won the game jam, providing the opportunity for its continued development, and was later showcased at the Unisinos Arcade.",
      habilities: [
        "Game Designer",
        "Game Developer",
        "Programmer",
        "Godot",
        "GDScript"
      ],
      itchLink: "https://roedor.itch.io/uni-duni-art",
      gitLink: "https://github.com/feliperieder/ultimate-color",
      img: UniduniArt
    },
      {
      id: 4,
      name: "Split Hunt",
      introText: "A multiplayer game in which players must cooperate to survive successive waves of enemies within a confined arena. They are equipped with projectile-based attacks to defend themselves; however, success depends on coordinating their positioning to strike the enemies’ weak points. Players must also remain vigilant, as each enemy has its own preference, targeting specific players over others. \nWinner of the II Unisinos Game Jam.",
      fullText: "The game was developed in under 12 hours using Unity by a team of three. I was responsible for programming while also contributing to the game design. The theme of the game jam was “Duality,” and one of the additional challenges required the game to be playable by two players.",
      habilities: [
        "Game Designer",
        "Game Developer",
        "Programmer",
        "Unity",
        "C#"
      ],
      itchLink: "https://roedor.itch.io/split-hunt",
      gitLink: "#",
      img: SplitHunt
    },
    {
      id: 5,
      name: "Letrix",
      introText: "Although the game was not made for a game jam, it was developed in just two days because, besides the idea coming up and the execution seeming simple, I wanted to challenge myself.",
      fullText: "The concept for this game was conceived immediately after completing Space Rogue. Given its simplicity, I quickly initiated development and challenged myself to finish it within just two days. While not created as part of a game jam, the project provided a valuable opportunity to design and develop a complete game independently. It also marked my first experience composing part of the soundtrack. Additionally, I implemented a randomized spawning system for objects, along with defining unique characteristics for each one.",
      habilities: [
        "Game Designer",
        "Game Developer",
        "Programmer",
        "Composer",
        "Unity",
        "C#"
      ],
      itchLink: "https://roedor.itch.io/letrix",
      gitLink: "https://github.com/feliperieder/ultimate-color",
      img: Letrix
    },
    {
      id: 6,
      name: "Shadow Dreams",
      introText: "Shadow Dreams is a horror game about finding and using the player light light out of a nightmare. Shadow Dreams was created for a two-week game jam with the theme Shadow & Alchemy. We turned shadows into a literal threat to the player, while the lantern becomes the means of transforming light into salvation.",
      fullText: "An open map with dangers all around, the player will explore their surroundings avoiding these creatures searching for a way to solve this puzzle that involves light color mixing. The player will learn through their mistakes where to go and what to do each restart being a new opportunity to wake up from this nightmare.\nThe player controls Bob in this shadow world, he is equipped with a lantern and has to explore this map to find a way out of this nightmare. The light can transform with different colors when interacting with lanterns, which can be found around the map. It’s important to keep your eyes open to these monsters that wander around because their objective is to make you one with darkness.\n The GDD can be seen in the itch.io description.",
      habilities: [
        "Level Designer",
        "Programmer",
        "Godot",
        "GDScript"
      ],
      itchLink: "https://roedor.itch.io/shadow-dreams",
      gitLink: "https://github.com/feliperieder",
      img: ShadowDreams
    },
    {
      id: 7,
      name: "Space Rogue",
      introText: "This prototype was developed in just one week as a study project, with the goal of exploring concepts I wanted to deepen, such as Scriptable Objects and implementing a save system. Initially, I followed Unity Design e Desenvolvimento de Jogos by William Pereira as a guide. Since the book provided only a very basic foundation, I later challenged myself to go beyond it and expand the project independently.",
      fullText: "The initial idea for the game was simply to create a Space Invaders clone by following the guide of the book mentioned above. However, since the guide was very basic, I decided to go further by adding different types of enemies that vary in speed and movement patterns, appearing in sync with the rhythm of the music. In addition, I implemented a progression system inspired by roguelikes, where the player upgrades their spaceship to make subsequent stages easier. \nThe game saves progress at the end of each stage, storing not only the level reached but also the player’s health and upgrades. Since the project was meant to be completed in just one week, I decided to conclude it with a mini-boss. While the boss does not have any special attacks, it randomly spawns new enemies as well as meteors that are directed at the player.",
      habilities: [
        "Level Designer",
        "Programmer",
        "Unity",
        "C#"
      ],
      itchLink: "https://roedor.itch.io/space-rogue",
      gitLink: "https://github.com/feliperieder",
      img: SpaceRogue
    },
    {
      id: 8,
      name: "Not a Game 'bout Birdwatching but Should Be...",
      introText: "The game was developed over the course of one month for a game jam with the theme of Metroidvania. To reflect this theme, we created a wild world where the player must never harm the fauna, but instead learn how to coexist and interact with it.",
      fullText: "The game's title originally reflected the concept of a combat-free Metroidvania, centered on an ornithologist seeking to photograph birds. However, as the project’s scope expanded significantly, many aspects were altered, and it ultimately became a short game about learning to live in the savannah. Although it does not feature the typical bosses found in Metroidvania games, we retained the core mechanic of discovering new abilities that enable player progression.",
      habilities: [
        "Level Designer",
        "Programmer",
        "Godot",
        "GDScript"
      ],
      itchLink: "https://roedor.itch.io/wing-comander",
      gitLink: "https://github.com/feliperieder",
      img: Birdwatch
    },
    {
      id: 9,
      name: "The Cube",
      introText: "The cube was developed for the gamejam 3D Prototyping - Digital Games - UNISINOS 2024/2. The theme was Cube. Tha gameplay consists in a variety of puzzles with collors",
      fullText: "The Cube was not only my first game made in Unity, but also my first 3D game. It was developed over the course of one month as part of a Digital Games course at Unisinos, in the format of a game jam. The theme was 'colors', which led me to create a series of puzzles where the environment gradually reveals the interior of a Rubik’s Cube. Unfortunately, since I worked on the project alone, the game lacks a soundtrack and sound effects, which may cause some discomfort for the player.",
      habilities: [
        "Level Designer",
        "Programmer",
        "Godot",
        "GDScript"
      ],
      itchLink: "https://roedor.itch.io/the-cube",
      gitLink: "https://github.com/feliperieder/Point-and-Click",
      img: PoinAndClick
    },

    {
      id: 10,
      name: "First Web Develoment Guided Project",
      introText: "Here we start to learn CSS, as well as how to categorize the project with the appropriate tags.",
      fullText: "Created as a project for the Web Development course at Unisinos.",
      habilities: [
        "Web Design",
        "Programmer",
        "CSS",
        "HTML"
      ],
      itchLink: "#",
      gitLink: "https://github.com/feliperieder/WebDev/tree/main/projetoGuiado1%20(1)/projetoGuiado1",
      img: PG1
    },

    {
      id: 11,
      name: "Third Web Develoment Guided Project",
      introText: "With all the knowledge acquired of CSS and HTML, a replica of the Instagram login page was created.",
      fullText: "Created as a project for the Web Development course at Unisinos.",
      habilities: [
        "Web Design",
        "Programmer",
        "CSS",
        "HTML"
      ],
      itchLink: "#",
      gitLink: "https://github.com/feliperieder/WebDev/tree/main/ProjetoGuiado3%20(1)/ProjetoGuiado3",
      img: PG3
    },

    {
      id: 12,
      name: "Fifth Web Develoment Guided Project",
      introText: "A QR code generator was created using Java for the first time. Ending the semester with all the web development practices learned.",
      fullText: "Created as a project for the Web Development course at Unisinos.",
      habilities: [
        "Web Design",
        "Programmer",
        "CSS",
        "HTML",
        "Java Script"
      ],
      itchLink: "#",
      gitLink: "https://github.com/feliperieder/WebDev/tree/main/ProjetoGuiado5%20(1)/ProjetoGuiado5",
      img: PG5
    }
  ]

  export default projects
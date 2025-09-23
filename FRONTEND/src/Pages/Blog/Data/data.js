const AuthorData = [
  {
    name: "Alex 'Shadow' Williams",
    location: "Los Angeles",
    posts: 5,
    desc: "Professional esports commentator and analyst. Passionate about strategy games and player psychology.",
    img: "https://example.com/author1.jpg",
  },
  {
    name: "Jordan 'Pixel' Lee",
    location: "Seoul",
    posts: 4,
    desc: "Competitive gamer turned content creator. Focuses on FPS and MOBA games, with a knack for in-depth game mechanics analysis.",
    img: "https://example.com/author2.jpg",
  },
  {
    name: "Taylor 'Vortex' Smith",
    location: "London",
    posts: 3,
    desc: "Esports journalist and tournament organizer. Covers major esports events and player interviews.",
    img: "https://example.com/author3.jpg",
  },
  {
    name: "Morgan 'Echo' Davis",
    location: "New York",
    posts: 3,
    desc: "Streamer and community manager. Engages with fans through live streams and social media.",
    img: "https://example.com/author4.jpg",
  },
  {
    name: "Chris 'Blaze' Johnson",
    location: "Toronto",
    posts: 2,
    desc: "Game developer and esports enthusiast. Writes about game development trends and their impact on competitive gaming.",
    img: "https://example.com/author5.jpg",
  },
];

const BlogPosts = [
  {
    id: 1,
    img: "https://res.cloudinary.com/df5utoo6u/image/upload/v1757578127/e7a11aa9-edfa-46f2-839f-21a559137c6d.png",
    tag: "Esports",
    title: "The Rise of Valorant: A New Era in Tactical Shooters",
    desc: "An in-depth analysis of Valorant's impact on the esports scene and its growing competitive community.",
    longDesc: `
      Valorant has quickly become a dominant force in the world of competitive shooters, blending the precision of tactical gunplay with the unique abilities of its diverse cast of agents. Since its release, it has drawn in professional players from other games, establishing itself as a serious contender in the esports space. Riot Games’ dedication to balancing gameplay and supporting tournaments has made it more than just a trend—it is now a cornerstone of modern esports.

      The game’s emphasis on team coordination and strategy differentiates it from other shooters. While accurate aim remains important, success often depends on communication, timing, and tactical execution. Valorant’s steady updates and competitive circuits continue to attract international audiences, setting the stage for long-term growth. With its expanding professional ecosystem, Valorant represents not just a game but a new era of tactical esports.`,
    date: "August 10, 2025",
    posttype: "feature",
    readTime: "6 min",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/df5utoo6u/image/upload/v1757578398/c32f4957-35d7-47a8-be6b-ff71f17c77d7.png",
    tag: "Gaming",
    title: "Top 5 Indie Games to Watch in 2025",
    desc: "Exploring the most anticipated indie games of the year and what makes them stand out.",
    longDesc: `
      Indie developers have consistently proven that innovation often comes from smaller studios willing to take risks. In 2025, the indie gaming scene is thriving with creativity, producing games that explore new mechanics, experimental storytelling, and bold artistic directions. Unlike big-budget titles, these games often deliver personal experiences that resonate deeply with players.

      From puzzle adventures set in surreal dreamscapes to narrative-driven games tackling real-world issues, this year’s lineup shows how indie games are shaping the future of the industry. Crowdfunding platforms and early access programs are giving developers the chance to build communities before full release, making the journey just as exciting as the finished product. The top five indie titles to watch this year are poised to redefine how we think about creativity in gaming.`,
    date: "July 25, 2025",
    posttype: "feature",
    readTime: "4 min",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/df5utoo6u/image/upload/v1757578442/450753c5-dbc9-41b5-a89b-c4e5cf36af57.png",
    tag: "Esports",
    title: "Inside the Call of Duty League: Strategies and Teams",
    desc: "A behind-the-scenes look at the Call of Duty League, including team strategies and player profiles.",
    longDesc: `
      The Call of Duty League (CDL) has become one of the most thrilling esports competitions, bringing together elite players and passionate fans. Unlike traditional sports, the CDL thrives on rapid updates, meta shifts, and fast-paced gameplay that demands adaptability from every competitor. Behind every clutch play lies months of preparation, scrimmages, and team analysis.

      This article dives into the strategies that define CDL success—map control, weapon loadouts, and the importance of teamwork. It also highlights the personalities that have made the league a spectacle, from veterans with years of experience to rising stars proving themselves on the big stage. Beyond the game itself, the CDL has fostered a strong community culture, blending entertainment with high-level competition.`,
    date: "July 15, 2025",
    posttype: "feature",
    readTime: "7 min",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/df5utoo6u/image/upload/v1757578442/450753c5-dbc9-41b5-a89b-c4e5cf36af57.png",
    tag: "Esports",
    title: "Mobile Legends: Bang Bang – Southeast Asia's Esports Powerhouse",
    desc: "How Mobile Legends has become a dominant force in Southeast Asian esports.",
    longDesc: `
      Mobile Legends: Bang Bang (MLBB) is more than just a game—it is a cultural phenomenon in Southeast Asia. Its accessibility on mobile devices has brought competitive gaming to millions who may not own high-end PCs or consoles. As a result, MLBB has built one of the largest and most passionate esports communities in the region.

      The Mobile Legends Professional League (MPL) has turned local heroes into regional superstars, creating a thriving competitive ecosystem. National pride plays a big role in international tournaments, where rivalries between countries fuel excitement. With its mix of strategy, skill, and accessibility, MLBB is redefining what it means to be a global esport and solidifying Southeast Asia’s place at the heart of mobile gaming.`,
    date: "July 5, 2025",
    posttype: "feature",
    readTime: "5 min",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/df5utoo6u/image/upload/v1757578528/565163b2-0dd0-44b3-a34b-2259ba8799a4.png",
    tag: "Esports",
    title: "The Evolution of Fighting Games in Competitive Tournaments",
    desc: "Tracing the history and growth of fighting games in the esports tournament scene.",
    longDesc: `
      Fighting games hold a unique place in the esports world, with their roots dating back to the arcade era. Titles like Street Fighter II and Tekken brought players together in local arcades, creating a competitive culture that has endured for decades. Unlike many other genres, fighting games thrive on direct competition—two players, one arena, and a battle of reflexes and strategy.

      Over the years, the community has grown from grassroots tournaments to massive global events. Games like Super Smash Bros., Mortal Kombat, and Guilty Gear have each contributed to shaping the scene. Today, fighting game tournaments are streamed worldwide, with passionate fanbases and legendary rivalries. This evolution shows how a genre once confined to arcades has transformed into a central pillar of esports.`,
    date: "June 28, 2025",
    posttype: "feature",
    readTime: "6 min",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/df5utoo6u/image/upload/v1757578579/4ed9a42a-91f3-4c1a-86fb-9ee63686211c.png",
    tag: "Esports",
    title: "Women in Esports: Breaking Barriers and Building Communities",
    desc: "Highlighting the contributions of women in the esports industry and the communities they've built.",
    longDesc: `
      Women have long been part of gaming, but their visibility in esports has grown significantly in recent years. From professional players to casters, team managers, and organizers, women are making their mark across every corner of the industry. Despite challenges such as underrepresentation and online toxicity, their contributions are reshaping the competitive landscape.

      This article celebrates the trailblazers who are breaking barriers and fostering inclusive communities. Initiatives promoting diversity and safe spaces are creating opportunities for new talent to rise. By spotlighting these stories, we see how women are not just participants but leaders, shaping a more inclusive and vibrant future for esports.`,
    date: "June 18, 2025",
    posttype: "feature",
    readTime: "5 min",
  },
];


export default { AuthorData, BlogPosts };

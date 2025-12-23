export const devJokes = [
  "It works on my machine — production disagrees.",
  "I don't always test my code, but when I do, I do it in production.",
  "There are only 10 types of people: those who understand binary and those who don't.",
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "sudo make me a sandwich.",
  "Docker: Because 'it works on my machine' isn't good enough.",
  "I have a joke about UDP, but you might not get it.",
  "There's no place like 127.0.0.1",
];

export const devFacts = [
  "Linux powers 96.3% of the world's top 1 million web servers.",
  "Python was named after Monty Python, not the snake.",
  "The first computer bug was an actual bug — a moth found in a Harvard computer in 1947.",
  "Git was created by Linus Torvalds in just 2 weeks.",
  "AWS has more than 200 fully featured services.",
  "Docker containers share the host OS kernel, making them lightweight.",
  "Kubernetes means 'helmsman' in Greek.",
  "The cloud is just someone else's computer.",
];

export const devMindset = [
  "Automate everything. Sleep better.",
  "Fail fast, learn faster.",
  "Infrastructure as Code: because clicking is for mortals.",
  "Monitoring first, debugging second.",
  "The best code is no code at all.",
  "Ship small, ship often.",
  "Logs are love. Logs are life.",
  "Coffee → Code → Deploy → Repeat.",
];

export const getRandomItem = <T,>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const getRandomCategory = (): { type: string; content: string } => {
  const categories = [
    { type: "joke", items: devJokes },
    { type: "fact", items: devFacts },
    { type: "mindset", items: devMindset },
  ];
  const category = getRandomItem(categories);
  return {
    type: category.type,
    content: getRandomItem(category.items),
  };
};

import portrait1 from "@/assets/ghost-portrait-1.jpg";

export type Soul = {
  id: string;
  name: string;
  origin: string;
  ageAtDeath: number;
  dateOfDeath: string; // ISO
  height: string;
  weight: string;
  era: string;
  location: string;
  personality: string;
  oneLiner: string;
  causeOfDeath: string;
  favoriteHauntingLocations: string[];
  price: number;
  image: string;
};

export const souls: Soul[] = [
  {
    id: "margaret-holloway",
    name: "Margaret Holloway",
    origin: "York, England",
    ageAtDeath: 73,
    dateOfDeath: "1923-11-14",
    height: "5'5\"",
    weight: "Feather-light",
    era: "Early 20th Century",
    location: "Europe",
    personality: "Bookish",
    oneLiner: "Still mad about her unreturned library book.",
    causeOfDeath: "A dramatic sigh that lasted too long",
    favoriteHauntingLocations: ["Old libraries", "Tea rooms"],
    price: 129.0,
    image: portrait1,
  },
  {
    id: "captain-bramble",
    name: "Captain Bramble",
    origin: "Portsmouth, UK",
    ageAtDeath: 46,
    dateOfDeath: "1887-06-02",
    height: "6'2\"",
    weight: "Buoyant",
    era: "Victorian",
    location: "Europe",
    personality: "Adventurous",
    oneLiner: "Insists every hallway is a starboard.",
    causeOfDeath: "Wrestled a chandelier and lost",
    favoriteHauntingLocations: ["Ship cabins", "Harbor taverns"],
    price: 169.0,
    image: portrait1,
  },
  {
    id: "eloise-moon",
    name: "Eloise Moon",
    origin: "New Orleans, USA",
    ageAtDeath: 28,
    dateOfDeath: "1911-02-01",
    height: "5'3\"",
    weight: "Breeze-like",
    era: "Belle Époque",
    location: "North America",
    personality: "Charming",
    oneLiner: "Hums jazz only dogs can hear.",
    causeOfDeath: "Over-flutter of the heart at a masquerade",
    favoriteHauntingLocations: ["Balconies", "Moonlit porches"],
    price: 149.0,
    image: portrait1,
  },
  {
    id: "old-man-wisp",
    name: "Old Man Wisp",
    origin: "Reykjavík, Iceland",
    ageAtDeath: 84,
    dateOfDeath: "1955-01-12",
    height: "5'10\"",
    weight: "Driftwood",
    era: "Mid‑Century",
    location: "Europe",
    personality: "Stoic",
    oneLiner: "Tells stories that last three nights.",
    causeOfDeath: "Fell asleep mid-saga and kept going",
    favoriteHauntingLocations: ["Cliff edges", "Lighthouses"],
    price: 139.0,
    image: portrait1,
  },
  {
    id: "luna-ashcroft",
    name: "Luna Ashcroft",
    origin: "Salem, USA",
    ageAtDeath: 33,
    dateOfDeath: "1693-10-31",
    height: "5'7\"",
    weight: "Moonbeam",
    era: "17th Century",
    location: "North America",
    personality: "Witty",
    oneLiner: "Collects silver linings like trophies.",
    causeOfDeath: "Out-mooning the moon",
    favoriteHauntingLocations: ["Attics", "Moonlit gardens"],
    price: 199.0,
    image: portrait1,
  },
  {
    id: "sir-cedric",
    name: "Sir Cedric of Larkhill",
    origin: "Cotswolds, England",
    ageAtDeath: 39,
    dateOfDeath: "1412-05-09",
    height: "6'0\"",
    weight: "Knight-light",
    era: "Medieval",
    location: "Europe",
    personality: "Gallant",
    oneLiner: "Polishes invisible armor twice daily.",
    causeOfDeath: "Tripped over a legend",
    favoriteHauntingLocations: ["Old keeps", "Apple orchards"],
    price: 179.0,
    image: portrait1,
  },
  {
    id: "madame-velour",
    name: "Madame Velour",
    origin: "Paris, France",
    ageAtDeath: 51,
    dateOfDeath: "1899-12-31",
    height: "5'8\"",
    weight: "Perfumed vapor",
    era: "Belle Époque",
    location: "Europe",
    personality: "Flamboyant",
    oneLiner: "Leaves glitter you can feel but not see.",
    causeOfDeath: "Too many encores",
    favoriteHauntingLocations: ["Opera boxes", "Velvet lounges"],
    price: 189.0,
    image: portrait1,
  },
  {
    id: "arthur-inkwell",
    name: "Arthur Inkwell",
    origin: "Boston, USA",
    ageAtDeath: 62,
    dateOfDeath: "1932-03-22",
    height: "5'11\"",
    weight: "Paper-thin",
    era: "Early 20th Century",
    location: "North America",
    personality: "Meticulous",
    oneLiner: "Proofreads your dreams.",
    causeOfDeath: "Comma splice catastrophe",
    favoriteHauntingLocations: ["Studies", "Antique shops"],
    price: 135.0,
    image: portrait1,
  },
];

export type { Soul as TSoul };
import { PageTitle, Section } from "../components/ui";
import Photo from "../components/Photo";

export const metadata = {
  title: "Photo Gallery",
  description: "Photos of the food, dining room, bar and upstairs room at Bella Italia in Newton, NJ.",
  alternates: { canonical: "/gallery" },
};

const photos = [
  ["g-lamb", "Rack of lamb with asparagus and balsamic drizzle", "big"],
  ["g-lobster", "Lobster tail over fettuccine with spinach"],
  ["g-seafood-pasta", "Seafood pasta with mussels and calamari"],
  ["g-ravioli", "Ravioli in cream sauce topped with fried carrot"],
  ["g-pizza", "Margherita style pizza in a box"],
  ["g-seafood-platter", "Seafood dish with lobster, clams and mussels", "big"],
  ["g-sangria", "Red sangria with an orange slice at the bar"],
  ["g-salmon", "Salmon over beans and greens topped with onion rings"],
  ["g-lobster2", "Lobster tail over green fettuccine"],
  ["g-shrimp", "Plate of shrimp in a light sauce"],
  ["g-ossobuco", "Braised meat over mashed potatoes with asparagus"],
  ["g-caprese", "Chicken topped with tomato and balsamic glaze over spinach"],
  ["hero-dining", "The Bella Italia dining room with tables set and arched windows"],
  ["gnocchi", "Plate of gnocchi topped with sausage in red sauce"],
  ["hero-bar", "The bar area with stools and string lights"],
  ["menu-rigatoni", "Baked rigatoni in tomato sauce topped with melted mozzarella"],
  ["hero-mural", "Dining room with a painted Venetian mural on the wall"],
  ["menu-ravioli", "Green ravioli with a dark garnish on a white plate"],
  ["sweet-mousse", "Chocolate mousse sundae with whipped cream and chocolate covered strawberries"],
  ["cat-antipasto", "Antipasto platter with cured meats, cheeses, olives and peppers"],
  ["desserts", "Platter of pastries and cookies with a scoop of gelato"],
  ["cat-rollatini", "Tray of stuffed chicken rollatini"],
  ["hero-room", "Long table set for a group in the main dining room"],
  ["sweet-pastry", "Tray of mini pastries and tarts"],
  ["artichoke-a", "Tray of baked stuffed artichokes with a golden breadcrumb topping"],
];

export default function GalleryPage() {
  return (
    <>
      <PageTitle eyebrow="Gallery" title="A look inside" lede="Real photos from our kitchen and dining room. Click any photo to see it larger." />
      <Section>
        <div className="gal">
          {photos.map(([n, a, c]) => <Photo key={n} name={n} alt={a} className={c || ""} sizes="(min-width: 800px) 25vw, 50vw" />)}
        </div>
      </Section>
    </>
  );
}

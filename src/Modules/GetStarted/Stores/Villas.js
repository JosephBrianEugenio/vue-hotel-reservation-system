// // stores/villaStore.js
import Villa1 from "src/assets/Villa/villa1.jpg";
import Villa2 from "src/assets/Villa/villa2.jpg";
import Villa3 from "src/assets/Villa/villa3.jpg";
import Villa4 from "src/assets/Villa/villa4.jpg";
import Villa5 from "src/assets/Villa/villa5.jpg";
import Villa6 from "src/assets/Villa/villa6.jpg";
import Villa7 from "src/assets/Villa/villa7.jpg";
import Villa8 from "src/assets/Villa/villa8.jpg";
import Villa9 from "src/assets/Villa/villa9.jpg";
import Villa10 from "src/assets/Villa/villa10.jpg";

export default function villaList() {
  const villas = [
    {
      id: 1,
      name: "Villa 1",
      image: Villa1,
      title: "Diamond Coast Haven",
      description:
        "Perched on a cliff overlooking the sparkling azure waters, Diamond Coast Haven boasts panoramic ocean views from every room. This villa is designed for discerning travelers seeking luxury, featuring a private beach, infinity-edge pool, and a rooftop terrace for sunset cocktails.",
    },

    {
      id: 2,
      name: "Villa 2",
      image: Villa2,
      title: "Emerald Sands Retreat",
      description:
        "Nestled amidst lush palm groves on a secluded stretch of beach, Emerald Sands Retreat offers a private sanctuary with infinity pools cascading into turquoise waters. The villa features Balinese-inspired architecture, a gourmet kitchen, and a spa pavilion for ultimate relaxation.",
    },
    // {
    //   id: 3,
    //   name: "Villa 3",
    //   image: Villa3,
    //   title: "Sapphire Shores Villa",
    //   description:
    //     "Sapphire Shores Villa exudes coastal elegance with its blend of modern design and tropical charm. Set amidst landscaped gardens, the villa offers direct beach access, a private cinema, and a fully equipped gym overlooking the ocean.",
    // },
    {
      id: 4,
      name: "Villa 4",
      image: Villa4,
      title: "Pearl Cove Sanctuary",
      description:
        "Hidden within a secluded cove, Pearl Cove Sanctuary offers unparalleled privacy and tranquility. Guests can indulge in the villa's infinity pool, outdoor dining pavilion, and personalized butler service for a seamless luxury experience.",
    },
    // {
    //   id: 5,
    //   name: "Villa 5",
    //   image: Villa5,
    //   title: "Golden Horizon Estate",
    //   description:
    //     "Set on a pristine beachfront, Golden Horizon Estate combines contemporary architecture with opulent interiors. The villa features expansive living spaces, a state-of-the-art entertainment system, and a private chef preparing gourmet meals against a backdrop of panoramic ocean vistas.",
    // },
    // {
    //   id: 6,
    //   name: "Villa 6",
    //   image: Villa6,
    //   title: "Opal Bay Retreat",
    //   description:
    //     "Opal Bay Retreat is a luxurious haven perched on the edge of a turquoise lagoon, offering direct access to a coral reef teeming with marine life. The villa includes a private yacht for sunset cruises, a spa pavilion with ocean views, and a chef's kitchen for culinary adventures.",
    // },
    {
      id: 7,
      name: "Villa 7",
      image: Villa7,
      title: "Platinum Sands Villa",
      description:
        "Platinum Sands Villa epitomizes coastal chic with its sleek design and uninterrupted views of the cerulean sea. Guests can enjoy a private beach cabana, infinity-edge pool, and a rooftop lounge for starlit gatherings under the moonlight.",
    },
    // {
    //   id: 8,
    //   name: "Villa 8",
    //   image: Villa8,
    //   title: "Ruby Reef Haven",
    //   description:
    //     "Ruby Reef Haven is a luxurious retreat nestled amidst vibrant coral reefs and crystal-clear waters. The villa features eco-friendly architecture, a private helipad, and exclusive access to a marine sanctuary ideal for snorkeling and diving adventures.",
    // },
    // {
    //   id: 9,
    //   name: "Villa 9",
    //   image: Villa9,
    //   title: "Silvershore Escape",
    //   description:
    //     "Silvershore Escape offers a blend of modern luxury and island tranquility, with direct access to a secluded white sand beach. The villa includes a beachfront infinity pool, alfresco dining pavilion, and a meditation garden for holistic wellness experiences.",
    // },
    // {
    //   id: 10,
    //   image: Villa10,
    //   name: "Villa 10",
    //   title: "Coral Crest Villa",
    //   description:
    //     "Perched atop a coral crest overlooking the azure ocean, Coral Crest Villa offers panoramic views and unparalleled privacy. This exclusive retreat features a cliffside infinity pool, a gourmet kitchen with ocean-view dining, and a private beach with snorkeling opportunities.",
    // },
  ];

  return {
    villas,
  };
}

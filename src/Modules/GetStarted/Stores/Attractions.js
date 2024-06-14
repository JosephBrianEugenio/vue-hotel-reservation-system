import Villa1 from "src/assets/Villa/villa1.jpg";
import Hotel2 from "src/assets/hotel2.jpg";
import Hotel3 from "src/assets/hotel3.jpg";
// import Hotel4 from "src/assets/hotel4.jpg";
// import Hotel5 from "src/assets/hotel5.jpg";

export default function attractionsList() {
  const attractions = [
    {
      id: 1,
      name: "Clear and White Sand Beach",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ab
    delectus non molestiae nemo nulla veniam deleniti saepe totam quis
    rerum, quo eum ex ad iste, officiis fuga voluptas molestias.`,
      image: Villa1,
    },
    {
      id: 1,
      name: "Good Sight Seeing Views",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ab
    delectus non molestiae nemo nulla veniam deleniti saepe totam quis
    rerum, quo eum ex ad iste, officiis fuga voluptas molestias.`,
      image: Hotel2,
    },
    {
      id: 1,
      name: "Hotel 3",
      name: "Good Sight Seeing Views",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ab
  delectus non molestiae nemo nulla veniam deleniti saepe totam quis
  rerum, quo eum ex ad iste, officiis fuga voluptas molestias.`,
      image: Hotel3,
    },
    // { id: 1, name: "Hotel 4", image: Hotel4 },
    // { id: 1, name: "Hotel 5", image: Hotel5 },
  ];

  return {
    attractions,
  };
}

import Hotel1 from "src/assets/hotel1.jpg";
import Hotel2 from "src/assets/hotel2.jpg";
import Hotel3 from "src/assets/hotel3.jpg";
import Hotel4 from "src/assets/hotel4.jpg";
import Hotel5 from "src/assets/hotel5.jpg";

export default function attractionsList() {
  const attractions = [
    { id: 1, name: "Hotel 1", image: Hotel1 },
    { id: 1, name: "Hotel 2", image: Hotel2 },
    { id: 1, name: "Hotel 3", image: Hotel3 },
    { id: 1, name: "Hotel 4", image: Hotel4 },
    { id: 1, name: "Hotel 5", image: Hotel5 },
  ];

  return {
    attractions,
  };
}

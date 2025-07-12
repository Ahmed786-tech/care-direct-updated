import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/app/globals.css"; // adjust path if needed

import Navbar from "@/app/Navbar";
import Homepage from "@/app/Homepage";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
    </div>
  );
}

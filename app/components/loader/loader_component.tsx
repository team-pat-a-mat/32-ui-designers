import Lottie from "react-lottie-player";
import lottieJson from "../../../public/loader.json";

export default function LoaderComponent() {
  return (
    <main className="flex items-center justify-center mx-auto w-16 custom-h">
      <Lottie loop animationData={lottieJson} play />
    </main>
  );
}

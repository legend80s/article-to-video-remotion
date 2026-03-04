import { Composition } from "remotion"
import { Rocket } from "./Rocket"

// Each <Composition> is an entry in the sidebar!

export const RocketComposition: React.FC = () => {
  return (
    <>
      <Composition
        id="rocket"
        component={Rocket}
        durationInFrames={45}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  )
}

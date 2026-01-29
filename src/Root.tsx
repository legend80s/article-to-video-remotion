/** biome-ignore-all lint/nursery/useUniqueElementIds: <explanation> */
import "./index.css"
import { Composition } from "remotion"
import { HelloWorld, myCompSchema } from "./HelloWorld"
import { Logo, myCompSchema2 } from "./HelloWorld/Logo"
import { MyComposition } from "./MyComposition"

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/** biome-ignore lint/nursery/useUniqueElementIds: <explanation> */}
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render HelloWorld
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        schema={myCompSchema}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
          logoColor1: "#91EAE4",
          logoColor2: "#86A8E7",
        }}
      />

      <Composition
        id="MyComposition"
        component={MyComposition}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* Mount any React component to make it show up in the sidebar and work on it individually! */}
      {/** biome-ignore lint/nursery/useUniqueElementIds: <explanation> */}
      <Composition
        id="OnlyLogo"
        component={Logo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema2}
        defaultProps={{
          logoColor1: "#91dAE2" as const,
          logoColor2: "#86A8E7" as const,
        }}
      />
    </>
  )
}

import type React from "react"
import { Composition, Sequence } from "remotion"
import { SCENE_TIMINGS, VIDEO_CONFIG } from "./data/constants"
import { PainPointScene } from "./scenes/0-PainPointScene"
import { ClickToCodeScene } from "./scenes/1-ClickToCodeScene"
import { HowItWorksScene } from "./scenes/2-HowItWorksScene"
import { AutoGenerateScene } from "./scenes/3-AutoGenerateScene"
import { TypeHintScene } from "./scenes/4-TypeHintScene"
import { CTAScene } from "./scenes/5-CTAScene"

const TanStackStartVideo: React.FC = () => {
  return (
    <>
      <Sequence
        from={SCENE_TIMINGS.painPoint.start}
        durationInFrames={
          SCENE_TIMINGS.painPoint.end - SCENE_TIMINGS.painPoint.start
        }
      >
        <PainPointScene />
      </Sequence>

      <Sequence
        from={SCENE_TIMINGS.clickToCode.start}
        durationInFrames={
          SCENE_TIMINGS.clickToCode.end - SCENE_TIMINGS.clickToCode.start
        }
      >
        <ClickToCodeScene />
      </Sequence>

      <Sequence
        from={SCENE_TIMINGS.howItWorks.start}
        durationInFrames={
          SCENE_TIMINGS.howItWorks.end - SCENE_TIMINGS.howItWorks.start
        }
      >
        <HowItWorksScene />
      </Sequence>

      <Sequence
        from={SCENE_TIMINGS.autoGenerate.start}
        durationInFrames={
          SCENE_TIMINGS.autoGenerate.end - SCENE_TIMINGS.autoGenerate.start
        }
      >
        <AutoGenerateScene />
      </Sequence>

      <Sequence
        from={SCENE_TIMINGS.typeHint.start}
        durationInFrames={
          SCENE_TIMINGS.typeHint.end - SCENE_TIMINGS.typeHint.start
        }
      >
        <TypeHintScene />
      </Sequence>

      <Sequence
        from={SCENE_TIMINGS.cta.start}
        durationInFrames={SCENE_TIMINGS.cta.end - SCENE_TIMINGS.cta.start}
      >
        <CTAScene />
      </Sequence>
    </>
  )
}

export const TanStackStartComposition: React.FC = () => {
  return (
    <>
      <Composition
        id="TanStackStart"
        component={TanStackStartVideo}
        durationInFrames={VIDEO_CONFIG.durationInFrames}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
        defaultProps={{}}
      />
    </>
  )
}

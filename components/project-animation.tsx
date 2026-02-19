'use client'

import dynamic from 'next/dynamic'

const AsciiAnimation = dynamic(
  () => import('@santiagocetran/ascii-3d-animation/react').then((m) => m.AsciiAnimation),
  { ssr: false, loading: () => null }
)

export function ProjectAnimation({ modelUrl }: { modelUrl: string }) {
  return (
    <div
      className="w-full flex-1 min-h-0 motion-reduce:hidden border-b-2 border-border overflow-hidden"
      aria-hidden="true"
    >
      <div className="w-full h-full scale-[1.8] origin-center [image-rendering:pixelated]">
      <AsciiAnimation
        modelUrl={modelUrl}
        className="w-full h-full"
        effectOptions={{
          backgroundColor: 'transparent',
          pixelSize: 1,
          ditherType: 'bayer4x4',
          colors: ['#f7f9ce', '#abc685', '#074434', '#E8FF99'],
          animationDuration: 2500,
        }}
      />
      </div>
    </div>
  )
}

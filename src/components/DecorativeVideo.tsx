import { useEffect, useRef, useState } from 'react';
import type { SyntheticEvent, VideoHTMLAttributes } from 'react';

type DecorativeVideoProps = Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  'controls' | 'controlsList' | 'disablePictureInPicture' | 'disableRemotePlayback' | 'draggable'
> & {
  deferUntilNearViewport?: boolean;
};

function preventNativeMediaInteraction(event: SyntheticEvent<HTMLVideoElement>) {
  event.preventDefault();
}

export function DecorativeVideo({
  autoPlay = false,
  children,
  deferUntilNearViewport = false,
  ...props
}: DecorativeVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(!deferUntilNearViewport);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || shouldLoad || !('IntersectionObserver' in window)) {
      if (!shouldLoad) setShouldLoad(true);
      return;
    }

    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin: '400px 0px' },
    );

    loadObserver.observe(video);
    return () => loadObserver.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (deferUntilNearViewport) video.load();

    if (!autoPlay || !('IntersectionObserver' in window)) return;

    const playbackObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 },
    );

    playbackObserver.observe(video);
    return () => playbackObserver.disconnect();
  }, [autoPlay, deferUntilNearViewport, shouldLoad]);

  return (
    <video
      {...props}
      ref={videoRef}
      autoPlay={autoPlay && !deferUntilNearViewport}
      controls={false}
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      draggable={false}
      onContextMenu={preventNativeMediaInteraction}
      onDragStart={preventNativeMediaInteraction}
    >
      {shouldLoad ? children : null}
    </video>
  );
}

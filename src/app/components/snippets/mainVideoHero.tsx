export default function MainHeroVideo() {
  return (
    <video
      poster="/general/MainBannerPoster.webp"
      aria-label="Looping background video of main banner"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="object-cover w-full h-full"
    >
      <source src="/general/MainBanner_FIXED.webm" type="video/webm" />
      <source src="/general/MainBanner_FIXED.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

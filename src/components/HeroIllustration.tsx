import MeadowlarkBird from "@/components/MeadowlarkBird";

/**
 * Right-hand hero illustration: the Meadowlark bird with a quiet wordmark.
 * Decorative only (the site header already carries the brand name), so the whole
 * block is hidden from assistive technology and the wordmark is not announced twice.
 */
export default function HeroIllustration() {
  return (
    <div
      aria-hidden="true"
      className="-mt-6 flex flex-col items-center lg:mt-0 lg:col-span-5 lg:items-end"
    >
      <div className="flex w-full max-w-[17rem] flex-col items-center sm:max-w-sm lg:max-w-md">
        <MeadowlarkBird className="w-full h-auto" />
        <p className="bird-wordmark mt-6 font-display text-2xl sm:text-3xl font-normal tracking-[0.01em] text-foreground">
          Meadowlark Labs
        </p>
      </div>
    </div>
  );
}

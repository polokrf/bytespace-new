import { CreatorSection } from './CreatorSection';
import { GrowthSection } from './GrowthSection';

export function GrowthAndCreator() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F8FAFC]

        px-4
        py-20

        sm:px-6
        sm:py-24

        md:py-[100px]

        lg:px-8
        lg:py-[120px]
      "
    >
      {/* =========================
          TOP LEFT LIME GLOW
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          opacity-50
          blur-[100px]

          sm:h-[600px]
          sm:w-[600px]

          lg:-left-24
          lg:-top-24
          lg:h-[650px]
          lg:w-[650px]
          lg:opacity-60
          lg:blur-[120px]
        "
        style={{
          background:
            'radial-gradient(circle, #E4FF66 0%, rgba(228, 255, 102, 0.2) 60%, transparent 80%)',
        }}
      />

      {/* =========================
          BOTTOM LEFT LIME GLOW
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-40
          h-[450px]
          w-[450px]
          rounded-full
          opacity-40
          blur-[100px]

          sm:h-[500px]
          sm:w-[500px]

          lg:bottom-[10%]
          lg:left-[-5%]
          lg:h-[550px]
          lg:w-[550px]
          lg:opacity-55
          lg:blur-[130px]
        "
        style={{
          background:
            'radial-gradient(circle, #E4FF66 0%, rgba(228, 255, 102, 0.15) 50%, transparent 80%)',
        }}
      />

      {/* =========================
          BOTTOM RIGHT BLUE GLOW
      ========================== */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[500px]
          w-[500px]
          rounded-full
          opacity-50
          blur-[100px]

          sm:h-[650px]
          sm:w-[650px]

          lg:bottom-[-10%]
          lg:right-[-10%]
          lg:h-[800px]
          lg:w-[800px]
          lg:opacity-70
          lg:blur-[140px]
        "
        style={{
          background:
            'radial-gradient(circle, #B8D4FF 0%, rgba(184, 212, 255, 0.3) 50%, transparent 80%)',
        }}
      />

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1258px]
          flex-col

          gap-20

          sm:gap-24

          md:gap-[72px]
        "
      >
        {/* Growth / Student Section */}
        <GrowthSection />

        {/* Creator Section */}
        <CreatorSection />
      </div>
    </section>
  );
}

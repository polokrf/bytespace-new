import { testimonials } from '@/components/shared/testimonials.data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';




export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA]">
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-20
          bottom-[-180px]
          h-[400px]
          w-[500px]
          rounded-full
          bg-[#BFD0FF]
          opacity-70
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[0px]
          md:right-[300px]
          xl:right-[500px]
          top-[-160px]
          h-[400px]
          w-[500px]
          rounded-full
          bg-[#E6FF78]
          opacity-70
          blur-[100px]
        "
      />

      <div
        className="
          relative
          mx-auto
          flex
          
          max-w-[1440px]
          flex-col
          px-6
          py-[74px]
          md:px-10
          lg:px-[68px]
        "
      >
        {/* Header */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-2
            lg:gap-[72px]
          "
        >
          {/* Heading */}
          <div>
            <h2
              className="
                max-w-[400px]
                text-[32px]
                font-bold
                leading-[1.15]
                tracking-[-0.03em]
                text-[#080808]
                sm:text-[38px]
                lg:text-[40px]
              "
            >
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-[470px]">
            <p
              className="
                text-[13px]
                font-normal
                leading-[1.65]
                text-[#666666]
              "
            >
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div
          className="
            mt-[48px]
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:mt-[44px]
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {testimonials.map(testimonial => (
            <article
              key={testimonial.name}
              className="
                flex
                min-h-[240px]
                flex-col
                rounded-[16px]
                bg-white
                p-[16px]
                shadow-[0_1px_2px_rgba(0,0,0,0.02)]
              "
            >
              {/* User */}
              <div className="flex items-center gap-3">
                <Avatar className="h-[46px] w-[46px]">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />

                  <AvatarFallback className="bg-[#E8E8E8] text-sm font-medium text-[#333]">
                    {testimonial.name
                      .split(' ')
                      .map(word => word[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h3 className="text-[13px] font-semibold leading-[1.3] text-black">
                    {testimonial.name}
                  </h3>

                  <p className="mt-[2px] text-[11px] font-medium text-[#2563EB]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <p
                className="
                  mt-[22px]
                  text-[12px]
                  font-normal
                  leading-[1.7]
                  text-[#666666]
                "
              >
                {testimonial.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

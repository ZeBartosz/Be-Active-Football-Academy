import { Link } from '@inertiajs/react';
import { DynamicIcon } from 'lucide-react/dynamic';

export default function OfferSection() {
  const offer = [
    {
      title: 'Structured Pathways',
      description: 'Tailored to age and ability.',
      icon: 'route' as const,
    },
    {
      title: 'Expert Coaching',
      description: 'Professional coaches with years of experience.',
      icon: 'user-star' as const,
    },
    {
      title: 'Innovative Training',
      description: 'Modern techniques and equipment.',
      icon: 'clock-arrow-up' as const,
    },
    {
      title: 'Community Support',
      description: 'A welcoming environment for all.',
      icon: 'handshake' as const,
    },
  ];

  return (
    <>
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="pb-[16px] font-bold text-white sm:text-3xl md:text-6xl">
            What We Offer
          </h2>
          <div className="bg-secondary mt-1 mr-auto h-1 w-34 rounded-full"></div>
          <p className="mt-2 text-blue-200/60">
            Structured pathways tailored to age and ability.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 py-[32px]">
          <div className="col-span-4">
            {offer.map((item, index) => (
              <div
                key={index}
                className="btn-secondary my-4 flex justify-start"
              >
                <DynamicIcon name={item.icon} />
                <h3 className="pl-6 text-center font-bold text-white">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="col-span-4">
            <div className="flex items-center justify-center">
              <img
                src="storage/assets/fieldbg.jpeg"
                alt="Community Support"
                className="my-4 h-[450px] w-[100%] rounded-xl shadow-2xl"
              />
            </div>
          </div>

          <div className="col-span-4 flex flex-col justify-items-center">
            <div className="my-auto flex flex-col content-center items-center">
              <h2 className="py-[32px] text-center text-2xl font-bold text-white">
                Community Support
              </h2>
              <p className="mb-[32px] text-center text-blue-200/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                risus urna, rhoncus sit amet tellus et, malesuada placerat
                tortor. Sed vehicula rutrum odio in mollis. Etiam convallis
                feugiat rhoncus. Donec venenatis bibendum varius. Quisque
                fringilla dolor condimentum, viverra odio quis, eleifend ipsum.
                Sed nec placerat neque.
              </p>
              <div className="flex max-h-[450px] max-w-11/12 items-center justify-center">
                <div className="rounded-2xl bg-blue-900/40 p-2">
                  <DynamicIcon name="handshake" color="white" size={40} />
                </div>
                <p className="pl-[16px] text-sm text-blue-200">
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <Link href="/" className="btn-primary my-[32px]">
                More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

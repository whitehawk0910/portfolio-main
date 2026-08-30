'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

const CAL_NAMESPACE = 'portfolio-booking';
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK;

export const BookCall = () => {
  useEffect(() => {
    if (!CAL_LINK) return;

    void getCalApi({ namespace: CAL_NAMESPACE }).then((cal) => {
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    });
  }, []);

  return (
    <section className="mb-16" aria-labelledby="contact-heading">
      <div className="mb-6 flex items-baseline gap-4">
        <span className="type-numeral shrink-0 text-[1.6rem] text-accent">
          07
        </span>
        <h2
          id="contact-heading"
          className="font-display flex flex-1 items-baseline gap-3 text-[1.875rem] font-bold tracking-tight text-foreground md:text-[2.5rem]"
          style={{ letterSpacing: '-0.03em' }}
        >
          Contact
          <span className="block h-px flex-1 self-center bg-foreground/15" />
        </h2>
      </div>

      <div className="border-t border-line/80 pt-8 text-center md:pt-10">
        <p className="type-meta text-muted-foreground/80">Book a call</p>
        <p className="font-display mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Tell me what you are shipping.
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Founders · Engineers · Hiring teams
        </p>

        {CAL_LINK ? (
          <div className="cal-booking-shell mt-8 overflow-hidden rounded-lg border border-line/90 text-left">
            <Cal
              namespace={CAL_NAMESPACE}
              calLink={CAL_LINK}
              config={{ layout: 'month_view' }}
              className="cal-embed min-h-[42rem] w-full"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        ) : (
          <div className="mt-8 rounded-lg border border-line/90 bg-card px-6 py-16">
            <p className="text-sm text-muted-foreground">
              Booking calendar is being connected.
            </p>
            <a
              href="mailto:piyushofficial09@gmail.com"
              className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4"
            >
              Email me to schedule a call
            </a>
          </div>
        )}

        <p className="type-meta mt-5 text-[0.625rem] text-muted-foreground">
          Prefer email?{' '}
          <a
            href="mailto:piyushofficial09@gmail.com"
            className="normal-case text-foreground underline-offset-4 hover:underline"
          >
            piyushofficial09@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

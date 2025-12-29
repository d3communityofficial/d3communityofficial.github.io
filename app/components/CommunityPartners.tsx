




import Image from "next/image";
import { Handshake } from "lucide-react";
import { communityPartners } from "../data/communityPartners";


export default function CommunityPartners() {
  return (
    <section>
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
        <Handshake className="w-6 h-6 text-dark-secondary" />
        Community Partners
      </h2>

      <div className="py-3">
        <div className="partners-grid-bg rounded-xl p-3 overflow-visible">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {communityPartners.map((partner) => {
              // build conditional classes for the <img> element
              const imgClasses = [
                "object-contain",
                "max-w-[60%]",
                "max-h-[60%]",
                "transition-transform",
                "duration-300",
                "group-hover:scale-105",
              ];

              // apply CSS filter utilities only when requested
              if (partner.invertDark) {
                // used when the original logo is dark on light and needs inversion in dark mode
                imgClasses.push("dark:filter", "dark:invert", "dark:brightness-150");
              }
              if (partner.invertLight) {
                imgClasses.push("filter", "invert", "brightness-150");
              }

              // optional drop shadow for faint white logos on patterned/dark backgrounds
              // mark these logos in your data with `needsShadow: true`
              if (partner.needsShadow) {
                imgClasses.push("drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]");
              }

              return (
                <div key={partner.name} className="w-full flex flex-col items-center group">
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={partner.name}
                    className={`
                      w-full aspect-square
                      bg-transparent
                      rounded-xl
                      flex items-center justify-center
                      p-3
                      shadow-sm
                      border border-slate-200/8 dark:border-slate-700/40
                      ring-1 ring-slate-200/8 dark:ring-slate-700/30
                      hover:scale-105
                      transition-transform
                      relative
                    `}
                  >
                    <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/8 dark:bg-white/6 flex items-center justify-center text-white/80">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 3h7v7" />
                        <path d="M10 14L21 3" />
                        <path d="M21 21H3V3" />
                      </svg>
                    </span>

                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={160}
                      height={160}
                      className={imgClasses.join(" ")}
                    />
                  </a>

                  <p className="mt-2 text-sm font-medium text-center text-black dark:!text-white transition-colors group-hover:text-blue-500 truncate">
                    {partner.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}



import { Handshake } from 'lucide-react';
import Image from 'next/image';
import CardSkeleton from './shared/CardSkeleton';
import { communityPartners } from '@/app/data/communityPartners';
import { getAssetPath } from '@/app/utils/paths';

export default function CommunityPartners() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Handshake className="w-6 h-6 text-dark-secondary" />
        Community Partners
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap gap-4">
        {communityPartners.map((partner, index) => (
          <CardSkeleton
            key={index}
            url={partner.url}
            fixedBg={partner.fixedBg}
          >
            <div className="absolute -top-6 -left-6 -right-6 -bottom-6 p-4">
              <Image
                src={getAssetPath(partner.logo)}
                alt="Community partner logo"
                fill
                className={`
                  object-contain
                  ${partner.invertDark ? 'dark:invert dark:brightness-150' : ''}
                  ${partner.invertLight ? 'invert brightness-150' : ''}
                `}
              />
            </div>
          </CardSkeleton>
        ))}
      </div>
    </div>
  );
}

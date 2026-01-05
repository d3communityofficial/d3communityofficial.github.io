'use client';
import Image from 'next/image';
import { Cpu } from 'lucide-react';
import CardSkeleton from './shared/CardSkeleton';
import coreTeam, { CoreTeamMember } from '@/app/data/coreTeam';
import { getAssetPath } from '@/app/utils/paths';

export default function TeamSection() {
  const founder = coreTeam.find(
    (member: CoreTeamMember) => member.id === 'd3-001'
  );

  const members = coreTeam.filter(
    (member: CoreTeamMember) => member.id !== 'd3-001'
  );

  return (
    <div className="space-y-8">
      {/* Section heading */}
      <h2 className="text-3xl font-bold flex items-center gap-2 text-dark-text">
        <Cpu className="w-7 h-7 text-dark-secondary" />
        Core Team
      </h2>

      {/* Founder — first row */}
      {founder && (
        <div className="flex flex-wrap gap-4 md:gap-7">
          <CardSkeleton url={founder.linkedin}>
            <div className="h-full flex flex-col items-center justify-center text-center group">
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src={getAssetPath(founder.avatar)}
                  alt={founder.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-dark-text group-hover:text-dark-primary transition-colors">
                {founder.name}
              </h3>

              <p className="text-sm text-dark-muted">{founder.role}</p>
            </div>
          </CardSkeleton>
        </div>
      )}

      {/* Remaining core members — next row(s) */}
      <div className="flex flex-wrap gap-4 md:gap-7">
        {members.map((member: CoreTeamMember) => (
          <CardSkeleton key={member.id} url={member.linkedin}>
            <div className="h-full flex flex-col items-center justify-center text-center group">
              <div className="relative w-20 h-20 mb-4">
                <Image
                  src={getAssetPath(member.avatar)}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-dark-text group-hover:text-dark-primary transition-colors">
                {member.name}
              </h3>

              <p className="text-sm text-dark-muted">{member.role}</p>
            </div>
          </CardSkeleton>
        ))}
      </div>
    </div>
  );
}

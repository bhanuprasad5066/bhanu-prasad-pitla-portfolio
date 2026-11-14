import { Heart } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import SocialLinks from '@/components/ui/SocialLinks';
import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-[#E5DED6] bg-navy-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <Logo className="h-9 w-9 text-xs" />
          <div>
            <p className="text-sm font-medium text-slate-100">{profile.name}</p>
            <p className="text-xs text-slate-400">
              © {profile.copyrightYear} {profile.name}. All Rights Reserved.
            </p>
          </div>
        </div>

        <p className="flex items-center gap-1.5 text-sm text-slate-400">
          Designed & Developed with
          <Heart className="h-4 w-4 fill-electric-400 text-electric-400" aria-label="love" />
        </p>

        <SocialLinks iconClassName="h-4 w-4" />
      </div>
    </footer>
  );
}

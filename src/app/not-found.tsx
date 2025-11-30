'use client';

import { ArrowLeft, FileQuestion, ShieldAlert } from 'lucide-react';
import { Guilloche } from '@/components/guilloche/Guilloche';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const router = useRouter();

  const onReturn = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center relative overflow-hidden text-forest p-6">
      {/* Background Texture - Security Paper Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(18, 44, 24, 0.03) 0px, rgba(18, 44, 24, 0.03) 1px, transparent 1px, transparent 4px)' }}></div>

      {/* Guilloche Patterns - Adjusted for Light Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         <Guilloche type="rosette" color="#122C18" />
      </div>
      <div className="absolute top-0 left-0 w-full h-32 opacity-10 pointer-events-none">
          <Guilloche type="security-strip" color="#122C18" />
      </div>
      <div className="absolute bottom-0 right-0 w-full h-32 opacity-10 pointer-events-none rotate-180">
          <Guilloche type="security-strip" color="#122C18" />
      </div>
      
      {/* Abstract Grid Lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(18, 44, 24, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 44, 24, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-lg w-full text-center">
        <div className="mb-8 flex justify-center">
           <div className="w-24 h-24 rounded-full bg-white border border-forest/10 flex items-center justify-center relative shadow-xl">
              <div className="absolute inset-0 rounded-full animate-ping bg-forest/5" style={{ animationDuration: '3s' }}></div>
              <FileQuestion size={40} className="text-forest" />
           </div>
        </div>

        <div className="inline-flex items-center px-5 py-2.5 border border-black/10 rounded-full bg-black/5 backdrop-blur-md shadow-lg mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-forest/90 flex items-center gap-2.5">
                <ShieldAlert size={12} strokeWidth={2.5} /> Error 404 • Missing Asset
            </span>
        </div>

        <h1 className="font-serif text-8xl md:text-9xl text-forest mb-2 tracking-tighter animate-in fade-in zoom-in duration-1000 drop-shadow-sm">
          404
        </h1>
        
        <h2 className="font-display text-2xl md:text-3xl mb-6 tracking-widest uppercase text-forest/90 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Jurisdiction Unknown
        </h2>
        
        <p className="font-sans font-light text-forest/70 text-lg leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
           The ledger entry you are looking for has been redacted, moved, or never existed within our secure network.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <Button 
            onClick={onReturn}
            className="group h-auto px-8 py-4 bg-forest text-gold hover:bg-forest/90 transition-all duration-300 shadow-lg hover:shadow-xl rounded-none"
          >
            <span className="text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Return to HQ
            </span>
          </Button>
        </div>
        
        <div className="mt-20 border-t border-forest/10 pt-8 animate-in fade-in duration-1000 delay-700">
            <p className="font-mono text-[10px] text-forest/40 uppercase tracking-widest flex items-center justify-center gap-4">
                <span>System ID: 884-X</span>
                <span className="w-1 h-1 bg-forest/40 rounded-full"></span>
                <span>Ref: Null_Pointer_Exception</span>
            </p>
        </div>
      </div>
    </div>
  );
}

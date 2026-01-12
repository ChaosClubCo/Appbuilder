import React from 'react';
import { LegalModal } from './LegalModal';

export function TermsOfService({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <LegalModal isOpen={isOpen} onClose={onClose} title="Terms of Service">
      <div className="space-y-4 text-sm md:text-base leading-relaxed">
        <h3 className="text-lg font-semibold text-white">1. Terms</h3>
        <p>By accessing this Website, accessible from flashfusion.ai, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.</p>
        
        <h3 className="text-lg font-semibold text-white mt-6">2. Use License</h3>
        <p>Permission is granted to temporarily download one copy of the materials on FlashFusion's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose or for any public display;</li>
          <li>attempt to reverse engineer any software contained on FlashFusion's Website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>

        <h3 className="text-lg font-semibold text-white mt-6">3. Disclaimer</h3>
        <p>All the materials on FlashFusion's Website are provided "as is". FlashFusion makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, FlashFusion does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or on any sites linked to this Website.</p>

        <h3 className="text-lg font-semibold text-white mt-6">4. Limitations</h3>
        <p>FlashFusion or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on FlashFusion's Website, even if FlashFusion or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage.</p>
        
        <h3 className="text-lg font-semibold text-white mt-6">5. Governing Law</h3>
        <p>Any claim related to FlashFusion's Website shall be governed by the laws of the US without regards to its conflict of law provisions.</p>
      </div>
    </LegalModal>
  );
}

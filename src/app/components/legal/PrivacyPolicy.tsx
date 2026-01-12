import React from 'react';
import { LegalModal } from './LegalModal';

export function PrivacyPolicy({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <LegalModal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div className="space-y-4 text-sm md:text-base leading-relaxed">
        <p>At FlashFusion, accessible from flashfusion.ai, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by FlashFusion and how we use it.</p>
        
        <h3 className="text-lg font-semibold text-white mt-6">Log Files</h3>
        <p>FlashFusion follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

        <h3 className="text-lg font-semibold text-white mt-6">Cookies and Web Beacons</h3>
        <p>Like any other website, FlashFusion uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content.</p>

        <h3 className="text-lg font-semibold text-white mt-6">Privacy Policies</h3>
        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of FlashFusion.</p>
        
        <h3 className="text-lg font-semibold text-white mt-6">Third Party Privacy Policies</h3>
        <p>FlashFusion's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.</p>

        <h3 className="text-lg font-semibold text-white mt-6">Consent</h3>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
      </div>
    </LegalModal>
  );
}

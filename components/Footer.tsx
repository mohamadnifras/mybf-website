export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-20 pb-10 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6">
            <img
              src="/mybf-logo.png"
              alt="MYBF Logo"
              className="h-10 w-auto"
            />
          </div>
          <p className="text-on-surface-variant text-sm mb-6">
            Empowering the youth of Malappuram through entrepreneurship, innovation, and community.
          </p>
        </div>
        <div>
          <h4 className="text-on-surface font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Who We Are
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Vision
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Initiatives
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Membership
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-on-surface font-bold mb-6">Social</h4>
          <ul className="space-y-4">
            <li>
              <a 
                className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" 
                href="https://www.facebook.com/mybfcommunity"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a 
                className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" 
                href="https://www.instagram.com/mybf.community/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a 
                className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2" 
                href="https://www.linkedin.com/in/mybf-community-171906424/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-on-surface font-bold mb-6">Legal</h4>
          <ul className="space-y-4">
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-20 pt-8 border-t border-white/5 text-center md:text-left">
        <p className="text-on-surface-variant text-sm font-body-md text-body-md">
          © 2024 Malappuram Youth Business Forum. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

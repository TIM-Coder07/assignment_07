import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-15 bg-black p-10 text-amber-100">
      {/* About Section */}
      <div className="text-justify space-y-3">
        <h4 className="text-lg font-bold mb-2">CS — Ticket System</h4>
        <p className="text-sm leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      {/* Company Section */}
      <div className="space-y-2">
        <h4 className="text-lg font-bold mb-2">Company</h4>
        <div className="flex flex-col space-y-1 text-sm">
          <a href="#" className="hover:text-amber-300 transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-amber-300 transition-colors">
            Our Mission
          </a>
          <a href="#" className="hover:text-amber-300 transition-colors">
            Contact Sales
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="space-y-2">
        <h4 className="text-lg font-bold mb-2">Services</h4>
        <div className="flex flex-col space-y-1 text-sm">
          <a href="#" className="hover:text-amber-300 transition-colors">
            Products & Services
          </a>
          <a href="#" className="hover:text-amber-300 transition-colors">
            Customer Stories
          </a>
          <a href="#" className="hover:text-amber-300 transition-colors">
            Download Apps
          </a>
        </div>
      </div>

      {/* Information Section */}
      <div className="space-y-2">
        <h4 className="text-lg font-bold mb-2">Information</h4>
        <div className="flex flex-col space-y-1 text-sm">
          <a href="#" className="hover:text-amber-300 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-amber-300 transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-amber-300 transition-colors">
            Join Us
          </a>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="space-y-2">
        <h4 className="text-lg font-bold mb-2">Social Links</h4>
        <div className="flex flex-col space-y-2 text-sm">
          <a
            href="#"
            className="flex items-center gap-2 hover:text-amber-300 transition-colors"
          >
            <img
              src="../assets/twitter.png"
              alt="Twitter"
              className="w-5 h-5"
            />{" "}
            @CS — Ticket System
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-amber-300 transition-colors"
          >
            <img
              src="../assets/linkDin.png"
              alt="LinkedIn"
              className="w-5 h-5"
            />{" "}
            @CS — Ticket System
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-amber-300 transition-colors"
          >
            <img
              src="../assets/faceBook.png"
              alt="Facebook"
              className="w-5 h-5"
            />{" "}
            @CS — Ticket System
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-amber-300 transition-colors"
          >
            <img src="../assets/mail.png" alt="Email" className="w-5 h-5" /> @CS
            — Ticket System
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

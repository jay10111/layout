import React from 'react'

function Hero() {
  return (
    <>
      <footer
      className="relative bg-cover bg-center text-gray-800 p-10"
      style={{ backgroundImage: "url('/w.jpg')" }} // Update path accordingly
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <img src="/Layer 1.png" alt="Logo" className="w-16 mb-4" />
            <p className="text-sm">
              It is a long established fact that a reader will be distracted by readable content of a page.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              {[
                "Web Design/Development",
                "App Development",
                "UI/UX Design",
                "Flutter Download",
                "React JS Developer",
                "Android Developer",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center text-sm hover:text-blue-500">
                    ➤ {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Follow Us</h3>
            <ul className="mt-3 space-y-2">
              {[
                { name: "Instagram", icon: "📷" },
                { name: "Dribbble", icon: "🎨" },
                { name: "Facebook", icon: "📘" },
                { name: "Twitter", icon: "🐦" },
              ].map((social, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center text-sm hover:text-blue-500">
                    {social.icon} {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Address</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>📍 2/20, Astern Road, USA</li>
              <li>✉ example@example.com</li>
              <li>📞 +880 320 432 242</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright & Links */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
          Ⓒ Muriak Technologies 2024 | All Rights Reserved
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-blue-500">Terms & Conditions</a>
          <a href="#" className="hover:text-blue-500">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500">Contact Us</a>
        </div>
      </div>
    </footer>


    </>
  )
}

export default Hero
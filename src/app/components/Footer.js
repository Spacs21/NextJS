import React from 'react'

const Footer = () => {
  return (
    <footer className="text-[#0F0F0F] py-16 px-24">
    <div className="flex justify-between container mx-auto ">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-4xl font-semibold">Let's make<br />something special</h3>
          <p className="text-lg">Let's talk!👋</p>
        </div>
        <div className="space-y-1 text-gray-400">
          <p>020 7993 2905</p>
          <p>hi@finsweet.com</p>
        </div>
        <p className="text-gray-400">DLF Cybercity, Bhubaneswar,<br />India, 835066</p>
      </div>
      <div className="flex gap-20">
        <div className="space-y-4">
          <h4 className="font-medium">Service</h4>
          <div className="space-y-3 text-gray-400">
            <p>Service</p>
            <p>Technical support</p>
            <p>Testing</p>
            <p>Development</p>
            <p>AWS/Azure</p>
            <p>Consulting</p>
            <p>Information Technology</p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-medium">Company</h4>
          <div className="space-y-3 text-gray-400">
            <p>Home</p>
            <p>Service</p>
            <p>Company</p>
            <p>Career</p>
            <p>News</p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-medium">Resources</h4>
          <div className="space-y-3 text-gray-400">
            <p>About Us</p>
            <p>Testimonial</p>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>Blog</p>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-[#5D5DFF] text-white px-6 py-3 rounded-lg flex items-center gap-2">
          Contact Us
          <span>→</span>
        </button>
      </div>
    </div>
  </footer>
  )
}

export default Footer
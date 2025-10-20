import React from "react"
import PageBanner from "../components/PageBanner"
import "./LienHe.css"

function LienHe() {
  return (
    <div className="lienhe-page">
      <PageBanner title="Túi xanh - Nảy hạt" subtitle="Liên hệ" imageUrl="/images/about-banner.png" />

      <div className="map-card">
        <iframe
          title="map"
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.484195093596!2d106.700!3d10.775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1svi!2s!4v1700000000000"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <section className="contact-section">
        <h3 className="contact-title">LIÊN HỆ VỚI CHÚNG TÔI</h3>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Họ Tên Của Bạn" />
          <input type="email" placeholder="Example@mail.com" />
          <input type="tel" placeholder="Số Điện Thoại" />
          <textarea rows="4" placeholder="Nội Dung" />
          <button type="submit">Gửi ngay</button>
        </form>
      </section>
    </div>
  )
}

export default LienHe



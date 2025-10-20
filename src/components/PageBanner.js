import React, { useState } from "react"
import "./PageBanner.css"

function PageBanner({ title, subtitle, imageUrl }) {
  const defaultSrc = "/images/Banner.png"
  const [bannerSrc, setBannerSrc] = useState(imageUrl || defaultSrc)
  return (
    <div className="page-banner">
      <img
        className="page-banner__image"
        src={bannerSrc}
        alt={title}
        onError={() => setBannerSrc(defaultSrc)}
      />
      <div className="page-banner__overlay"></div>
      <div className="page-banner__inner">
        <div className="page-banner__content">
          <h1 className="page-banner__title">{title}</h1>
          {subtitle && <p className="page-banner__subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}

export default PageBanner



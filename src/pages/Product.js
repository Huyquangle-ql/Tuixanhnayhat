import React, { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import PageBanner from "../components/PageBanner"
import "./Product.css"

const PRODUCTS = [
  {
    id: "flat-small",
    name: "Túi trơn",
    size: "Nhỏ",
    price: 20000,
    image: "/images/handmade-weaving.png",
    type: "trơn",
    status: "còn hàng",
    sizeKey: "nhỏ",
  },
  {
    id: "flat-large",
    name: "Túi trơn",
    size: "Lớn",
    price: 30000,
    image: "/images/handmade-weaving.png",
    type: "trơn",
    status: "còn hàng",
    sizeKey: "lớn",
  },
  {
    id: "printed-small",
    name: "Túi có in hình",
    size: "Nhỏ",
    price: 30000,
    image: "/images/handmade-weaving.png",
    type: "in hình",
    status: "còn hàng",
    sizeKey: "nhỏ",
  },
  {
    id: "printed-large",
    name: "Túi có in hình",
    size: "Lớn",
    price: 40000,
    image: "/images/handmade-weaving.png",
    type: "in hình",
    status: "còn hàng",
    sizeKey: "lớn",
  },
]

function Product() {
  const navigate = useNavigate()
  const [filters, setFilters] = useState({
    type: new Set(["trơn", "in hình"]),
    status: new Set(["còn hàng", "hết hàng"]),
    size: new Set(["nhỏ", "lớn"]),
  })

  const [openSections, setOpenSections] = useState({
    type: true,
    status: false,
    size: false,
  })

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const toggleFilter = (group, value) => {
    setFilters((prev) => {
      const updated = new Set(prev[group])
      if (updated.has(value)) updated.delete(value)
      else updated.add(value)
      return { ...prev, [group]: updated }
    })
  }

  const resetFilters = () => {
    setFilters({
      type: new Set(["trơn", "in hình"]),
      status: new Set(["còn hàng", "hết hàng"]),
      size: new Set(["nhỏ", "lớn"]),
    })
  }

  const activeChips = useMemo(() => {
    const chips = []
    filters.type.size === 2 ? chips.push({ k: "Loại", v: "Tất cả" }) : filters.type.forEach((v) => chips.push({ k: "Loại", v }))
    filters.status.size === 2 ? chips.push({ k: "Trạng thái", v: "Tất cả" }) : filters.status.forEach((v) => chips.push({ k: "Trạng thái", v }))
    filters.size.size === 2 ? chips.push({ k: "Kích thước", v: "Tất cả" }) : filters.size.forEach((v) => chips.push({ k: "Kích thước", v }))
    return chips
  }, [filters])

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => filters.type.has(p.type) && filters.status.has(p.status) && filters.size.has(p.sizeKey))
  }, [filters])

  return (
    <div className="product-page">
      <PageBanner title="Túi xanh - Nảy hạt" subtitle="Sản phẩm" imageUrl="/images/about-banner.png" />
      <section className="intro">
        <h2> Mô tả chung về sản phẩm</h2>
        <div className="intro-card">
          <p>
            Túi Xanh – Náy Hạt là túi sinh học phân hủy hoàn toàn, làm từ ≥90% vỏ bắp ngô tự
            nhiên kết hợp phụ gia sinh học, an toàn cho sức khỏe và thân thiện môi trường. Sản
            phẩm tự phân hủy sau 60–180 ngày trong điều kiện tự nhiên, không để lại vi nhựa hay
            chất độc hại.
          </p>
          <p>
            Túi có thiết kế hộp đứng có đáy và quai xách, sử dụng linh hoạt trong đời sống hằng ngày
            và hoạt động kinh doanh. Hai kích thước chính là 18×23×5 cm và 35×33×8 cm. Quai xách làm
            từ sợi vỏ ngô, đồng chất liệu với thân túi, chắc chắn và bền bỉ. Bề mặt túi hơi thô nhẹ,
            có thể in hình theo yêu cầu (logo, hình ảnh, thông điệp). Túi có thể chịu lực 3–7 kg,
            không mốc trong điều kiện ẩm thường.
          </p>
        </div>
      </section>

      <div className="content">
        <aside className="filters">
          <div className="filters-header">
            <h3>Bộ lọc</h3>
            <button className="link" onClick={resetFilters}>xóa tất cả</button>
          </div>

          <div className="filter-accordion">
            <div className="section">
              <button className="section-header" onClick={() => toggleSection("type")}>
                <span>Loại</span>
                <span className={`chev ${openSections.type ? "open" : ""}`}>▾</span>
              </button>
              <div className={`section-content ${openSections.type ? "open" : ""}`}>
                <label className="checkbox">
                  <input type="checkbox" checked={filters.type.has("trơn")} onChange={() => toggleFilter("type", "trơn")} />
                  <span>Túi trơn</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" checked={filters.type.has("in hình")} onChange={() => toggleFilter("type", "in hình")} />
                  <span>Túi có in hình</span>
                </label>
              </div>
            </div>

            <div className="section">
              <button className="section-header" onClick={() => toggleSection("status")}>
                <span>Tình trạng hàng</span>
                <span className={`chev ${openSections.status ? "open" : ""}`}>▾</span>
              </button>
              <div className={`section-content ${openSections.status ? "open" : ""}`}>
                <label className="checkbox">
                  <input type="checkbox" checked={filters.status.has("còn hàng")} onChange={() => toggleFilter("status", "còn hàng")} />
                  <span>Còn hàng</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" checked={filters.status.has("hết hàng")} onChange={() => toggleFilter("status", "hết hàng")} />
                  <span>Hết hàng</span>
                </label>
              </div>
            </div>

            <div className="section">
              <button className="section-header" onClick={() => toggleSection("size")}>
                <span>Kích thước</span>
                <span className={`chev ${openSections.size ? "open" : ""}`}>▾</span>
              </button>
              <div className={`section-content ${openSections.size ? "open" : ""}`}>
                <label className="checkbox">
                  <input type="checkbox" checked={filters.size.has("nhỏ")} onChange={() => toggleFilter("size", "nhỏ")} />
                  <span>Túi nhỏ (18 × 23 × 5 cm)</span>
                </label>
                <label className="checkbox">
                  <input type="checkbox" checked={filters.size.has("lớn")} onChange={() => toggleFilter("size", "lớn")} />
                  <span>Túi lớn (35 × 33 × 8 cm)</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        <section className="results">
          <div className="active-chips">
            {activeChips.map((c, idx) => (
              <span key={idx} className="chip">{c.k}: {c.v}</span>
            ))}
          </div>

          <div className="grid">
            {filteredProducts.map((p) => (
              <article key={p.id} className="card" onClick={() => navigate("/productdetail", { state: { product: p } })} style={{cursor:"pointer"}}>
                <div className="image">
                  <img src={p.image} alt={p.name} />
                  <button className="quick-view" onClick={(e) => { e.stopPropagation(); navigate("/productdetail", { state: { product: p } }) }}>Xem thêm</button>
                </div>
                <div className="meta">
                  <div className="muted">Loại: {p.name}</div>
                  <div className="muted">Kích thước: {p.size}</div>
                  <div className="price">{p.price.toLocaleString("vi-VN")} đ</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Product



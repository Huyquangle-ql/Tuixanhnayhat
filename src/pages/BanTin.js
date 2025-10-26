import React from "react"
import PageBanner from "../components/PageBanner"
import "./BanTin.css"

const posts = [
  {
    id: 1,
    title: "Top 10 nước xả rác thải nhựa ra biển nhiều nhất, đáng buồn là có VN",
    date: "21/2/2023",
    excerpt: "Mỗi năm toàn thế giới sản xuất ra khoảng 67,5...",
    image: "/images/bantin1.png",
    url: "https://tinhte.vn/thread/top-10-nuoc-xa-rac-thai-nhua-ra-bien-nhieu-nhat-dang-buon-la-co-vn.3636572/",
  },
  {
    id: 2,
    title: "Hà Nội sắp cấm nhựa dùng một lần ở nhà hàng, cà phê trong Vành đai 1",
    date: "13/7/2025",
    excerpt: "Từ tháng 10, Hà Nội được yêu cầu...",
    image: "/images/bantin2.png",
    url: "https://vnexpress.net/ha-noi-sap-cam-nhua-dung-mot-lan-o-nha-hang-ca-phe-trong-vanh-dai-1-4913555.html",
  },
  {
    id: 3,
    title: "Người tiêu dùng có xu hướng gia tăng sử dụng sản phẩm xanh",
    date: "31/10/2024",
    excerpt: "Thông tin từ cuộc khảo sát...",
    image: "/images/bantin3.png",
    url: "https://tapchicongthuong.vn/xu-huong-tieu-dung-xanh-trong-phat-trien-ben-vung-tai-viet-nam-123316.htm",
  },
  {
    id: 4,
    title: "Xu hướng 'tiêu dùng xanh' tạo làn sóng mới trên thị trường",
    date: "05/05/2025",
    excerpt: "Khi người trẻ tiên phong 'sống xanh'...",
    image: "/images/bantin4.png",
    url: "https://congthuong.vn/xu-huong-tieu-dung-xanh-tao-lan-song-moi-tren-thi-truong-386171.html",
  },
  {
    id: 5,
    title: "Doanh nghiệp chuyển đổi sang bao bì sinh học để đáp ứng ESG",
    date: "10/06/2025",
    excerpt: "Các nhãn hàng lớn công bố lộ trình thay thế bao bì nhựa...",
    image: "/images/bantin5.png",
    url: "https://baobihvl.com/bao-bi-pla-buoc-chuyen-tat-yeu-cua-doanh-nghiep-viet-nam-chuyen-doi-xanh-den-nam-2030",
  },
  {
    id: 6,
    title: "Nghiên cứu: Túi sinh học phân hủy sau 90 ngày trong điều kiện tự nhiên",
    date: "22/07/2025",
    excerpt: "Kết quả thử nghiệm tại phòng lab độc lập cho thấy...",
    image: "/images/biodegradable-material.png",
    url: "https://tapchimoitruong.vn/chuyen-muc-3/%C4%90a%CC%81nh-gia%CC%81-kha%CC%89-n%C4%83ng-ph%C3%A2n-hu%CC%89y-sinh-ho%CC%A3c-cu%CC%89a-bao-bi%CC%80-b%C4%83%CC%80ng-ph%C6%B0%C6%A1ng-pha%CC%81p-%C4%91o-%C4%91%C3%B4%CC%A3-gia%CC%89m-kh%C3%B4%CC%81i-l%C6%B0%C6%A1%CC%A3ng-v%C6%A1%CC%81i-quy-tri%CC%80nh-ru%CC%81t-ng%C4%83%CC%81n-th%C6%A1%CC%80i-gian-16385",
  },
]

const recent = posts.slice(0, 4)
const tags = ["Lối sống bền vững", "Mẹo dùng và bảo quản túi", "Tái chế & tiêu dùng xanh", "Tin tức từ TXNH"]

function BanTin() {
  return (
    <div className="bantin-page">
      <PageBanner
        title="BẢN TIN"
        imageUrl="/images/about-banner.png"
      />

      <div className="bantin-layout">
        <section className="feed">
          {posts.map((p) => (
            <article key={p.id} className="news-card">
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                <img className="thumb" src={p.image} alt={p.title} />
              </a>
              <div className="details">
                <h3 className="news-title">
                  <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
                </h3>
                <p className="excerpt">{p.excerpt}</p>
                <div className="meta">Date : {p.date}</div>
              </div>
            </article>
          ))}
        </section>

        <aside className="sidebar">
          <div className="panel">
            <div className="panel-title">PHÂN LOẠI</div>
            <div className="divider" />
            <div className="sub-title">Bài Viết Gần Đây</div>
            <div className="recent-list">
              {recent.map((p) => (
                <div key={p.id} className="recent-item">
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    <img src={p.image} alt={p.title} />
                  </a>
                  <div>
                    <div className="recent-title">
                      <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="divider" />
            <div className="sub-title">Tag</div>
            <ul className="tags">
              {tags.map((t, i) => (
                <li key={i}># {t}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default BanTin



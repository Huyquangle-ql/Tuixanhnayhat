import "./Homepage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Túi Xanh</span>
            <span className="hero-subtitle">cho một hành tinh lành</span>
            <Link to="/product" className="btn hero-btn">
              Tìm hiểu ngay
            </Link>
          </div>

          {/* Hero Gallery Slider */}
          <div className="hero-gallery">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
            >
              <SwiperSlide>
                <img src="/images/slide1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/slide2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/slide3.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/slide4.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/slide5.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section light-bg">
        <div className="container about-section">
          <div className="about-text">
            <h2 className="section-title">
              Giới thiệu về <span>“Túi xanh – Nảy hạt”</span>
            </h2>
            <p>
              “Túi Xanh – Nảy Hạt” là sản phẩm túi sinh học thân thiện với môi
              trường, được tạo nên từ vỏ ngô – một phụ phẩm nông nghiệp thường
              bị lãng quên sau mỗi mùa vụ. Chúng tôi tận dụng phần nguyên liệu
              tưởng như đã kết thúc vòng đời để tạo ra những chiếc túi có thể sử
              dụng mỗi ngày, an toàn cho sức khỏe và thân thiện với môi trường.
            </p>
            <p>
              Mỗi chiếc túi là một cách để kể lại rằng, nếu được trân trọng và
              trao đúng cơ hội, mọi điều giản dị nhất cũng có thể tiếp tục lan
              tỏa và mang lại ý nghĩa tốt đẹp cho cuộc đời.
            </p>
            <Link to="/capabilities" className="btn about-btn">
              Khám phá câu chuyện
            </Link>
          </div>
          <div className="about-image">
            <img src="/images/slide4.jpg" alt="Túi Xanh - Nảy Hạt" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">Nhận xét của khách hàng</h2>
          <div className="testimonial-list">
            <div className="testimonial-card">
              <img
                src="/images/Lương.jpg
                "
                alt="Khách hàng 1"
                className="testimonial-avatar"
              />
              <p className="testimonial-text">
                “Túi rất chắc chắn, dùng đi chợ thoải mái mà không lo rách. Quan
                trọng là thân thiện với môi trường, mình rất thích ý tưởng này.”
              </p>
              <h4 className="testimonial-name">Nguyễn Hiền Lương</h4>
              <span className="testimonial-role">Hiền Hậu, Lương Thiện</span>
            </div>

            <div className="testimonial-card">
              <img
                src="/images/Vanh.jpg"
                alt="Khách hàng 2"
                className="testimonial-avatar"
              />
              <p className="testimonial-text">
                “Sản phẩm đẹp, thiết kế tinh tế và ý nghĩa. Mình đã tặng bạn bè
                và ai cũng ấn tượng.”
              </p>
              <h4 className="testimonial-name">Hồ Trần Vân Anh</h4>
              <span className="testimonial-role">Vanh Leg</span>
            </div>

            <div className="testimonial-card">
              <img
                src="/images/Phương.jpg"
                alt="Khách hàng 3"
                className="testimonial-avatar"
              />
              <p className="testimonial-text">
                “Mình thích nhất là mỗi chiếc túi đều mang thông điệp bảo vệ môi
                trường. Thật sự ý nghĩa và đáng ủng hộ.”
              </p>
              <h4 className="testimonial-name">Đào Thu Phương</h4>
              <span className="testimonial-role">Sóc Sơn không đội mũ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section - ĐÃ CẬP NHẬT */}
      <section className="section light-bg founder-section">
        <div className="container">
          <h2 className="section-title">ĐỘI NGŨ CỦA CHÚNG TÔI</h2>
          <p className="founder-intro">
            Là những người trẻ kể chuyện của đất bằng đôi tay mình – bằng những
            chiếc túi biết tự tan vào thiên nhiên như chưa từng mang gánh nặng
            nào cho môi trường.
          </p>
          <div className="founder-grid">
            {/* --- Thành viên 1 --- */}
            <div className="founder-item">
              <img
                src="/images/Vanh.jpg"
                alt="Hồ Trần Vân Anh"
                className="founder-avatar"
              />
              <h4 className="founder-name">Hồ Trần Vân Anh</h4>
              <p className="founder-role">Founder/CEO</p>
            </div>
            {/* --- Thành viên 2 --- */}
            <div className="founder-item">
              <img
                src="/images/Lương.jpg"
                alt="Nguyễn Hiền Lương"
                className="founder-avatar"
              />
              <h4 className="founder-name">Nguyễn Hiền Lương</h4>
              <p className="founder-role">Founder/COO</p>
            </div>
            {/* --- Thành viên 3 --- */}
            <div className="founder-item">
              <img
                src="/images/Phương.jpg"
                alt="Đào Thị Thu Phương"
                className="founder-avatar"
              />
              <h4 className="founder-name">Đào Thị Thu Phương</h4>
              <p className="founder-role">Founder/CMO</p>
            </div>
            {/* --- Thành viên 4 --- */}
            <div className="founder-item">
              <img
                src="/images/Hiếu.jpg"
                alt="Phạm Đăng Hiếu"
                className="founder-avatar"
              />
              <h4 className="founder-name">Phạm Đăng Hiếu</h4>
              <p className="founder-role">Founder/CTO</p>
            </div>
            {/* --- Thành viên 5 --- */}
            <div className="founder-item">
              <img
                src="/images/Huy1.jpg"
                alt="Lê Quang Huy"
                className="founder-avatar"
              />
              <h4 className="founder-name">Lê Quang Huy</h4>
              <p className="founder-role">Founder/CPO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

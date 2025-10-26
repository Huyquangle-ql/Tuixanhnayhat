import "./About.css";
import PageBanner from "../components/PageBanner";

const About = () => {
  return (
    <div className="about-page">
      {/* Banner */}
      <PageBanner
        title="Túi xanh - Nảy hạt"
        subtitle="Giới thiệu"
        imageUrl="/images/about-banner.png"
      />

      {/* Story Section */}
      <section className="section light-bg">
        <div className="container">
          <div className="story-section">
            <h2>Câu chuyện khởi nguồn</h2>
            <div className="story-content">
              <div className="story-text">
                <p>
                  Ý tưởng về "Túi Xanh - Nảy Hạt" bắt đầu từ những cánh đồng ngô
                  bát ngát, nơi mà ngô hạt là sản phẩm chính, nhưng điều này
                  cũng đồng nghĩa với việc có rất nhiều phụ phẩm từ ngô không
                  được tận dụng hết. Những vỏ chùm, cọc ngô, và những phần thừa
                  khác thường bị vứt bỏ hoặc đốt, gây ô nhiễm môi trường và lãng
                  phí tài nguyên.
                </p>
                <p>
                  Chúng tôi nhận ra rằng có thể biến những phụ phẩm này thành
                  những sản phẩm có giá trị, đồng thời góp phần bảo vệ môi
                  trường. Từ đó, ý tưởng về túi xanh từ ngô đã ra đời - một giải
                  pháp thông minh vừa giải quyết vấn đề chất thải, vừa tạo ra
                  sản phẩm thân thiện với môi trường.
                </p>
              </div>
              <div className="story-image">
                <img src="/images/vongo.jpg" alt="Vỏ ngô nguyên liệu" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="mission-section">
            <div className="mission-image">
              <img src="/images/vongo3.jpg" alt="Sứ mệnh túi xanh" />
            </div>
            <div className="mission-content">
              <h2>Sứ mệnh</h2>
              <p>
                "Túi Xanh - Nảy Hạt" hướng đến việc tạo ra những sản phẩm thân
                thiện với môi trường, góp phần thay đổi thói quen tiêu dùng theo
                hướng bền vững, giảm ô nhiễm và bảo vệ hành tinh xanh. Chúng tôi
                tin rằng mỗi chiếc túi xanh là một bước nhỏ nhưng ý nghĩa trong
                hành trình bảo vệ môi trường và xây dựng tương lai bền vững cho
                thế hệ mai sau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section light-bg">
        <div className="container">
          <div className="vision-section">
            <div className="vision-content">
              <h2>Tầm nhìn</h2>
              <p>
                "Túi Xanh - Nảy Hạt" mong muốn trở thành thương hiệu tiên phong
                tại Việt Nam trong lĩnh vực sản xuất túi sinh học từ nguyên liệu
                tự nhiên, góp phần tạo nên một cộng đồng tiêu dùng có ý thức về
                bảo vệ môi trường. Chúng tôi hướng đến việc mở rộng sản xuất và
                phân phối rộng rãi, đồng thời truyền cảm hứng cho nhiều doanh
                nghiệp khác cùng chung tay bảo vệ hành tinh xanh.
              </p>
            </div>
            <div className="vision-image">
              <img src="/images/vongo4.jpg" alt="Tầm nhìn tương lai xanh" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="values-section">
            <div className="values-image">
              <img src="/images/vongo5.jpg" alt="Sản xuất thủ công" />
            </div>
            <div className="values-content">
              <h2>Giá trị cốt lõi</h2>
              <p>
                Chúng tôi tin rằng những gì mình tạo ra phải có ý nghĩa, phải
                đóng góp tích cực cho xã hội và môi trường. Chúng tôi cam kết
                mang đến những sản phẩm chất lượng cao, an toàn cho sức khỏe con
                người và thân thiện với môi trường.
              </p>
              <p>
                "Túi Xanh - Nảy Hạt" thực hiện sứ mệnh với tinh thần trách nhiệm
                cao, minh bạch trong mọi hoạt động và luôn đặt lợi ích của cộng
                đồng và môi trường lên hàng đầu. Chúng tôi tin rằng sự thành
                công thực sự chỉ đến khi chúng ta có thể góp phần tạo nên một
                thế giới tốt đẹp hơn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section why-choose-section">
        <div className="container">
          <h2 className="section-title">
            Vì sao nên lựa chọn Túi xanh - Nảy hạt?
          </h2>
          <div className="why-choose-grid">
            <div className="why-choose-item">
              <div className="why-choose-image">
                <img
                  src="/images/vongo5.jpg"
                  alt="Túi an toàn cho sức khỏe"
                />
              </div>
              <h3>An toàn cho sức khỏe</h3>
              <p>
                Túi làm từ vỏ ngô tự nhiên, không chứa hóa chất độc hại, không
                vị nhựa – an toàn khi sử dụng hằng ngày.
              </p>
            </div>
            <div className="why-choose-item">
              <div className="why-choose-image">
                <img
                  src="/images/vongo6.jpg"
                  alt="Túi bền và tiện dụng"
                />
              </div>
              <h3>Bền, gọn và tiện dụng</h3>
              <p>
                Túi có độ bền cao, kháng nước nhẹ, dễ gấp gọn và phù hợp với nhu
                cầu sử dụng hằng ngày.
              </p>
            </div>
            <div className="why-choose-item">
              <div className="why-choose-image">
                <img
                  src="/images/vongo7.jpg"
                  alt="Vật liệu phân hủy sinh học"
                />
              </div>
              <h3>Phân hủy tự nhiên</h3>
              <p>
                Sau khi sử dụng, túi có thể tự phân hủy trong điều kiện tự nhiên
                mà không để lại rác thải hay tồn dư độc hại.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="section difference-section light-bg">
        <div className="container">
          <div className="difference-content">
            <div className="difference-text">
              <h2>Sự khác biệt của "Túi xanh - Nảy hạt"</h2>
              <p>
                "Túi Xanh – Nảy Hạt" mang trong mình sự khác biệt bắt đầu từ
                điều giản dị nhất - là sản phẩm được làm từ vỏ ngô tự nhiên,
                không pha nhựa, không chất độc hại, không phủ xanh bằng lời nói.
                Chúng tôi không tạo ra sản phẩm để chỉ đẹp bên ngoài, mà mong
                muốn mỗi chiếc túi đều mang lại cảm giác tin cậy và thân thiện
                trong từng lần sử dụng.
              </p>
              <p>
                Khi vòng đời sử dụng kết thúc, chiếc túi có thể phân hủy trong
                môi trường tự nhiên, không để lại rác thải hay ảnh hưởng lâu
                dài. Mọi thứ bắt đầu và kết thúc một cách nhẹ nhàng, đúng như
                cách nó được tạo ra - từ đất trở về đất.
              </p>
            </div>
            <div className="difference-image">
              <img
                src="/images/slide4.jpg"
                alt="Túi thân thiện môi trường"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

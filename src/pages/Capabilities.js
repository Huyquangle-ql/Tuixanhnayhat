import "./Capabilities.css";
import PageBanner from "../components/PageBanner";

const Capabilities = () => {
  return (
    <div className="capabilities-page">
      <PageBanner
        title="Túi xanh - Nảy hạt"
        subtitle="Túi kể chuyện xanh"
        imageUrl="/images/about-banner.png"
      />

      {/* Journey Section */}
      <section className="section light-bg">
        <div className="container">
          <h2 className="section-title">Hành trình của túi xanh</h2>
          <div className="journey-image">
            <img
              src="/images/corn-field-sunrise-landscape.png"
              alt="Journey of green bags"
            />
          </div>
          <div className="journey-content">
            <p>
              Hành trình của Túi Xanh – Nảy Hạt bắt đầu từ những cánh đồng ngô bạt ngàn, nơi vỏ bắp sau mỗi mùa thu hoạch từng bị coi là phần thừa, nằm lại trên ruộng rồi bị đốt bỏ hoặc mục nát theo thời gian. Nhưng chính từ những phần tưởng như vô dụng ấy, một khởi đầu mới đã được gieo mầm. Những chiếc vỏ ngô được thu gom và chuyển về xưởng – nơi chúng được làm sạch, xử lý theo quy trình tự nhiên, không hóa chất, để trở thành nguyên liệu chính cho một dòng túi hoàn toàn thân thiện với môi trường.
            </p>
            <p>
              Từ đó, Túi Xanh – Nảy Hạt tiếp tục hành trình đến tay người dùng –
              không chỉ là vật chứa đồ vật, mà còn là công cụ kết nối câu chuyện
              thái sinh, một tiếng thở dài sinh và trách nhiệm. Mỗi lần bạn sử
              dụng Túi Xanh – Nảy Hạt, là một lần bạn tiếp nối hành trình ấy,
              góp phần giảm rác thải nhựa, bảo vệ hệ sinh thái, và lan tỏa lối
              sống bền vững đến cộng đồng.
            </p>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Quy trình sản xuất</h2>
          <div className="process-content">
            <p>
              Sau khi được gom từ các vùng trồng ngô, vỏ ngô sẽ được chọn lọc
              cẩn thận, loại bỏ phần bị hư hỏng và tạp chất. Nguyên liệu được
              làm sạch kỹ lưỡng, nhằm giữ nguyên tính chất tự nhiên và đảm bảo
              chất lượng sản phẩm cuối cùng. Đồng thời đảm bảo độ ẩm phù hợp để
              tránh nấm mốc và kéo dài thời gian bảo quản.
            </p>
            <p>
              Khi đã đạt độ khô và vệ sinh mong muốn, nguyên liệu sẽ được đưa
              vào quy trình sản xuất chính. Chúng tôi sử dụng công nghệ hiện đại
              kết hợp với kỹ thuật thủ công để tạo ra những chiếc túi có chất
              lượng tốt nhất. Mỗi hoạt động của quy trình – từ thiết kế, cắt
              xuất, đến truyền thống – đều hướng đến việc giảm thiểu chất sinh
              thái, thúc đẩy kinh tế tuần hoàn và tạo thành những chiếc túi hoàn
              chỉnh với kiểu dáng mộc mạc nhưng độc đáo.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-item">
              <img
                src="/images/quytrinh1.jpg"
                alt="Vỏ ngô nguyên liệu"
              />
            </div>
            <div className="process-item">
              <img src="/images/quytrinh2.jpg" alt="Xử lý vỏ ngô" />
            </div>
            <div className="process-item">
              <img src="/images/quytrinh3.jpg" alt="Nguyên liệu túi" />
            </div>
            <div className="process-item">
              <img src="/images/quytrinh4.jpg" alt="Sản xuất thủ công" />
            </div>
            <div className="process-item">
              <img src="/images/quytrinh5.jpg" alt="Túi hoàn thành" />
            </div>
            <div className="process-item">
              <img
                src="/images/quytrinh6.jpg"
                alt="Bộ sưu tập túi xanh"
              />
            </div>
          </div>

          <div className="process-note">
            <p>
              Không sử dụng hóa chất tẩy rửa. Không phụ gia nhân tạo, quy trình
              sản xuất của "Túi Xanh – Nảy Hạt" giữ trọn bản chất tự nhiên trong
              từng sản phẩm. Đây không chỉ là một sản phẩm, mà còn là minh chứng
              cho một phương thức sản xuất bền vững – nơi mà mỗi bước đều hướng
              đến việc giảm thiểu tác động tiêu cực đến môi trường và gia tăng
              giá trị tái sử dụng.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="section light-bg">
        <div className="container">
          <h2 className="section-title">Cam kết với môi trường</h2>
          <div className="commitment-content">
            <p>
              Túi Xanh – Nảy Hạt không chỉ là sản phẩm thay thế bao bì nhựa, mà
              còn là tuyên ngôn cho một lối sống bền vững – tận dụng vỏ ngô bị
              bỏ phí – để tạo ra giá trị mới không làm cạn kiệt tài nguyên thiên
              nhiên. Chúng tôi cam kết chọn nguyên liệu sử dụng – tận dụng vỏ
              ngô bị bỏ phí – để tạo ra giá trị mới không làm cạn kiệt tài
              nguyên thiên nhiên.
            </p>
            <p>
              Mỗi hoạt động của chúng tôi đều hướng đến mục tiêu giảm thiểu chất
              thải, không gây ô nhiễm và có thể tái chế hoàn toàn. Chúng tôi tin
              rằng mỗi chiếc túi không chỉ mang lại tiện ích cho người dùng mà
              còn góp phần tạo nên một hành tinh xanh sạch hơn cho thế hệ tương
              lai.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;

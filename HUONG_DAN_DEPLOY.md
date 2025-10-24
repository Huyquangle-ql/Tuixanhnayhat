# 📚 HƯỚNG DẪN DEPLOY WEBSITE LÊN NETLIFY

## 🎯 Tổng quan
File này hướng dẫn bạn cách đẩy code lên Git và deploy website lên Netlify một cách đơn giản và nhanh chóng.

---

## 📋 Yêu cầu hệ thống
- ✅ Git đã được cài đặt
- ✅ Node.js và npm đã được cài đặt
- ✅ Netlify CLI đã được cài đặt
- ✅ Tài khoản GitHub và Netlify

---

## 🚀 CÁCH 1: Deploy tự động qua GitHub (Khuyến nghị)

### Bước 1: Kiểm tra thay đổi
```bash
git status
```

### Bước 2: Thêm các file đã thay đổi
```bash
# Thêm tất cả file đã thay đổi
git add .

# Hoặc thêm file cụ thể
git add src/pages/Product.js
```

### Bước 3: Commit thay đổi
```bash
git commit -m "Mô tả thay đổi của bạn"
```

**Ví dụ:**
```bash
git commit -m "Update product price and add new images"
git commit -m "Fix responsive design for mobile"
git commit -m "Add new product category"
```

### Bước 4: Push lên GitHub
```bash
git push origin main
```

### Bước 5: Netlify tự động deploy
- Netlify sẽ tự động phát hiện thay đổi từ GitHub
- Quá trình build và deploy sẽ diễn ra tự động
- Thời gian: 2-5 phút

**🌐 Website sẽ được cập nhật tại:** https://tuixanhnayhat.netlify.app

---

## ⚡ CÁCH 2: Deploy thủ công qua Netlify CLI (Nhanh hơn)

### Bước 1-4: Giống như Cách 1
Thực hiện các bước 1-4 như trên để commit và push code.

### Bước 5: Deploy trực tiếp lên Netlify
```bash
# Deploy lên production
netlify deploy --prod

# Hoặc deploy preview (để test trước)
netlify deploy
```

**Ưu điểm:** Nhanh hơn, có thể xem kết quả ngay lập tức

---

## 🔧 CÁC LỆNH HỮU ÍCH

### Kiểm tra trạng thái
```bash
# Kiểm tra trạng thái git
git status

# Kiểm tra trạng thái Netlify
netlify status

# Xem lịch sử commit
git log --oneline -5
```

### Xem thay đổi
```bash
# Xem thay đổi chưa commit
git diff

# Xem thay đổi của file cụ thể
git diff src/pages/Product.js
```

### Khôi phục thay đổi
```bash
# Khôi phục file về trạng thái trước đó
git restore src/pages/Product.js

# Khôi phục tất cả thay đổi
git restore .
```

---

## 📁 CẤU TRÚC PROJECT

```
tui-xanh-website/
├── src/
│   ├── pages/
│   │   ├── Product.js          # Trang sản phẩm
│   │   ├── ProductDetail.js    # Chi tiết sản phẩm
│   │   └── ...
│   ├── components/
│   └── ...
├── public/
│   └── images/                 # Hình ảnh sản phẩm
├── build/                      # Thư mục build (tự động tạo)
├── netlify.toml               # Cấu hình Netlify
└── package.json
```

---

## 🎨 CÁC THAY ĐỔI THƯỜNG GẶP

### 1. Thay đổi giá sản phẩm
```javascript
// Trong src/pages/Product.js
const PRODUCTS = [
  {
    id: "flat-small",
    name: "Túi trơn",
    price: 35000,  // ← Thay đổi giá ở đây
    // ...
  }
];
```

### 2. Thêm sản phẩm mới
```javascript
// Thêm object mới vào mảng PRODUCTS
{
  id: "new-product",
  name: "Tên sản phẩm mới",
  price: 50000,
  image: "/images/new-product.jpg",
  type: "trơn",
  status: "còn hàng",
  size: "Trung bình"
}
```

### 3. Thay đổi hình ảnh
1. Thêm file hình ảnh vào `public/images/`
2. Cập nhật đường dẫn trong code:
```javascript
image: "/images/ten-hinh-moi.jpg"
```

---

## 🚨 XỬ LÝ LỖI THƯỜNG GẶP

### Lỗi: "fatal: not a git repository"
```bash
# Khởi tạo git repository
git init
```

### Lỗi: "nothing to commit, working tree clean"
- Có nghĩa là không có thay đổi nào để commit
- Kiểm tra lại file đã được lưu chưa

### Lỗi: "Permission denied"
```bash
# Kiểm tra kết nối GitHub
git remote -v

# Nếu cần, cập nhật token GitHub
```

### Website không cập nhật
```bash
# Kiểm tra project Netlify đúng chưa
netlify status

# Deploy lại thủ công
netlify deploy --prod
```

---

## 📞 THÔNG TIN LIÊN HỆ

- **GitHub Repository:** https://github.com/Huyquangle-ql/Tuixanhnayhat
- **Website chính:** https://tuixanhnayhat.netlify.app
- **Netlify Dashboard:** https://app.netlify.com/projects/tuixanhnayhat

---

## 💡 MẸO HỮU ÍCH

1. **Luôn kiểm tra `git status`** trước khi commit
2. **Sử dụng commit message rõ ràng** để dễ theo dõi
3. **Test trên local** trước khi deploy: `npm start`
4. **Kiểm tra build** trước khi deploy: `npm run build`
5. **Backup code** trước khi thay đổi lớn

---

## 🎯 QUY TRÌNH NHANH (Tóm tắt)

```bash
# 1. Kiểm tra thay đổi
git status

# 2. Thêm file
git add .

# 3. Commit
git commit -m "Mô tả thay đổi"

# 4. Push lên GitHub
git push origin main

# 5. Deploy lên Netlify (tùy chọn)
netlify deploy --prod
```

**🎉 Xong! Website đã được cập nhật!**

---

*Tạo bởi: AI Assistant*  
*Cập nhật lần cuối: $(date)*

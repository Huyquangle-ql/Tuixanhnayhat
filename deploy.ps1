# ========================================
#    HUONG DAN DEPLOY WEBSITE TU XANH
# ========================================

Write-Host "========================================" -ForegroundColor Green
Write-Host "    HUONG DAN DEPLOY WEBSITE TU XANH" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Bước 1: Kiểm tra trạng thái git
Write-Host "[1/5] Kiem tra trang thai git..." -ForegroundColor Yellow
git status
Write-Host ""

# Bước 2: Thêm tất cả file đã thay đổi
Write-Host "[2/5] Them tat ca file da thay doi..." -ForegroundColor Yellow
git add .
Write-Host ""

# Bước 3: Nhập mô tả thay đổi
Write-Host "[3/5] Nhap mo ta thay doi:" -ForegroundColor Yellow
$commitMessage = Read-Host "Commit message (hoac nhan Enter de su dung mo ta mac dinh)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update website content"
}
Write-Host ""

# Bước 4: Commit thay đổi
Write-Host "[4/5] Commit thay doi..." -ForegroundColor Yellow
git commit -m $commitMessage
Write-Host ""

# Bước 5: Push lên GitHub
Write-Host "[5/5] Push len GitHub..." -ForegroundColor Yellow
git push origin main
Write-Host ""

Write-Host "========================================" -ForegroundColor Green
Write-Host "    DEPLOY HOAN THANH!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Website: https://tuixanhnayhat.netlify.app" -ForegroundColor Cyan
Write-Host ""

# Hỏi có muốn deploy trực tiếp lên Netlify không
$deployNetlify = Read-Host "Ban co muon deploy truc tiep len Netlify? (y/n)"
if ($deployNetlify -eq "y" -or $deployNetlify -eq "Y") {
    Write-Host ""
    Write-Host "Dang deploy len Netlify..." -ForegroundColor Yellow
    netlify deploy --prod
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "    DEPLOY NETLIFY HOAN THANH!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
}

Write-Host ""
Write-Host "Nhan phim bat ky de thoat..." -ForegroundColor Gray
Read-Host

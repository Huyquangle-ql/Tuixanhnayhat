@echo off
echo ========================================
echo    HUONG DAN DEPLOY WEBSITE TU XANH
echo ========================================
echo.

echo [1/5] Kiem tra trang thai git...
git status
echo.

echo [2/5] Them tat ca file da thay doi...
git add .
echo.

echo [3/5] Nhap mo ta thay doi (hoac nhan Enter de su dung mo ta mac dinh):
set /p commit_message="Commit message: "
if "%commit_message%"=="" set commit_message=Update website content

echo.
echo [4/5] Commit thay doi...
git commit -m "%commit_message%"
echo.

echo [5/5] Push len GitHub...
git push origin main
echo.

echo ========================================
echo    DEPLOY HOAN THANH!
echo ========================================
echo.
echo Website: https://tuixanhnayhat.netlify.app
echo.
echo Ban co muon deploy truc tiep len Netlify? (y/n)
set /p deploy_netlify="Chon: "
if /i "%deploy_netlify%"=="y" (
    echo.
    echo Dang deploy len Netlify...
    netlify deploy --prod
    echo.
    echo ========================================
    echo    DEPLOY NETLIFY HOAN THANH!
    echo ========================================
)

echo.
echo Nhan phim bat ky de thoat...
pause >nul

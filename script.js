// =========================================================
// 1. QUẢN LÝ DỮ LIỆU BANNER (Kiểu dữ liệu Array & Object)
// =========================================================
const bannerData = [
    {
        src: "bn1.png",
        text: "BST Thu Đông – Thanh lịch & Tinh tế",
        promo: "New Arrivals 2026"
    },
    {
        src: "bn2.png",
        text: "Phong cách Minimalism – Khẳng định bản thân",
        promo: "Mua 2 tặng 1 ngay hôm nay"
    },
    {
        src: "bn5.jpg",
        text: "Nhẹ nhàng như chính phong cách của bạn",
        promo: "BST pastel mới đã lên kệ" 
    },
    {
        src: "bn7.jpg",
        text: "Thanh lịch trong từng đường nét",
        promo: "Thiết kế chọn lọc – Số lượng giới hạn"
    },
];

let currentIndex = 0;

// =========================================================
// 2. HÀM XỬ LÝ CHUYỂN ĐỔI BANNER (HTML DOM & Functions)
// =========================================================
function rotateBanner() {
    const bannerImg = document.querySelector('.banner-container img');
    const bannerTitle = document.querySelector('.banner-overlay h2') || document.querySelector('.banner-title');

    if (bannerImg && bannerTitle) {
        // Cú pháp chia lấy dư (%) để tạo vòng lặp vô hạn
        currentIndex = (currentIndex + 1) % bannerData.length;

        // Hiệu ứng mờ dần qua DOM Style
        bannerImg.style.opacity = "0";
        bannerTitle.style.opacity = "0";

        setTimeout(() => {
            // Cập nhật nội dung mới bằng Template Strings
            bannerImg.src = bannerData[currentIndex].src;
            
            bannerTitle.innerHTML = `
                ${bannerData[currentIndex].text} 
                <br> 
                <span style="color: #ffce3d; font-size: 1.2em; font-weight: bold;">
                    ${bannerData[currentIndex].promo}
                </span>
            `;
            
            // Hiển thị lại
            bannerImg.style.opacity = "1";
            bannerTitle.style.opacity = "1";
        }, 500); 
    }
}

// Tự động chạy mỗi 4 giây (Sự kiện thời gian)
setInterval(rotateBanner, 4000);


// =========================================================
// 3. XỬ LÝ TÌM KIẾM ĐIỀU HƯỚNG (Event Handling & Logic)
// =========================================================
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function handleSearch() {
    // Lấy giá trị từ DOM, chuyển chữ thường và xóa khoảng trắng
    const query = searchInput.value.toLowerCase().trim(); 

    if (query === "") {
        alert("Vui lòng nhập từ khóa tìm kiếm!");
        return;
    }

    // Logic điều hướng dựa trên từ khóa (Phần bạn sẽ Demo)
    if (query.includes("shop") || query.includes("áo") || query.includes("quần") || query.includes("váy")) {
        window.location.href = "shop.html"; 
    } 
    else if (query.includes("tin tức") || query.includes("news") || query.includes("sale")) {
        window.location.href = "news.html"; 
    }
    else if (query.includes("blog") || query.includes("about") || query.includes("liên hệ")) {
        window.location.href = "https://ntramy6126-hue.github.io/pgae/"; 
    }
    else {
        // Mặc định nếu không khớp từ khóa đặc biệt
        window.location.href = "shop.html"; 
    }
}

// Lắng nghe sự kiện Click (Xử lý sự kiện)
if (searchBtn) {
    searchBtn.addEventListener('click', handleSearch);
}

// Lắng nghe sự kiện nhấn phím Enter (Xử lý sự kiện bàn phím)
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}
// BT1:tính tiền lương

let tinhTongLuong = document.getElementById('btnTinhtien');
tinhTongLuong.onclick = function () {
    // input: tiền lương 1 ngày, số ngày làm.
    let tienLuong = document.getElementById('tienLuong1ngay').value;
    let soNgayLam = document.getElementById('soNgaylam').value;
    // output Tổng lương
    let tongLuong = 0;
    // progress
    tongLuong = tienLuong * soNgayLam;
    document.getElementById('tongLuong').innerHTML = tongLuong.toLocaleString();







}

// BT2: tính giá trị trung bình của 5 số

let tinhTrungBinh = document.getElementById('btnTinhTrungBinh');
tinhTrungBinh.onclick = function () {
    // input: nhập 5 số
    let soMot = document.getElementById('soThuNhat').value;
    let soHai = document.getElementById('soThuHai').value;
    let soBa = document.getElementById('soThuBa').value;
    let soBon = document.getElementById('soThuTu').value;
    let soNam = document.getElementById('sothuNam').value;
    // output: giá trị trung bình của 5 số
    let giaTriTrungBinh = 0;
    // progress
    giaTriTrungBinh = (+soMot + +soHai + +soBa + +soBon + +soNam) / 5;
    document.getElementById('trungBinh').innerHTML = giaTriTrungBinh;





}
// BT3: Đổi tiền

let quyDoiTien = document.getElementById('btnQuyDoiTien');
quyDoiTien.onclick = function () {
    // input: nhập số tiền đô la và giá trị mặc định 1 usd = 23500 VNĐ.
    let tienDo = document.getElementById('soTienDo').value;
    let a = 23500;
    // output: Số tiền quy đổi
    let soTienQuyDoi = 0;
    // progress
    soTienQuyDoi = tienDo * a;
    document.getElementById('doiTien').innerHTML = soTienQuyDoi.toLocaleString();


}
// BT4: Tính chu vi và diện tích hình chữ nhật

let tagTinh = document.getElementById('btnTinh');
tagTinh.onclick = function () {
    // input: nhập chiều dài, chiều rộng
    let tagChieuDai = document.getElementById('chieuDai').value;
    let tagChieuRong = document.getElementById('chieuRong').value;
    // output: chu vi và diện tích
    let chuVi = 0;
    let dienTich = 0;
    // progress
    chuVi = (+tagChieuDai + +tagChieuRong) * 2;
    dienTich = tagChieuDai * tagChieuRong;
    document.getElementById('tinhPS').innerHTML = 'Chu vi :' + chuVi + ' - Diện tích :' + dienTich;
}
// BT5: Tính tổng 2 kí số

let tagTinhTong = document.getElementById('btnTinhTong');
tagTinhTong.onclick = function () {
    // input: nhập số có 2 chữ số
    let soHaiChuSo = document.getElementById('haiChuSo').value;
    // output: Tổng 2 kí số
    let tongHaiKiso = 0;
    // progress
    let hangChuc = Math.floor( +soHaiChuSo / 10);
    let hangDonvi = +soHaiChuSo % 10;
    tongHaiKiso = hangChuc +  hangDonvi;
    document.getElementById('tinhTong').innerHTML = tongHaiKiso;
   
}


let arr = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"]
let a = 55
let kq = '';
let hangDonVi = a % 10;
let hangChuc = Math.floor(a / 10)
if (hangChuc <= 1) {
    if (hangDonVi === 5) kq = 'Muời lăm';
    if (hangDonVi !== 0) kq = 'Mươi ' + arr[hangDonVi];
    if (hangDonVi === 0) kq = 'Mười'
} else {
    kq = arr[hangChuc] + " mươi ";
    if (hangDonVi === 1) kq += "Mốt"
    else if (hangDonVi === 4) kq += " Tư"
    else if (hangDonVi === 5) kq += " lăm"
    else if (hangDonVi > 0) kq += arr[hangDonVi]

}
console.log(kq)
const products = [
  {
    title: "ของแท้100%OLLIEครีมกำจัดขน70มล.ใช้ได้ทุกจุดปลอดภัยไม่เจ็บ ผิวเรียบเนียนทันที",
    price: "฿88.00 ฿211.00 ",
    image: "a/1.jpg",
    url: "https://s.shopee.co.th/9fJBOrvOOE"
  },
  {
    title: "ครีมกันแดดเวนิต้า VENITA + VENITA ANTI-ACNE PORE TIGHTENING ESSENCE TONER 150 ML",
    price: "฿330.00",
    image: "a/2.jpg",
    url: "https://s.shopee.co.th/4fuVTosFwp"
  },
  {
    title: "โปรโมชั่นสุดคุ้ม (ซื้อ 2 แถม 2 ) FEALI ครีมกันแดด UV Serum Sunscreen SPF50+ PA+++",
    price: "฿250.00",
    image: "a/3.png",
    url: "https://s.shopee.co.th/6VM9feDQUW"
  },
  {
    title: "ร้านบริษัท] KOTA KERATIN TREATMENT ทรีทเม้นท์เคารา ติน บำรุงเข้มข้น ผมนุ่มลื่น กลิ่นหอม ลดการหลุดร่วง",
    price: "฿139.00",
    image: "a/4.png",
    url: "https://s.shopee.co.th/1BKdKjOiCS"
  },
  {
    title: "Hydrating Mineral Sunscreen Face SPF50 75ml กันแดดมิเนอรัลสำหรับผิวหน้า เนื้อบางเบา",
    price: "฿189.00",
    image: "a/5.png",
    url: "https://s.shopee.co.th/7AbqTtUC1u"
  },
  {
    title: "CLEAR NOSE UV Sun Serum SPF50+ PA++++ Sun Booster 80ml.",
    price: "฿350.00",
    image: "a/6.png",
    url: "https://s.shopee.co.th/111D9RyfWv"
  },
  {
    title: "ครีมอาบน้ำผิวขาว ครีมอาบน้ำนมแพะ สบู่ตัวขาว 800ml ทำความสะอาดผิว กันเหงื่อ ผิวกระจ่างใส บำรุงให้ผิวขาวก...",
    price: "฿299.00 ฿1,049.00",
    image: "a/7.png",
    url: "https://s.shopee.co.th/1Le3YDxtji"
  },
  {
    title: "POPASKIN 577 + 377 Brightening Serum เซรั่มผิวขาว ลดรอยสิว จุดด่างดำ ฝ้า กระ",
    price: "฿499.00",
    image: "a/8.png",
    url: "https://s.shopee.co.th/20tkLs2O4s"
  },
  {
    title: "กันแดดโทนอัพผิวลูกคุณ Charmiss Paradise Island UV Body Serum Tone Up SPF50+ PA++++ 10...",
    price: "฿249.00",
    image: "a/9.png",
    url: "https://s.shopee.co.th/8AUNhVbdV0"
  },
  {
    title: "สบู่ลดกลิ่นคนแก่ กลิ่นตัวแรง กลิ่นฮอร์โมน กลิ่นตัวผู้ใหญ่ กลิ่นหลังใบหู สบู่ลูกพลับญี่ปุ่น pH5 Balansy 30+",
    price: "฿439.00",
    image: "a/10.png",
    url: "https://s.shopee.co.th/6AjJMh4twI"
  },
  {
    title: "แชมพูและครีมนวดผม Extra care Shampoo and Conditioner",
    price: "฿460.00",
    image: "a/11.png",
    url: "https://s.shopee.co.th/4qDvxKIJF4"
  },
  {
    title: "Merrezca moisture Lip Oil ลิปออยล์ บำรุงริมฝีปากให้ ชุ่มชื้น เงางาม ฉ่ำโกลว์",
    price: "฿249.00",
    image: "a/12.png",
    url: "https://s.shopee.co.th/9pcbuj2LG3"
  },
  {
    title: "2 ขวด แถม 2 ขวด ขนาดทดลอง ครีมอาบน้ำลดสิวแผ่น หลังและลำตัว ลดสิวอุดตัน DEOdore'สีเขียว",
    price: "฿598.00",
    image: "a/13.png",
    url: "https://s.shopee.co.th/8fQeWnsfjM"
  },
  {
    title: "ครีมอาบน้ำลดสิวแผ่นหลังและลำตัว สูตรลดรอย สิว DEOdore' shower cream Brightening",
    price: "฿777.00",
    image: "a/14.png",
    url: "https://s.shopee.co.th/7fY7L7KgYl"
  },
  {
    title: "APEX-SX WHITE UP CREAM ครีมทารักแร้ขาว โดยแพทย์ ผิวหนังเอเพ็กซ์ ทาขาหนีบดำ แก้มก้นดำ 50 ml.",
    price: "฿990.00",
    image: "a/15.png",
    url: "https://s.shopee.co.th/8V7EL311MY"
  },
  {
    title: "บอดี้สเปรย์ ลดกลิ่นตัวแรง กำจัดทุกกลิ่นกาย ทุกเพศ/ วัย กลิ่นคนแก่ จากลูกพลับญี่ปุ่น pH4 -บาลานซี่ 30+Anti ...",
    price: "฿469.00",
    image: "a/16.png",
    url: "https://s.shopee.co.th/1BKdbjpurN"
  },
  {
    title: "APEX-SX FEMM SERUM เซรั่มบำรุงให้ผิวน้องสาว สวย สุขภาพดี 50 ml.",
    price: "฿1,490.00",
    image: "a/17.png",
    url: "https://s.shopee.co.th/4AyFBM6Fc5"
  },
  {
    title: "Eucerin SPOTLESS BRIGHTENING THIAMIDOL BOOSTER SERUM 30 ML",
    price: "฿2,250.00",
    image: "a/18.png",
    url: "https://s.shopee.co.th/9AMvAQOVFW"
  },
  {
    title: "Banala Lite อุปกรณ์ช่วยนอนหลับ หลับง่าย หลับลึก หลับ สนิท ตื่นสดชื่นด้วยนวัตกรรมคลื่นเสียงอัจฉริยะ",
    price: "฿1,790.00",
    image: "a/19.png",
    url: "https://s.shopee.co.th/4Vb5bxPgxE"
  },
  {
    title: "ANCHI Electric bike จักรยานไฟฟ้า 580W วิ่งได้ เวลาใช้ งานแบตเตอรี่นาน เหมาะสำหรับผู้ใหญ่ นักเรียน ปลอดภัย",
    price: "฿9,298.00 ฿10,458.00",
    image: "a/20.png",
    url: "https://s.shopee.co.th/7VEhBd6enC"
  },
  {
    title: "สินค้าขายดี]นีเวีย ลูมินัส630 สกิน โกลว์ เซรั่ม เซรั่มผิวใส เซรั่มทาหน้า30 มล.2 ชิ้นNIVEA",
    price: "฿892.00",
    image: "a/21.png",
    url: "https://s.shopee.co.th/6pz0ObEJcc"
  },
  {
    title: "หัวเชื้อแมวมิ้น แมวดำ/วีไอพี",
    price: "฿590.00",
    image: "a/22.png",
    url: "https://s.shopee.co.th/7fY8UlAdvf"
  },
  {
    title: "Eucerin pH5 VERY DRY SENSITIVE SKIN SHOWER OIL 400 ML ออยล์อาบน้ำผสมน้ำมัน สำหรับผิวแห้งมาก บ...",
    price: "฿718.00",
    image: "a/23.png",
    url: "https://s.shopee.co.th/1BKelV0cp0"
  },
  {
    title: "MizuMi UV Water Serum SPF50+ PA+++ + 40g No.1 Best Selling Sunscreen เซรั่มกันแดด บา...",
    price: "฿800.00",
    image: "a/24.png",
    url: "https://s.shopee.co.th/LlXmDAwBk"
  },
  {
    title: "Adidas รองเท้าวิ่ง Adizero Evo SL Shoes 2026 KI7354",
    price: "฿4,382.00",
    image: "a/25.png",
    url: "https://s.shopee.co.th/9AMwIismjG"
  },
  {
    title: "การ์นิเย่ ไมเซล่าฝาชมพู คลีนซิ่ง วอเตอร์ เซน ซิทีฟ สกิน 400มล GARNIER MICELLAR CLEANSING ...",
    price: "฿529.00",
    image: "a/26.png",
    url: "https://s.shopee.co.th/2qSslYre9S"
  },
  {
    title: "MizuMi Dry Rescue Intense Melt-In Cream 45m มอยส์เจอร์ไรเซอร์สำหรับผิวแห้ง ผิวแห้งมาก ผิวขาด",
    price: "฿379.00",
    image: "a/27.png",
    url: "https://s.shopee.co.th/8AUP7xJlv8"
  },
  {
    title: "นูโทรจีนา เจลอาบน้ำ เรนบาธ 473 มล. x2 Neutrogena Rainbath Shower and Bath Gel",
    price: "฿690.00",
    image: "a/28.png",
    url: "https://s.shopee.co.th/8AUP86Fiwk"
  },
  {
    title: "Bioderma Sensibio H2O ไมเซล่าคลีนซิ่งวอเตอร์ สำหรับ ผิวแพ้ ระคายง่าย 500 มล. ฝาธรรมดา 2 ขวด",
    price: "฿1,589.00",
    image: "a/29.png",
    url: "https://s.shopee.co.th/6ffbLVtToV"
  },
  {
    title: "นูโทรจีนา ออยบำรุงผิว บอดี้ ออยล์ ไลท์ เซซา มี่ 250 มล. x 2 Neutrogena Body Oil Light Sesame...",
    price: "฿1,045.00",
    image: "a/30.png",
    url: "https://s.shopee.co.th/7AbrwYXVC5"
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿330.00",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿330.00",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿330.00",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿330.00",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿330.00",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿330.00",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿330.00",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿330.00",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿330.00",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
  {
    title: "แชมพูสมุนไพร",
    price: "฿199",
    image: "2.jpg",
    url: "https://..."
  },
  {
    title: "เซรั่มบำรุงผม",
    price: "฿259",
    image: "3.jpg",
    url: "https://..."
  },
];

let html = "";

products.forEach(product => {
  html += `
    <div class="card">
      <img src="${product.image}">
      <div class="info">
        <div class="title">${product.title}</div>
        <div class="price">${product.price}</div>
        <a class="button" href="${product.url}" target="_blank">
          ดูสินค้า
        </a>
      </div>
    </div>
  `;
});

document.getElementById("ads").innerHTML = html;

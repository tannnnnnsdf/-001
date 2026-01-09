เริ่มจากศูนย์: เชื่อม Google Form แบบสวย (ไม่ใช้ backend)

สิ่งที่ต้องมี:
1) Google Form (สร้างใหม่)
2) เว็บ HTML ธรรมดา หรือ GitHub Pages

ขั้นตอนสั้นที่สุด:
1) สร้าง Google Form (ชื่อ + คำอธิษฐาน)
2) เปิดฟอร์ม → กรอกตัวอย่าง → กด Submit
3) เปิด DevTools → Network → หา request ชื่อ formResponse
4) ดู Payload → จะเห็น entry.xxxxxx
5) เอา entry.xxxxxx ใส่ใน script.js

ไฟล์ในโฟลเดอร์นี้:
- index.html  : หน้าเว็บฟอร์มสวย
- style.css   : ดีไซน์
- script.js   : ส่งข้อมูลเข้า Google Form

หมายเหตุ:
- ไม่ต้องหา entry จาก View Source
- ใช้วิธี Network เท่านั้น (ชัวร์ 100%)

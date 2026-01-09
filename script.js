// STEP 1: ใส่ FORM_ID ของคุณ
const FORM_ID = "1FAIpQLSfERRKmdLLn6jOKcQw_j2UEvBCzZ69Uge0yVDP-KMNBuwSJog";

// STEP 2: สร้าง URL สำหรับส่งข้อมูล
const FORM_URL =
  `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

// STEP 3: ใส่ entry.xxxxxx จาก Network (formResponse Payload)
const ENTRY_NAME = "entry.1010176954";
const ENTRY_PRAYER = "entry.359817428";

document.getElementById("prayerForm").addEventListener("submit", e => {
  e.preventDefault();

  const data = new FormData();
  data.append(ENTRY_NAME, e.target.name.value);
  data.append(ENTRY_PRAYER, e.target.prayer.value);

  fetch(FORM_URL, {
    method: "POST",
    mode: "no-cors",
    body: data
  });

  document.getElementById("msg").textContent =
    "ขอบคุณสำหรับคำอธิษฐาน 🙏";

  e.target.reset();
});

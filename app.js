const A = "assets/extracted/";
const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image });

const sections = [
  {
    "letter": "A",
    "title": "Circle the correct words.",
    "note": "Chọn từ đúng để hoàn thành từng câu.",
    "points": 3,
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1. I don't like this movie. It's ___.",
        "options": [
          "boring",
          "interesting"
        ],
        "answers": [
          "boring"
        ],
        "explanation": "Người nói không thích bộ phim, nên bộ phim gây chán: boring.",
        "image": ""
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2. It's ___ now. Let's take a nap.",
        "options": [
          "noisy",
          "quiet"
        ],
        "answers": [
          "quiet"
        ],
        "explanation": "Muốn ngủ một giấc thì nơi đó cần yên tĩnh: quiet.",
        "image": ""
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3. Be careful. It isn't ___.",
        "options": [
          "dangerous",
          "safe"
        ],
        "answers": [
          "safe"
        ],
        "explanation": "Be careful có nghĩa là hãy cẩn thận. Câu đầy đủ là It isn't safe (không an toàn).",
        "image": ""
      }
    ]
  },
  {
    "letter": "B",
    "title": "Look and complete the words.",
    "note": "Quan sát tranh và điền các chữ cái còn thiếu để hoàn thành từ.",
    "points": 4,
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "1. w _ _ l _",
        "answers": [
          "world"
        ],
        "explanation": "Tranh vẽ Trái Đất. World nghĩa là thế giới.",
        "image": "assets/extracted/page1-img2-472x338.png"
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "2. t _ _   c o _ _ t _ _",
        "answers": [
          "the country"
        ],
        "explanation": "Tranh có cánh đồng và ít nhà cửa. The country nghĩa là vùng nông thôn.",
        "image": "assets/extracted/page1-img7-475x340.png"
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "3. b _ _ l _ _ _ _",
        "answers": [
          "building"
        ],
        "explanation": "Tranh vẽ một tòa nhà lớn. Building nghĩa là tòa nhà.",
        "image": "assets/extracted/page1-img3-469x336.png"
      },
      {
        "id": "B4",
        "type": "input",
        "prompt": "4. n _ _ _ _ b _ _ h _ _ _",
        "answers": [
          "neighborhood",
          "neighbourhood"
        ],
        "explanation": "Tranh vẽ nhiều ngôi nhà ở cùng một khu. Neighborhood nghĩa là khu phố.",
        "image": "assets/extracted/page1-img8-459x328.png"
      }
    ]
  },
  {
    "letter": "C",
    "title": "Listen and check the correct pictures. Circle the correct words.",
    "note": "Mỗi mục có hai ý: nghe để chọn tranh a hoặc b, sau đó chọn đúng dạng danh từ hoặc động từ.",
    "points": 6,
    "audio": "assets/audio/Listening-C.mp3",
    "sectionImage": "assets/extracted/section-c-listening.jpg",
    "questions": [
      {
        "id": "C1",
        "type": "choice",
        "prompt": "1a. Choose the correct picture for item 1.",
        "options": [
          "picture a",
          "picture b"
        ],
        "answers": [
          "picture a"
        ],
        "explanation": "Audio nói về plant với nghĩa danh từ. Tranh a có các cây đang mọc trong mưa.",
        "image": ""
      },
      {
        "id": "C2",
        "type": "choice",
        "prompt": "1b. Choose the correct word form.",
        "options": [
          "plant (noun)",
          "plants (verb)"
        ],
        "answers": [
          "plant (noun)"
        ],
        "explanation": "Plant chỉ một sự vật, nên đó là danh từ: plant (noun).",
        "image": ""
      },
      {
        "id": "C3",
        "type": "choice",
        "prompt": "2a. Choose the correct picture for item 2.",
        "options": [
          "picture a",
          "picture b"
        ],
        "answers": [
          "picture b"
        ],
        "explanation": "Audio dùng waters với nghĩa tưới cây. Tranh b cho thấy một người đang tưới hoa.",
        "image": ""
      },
      {
        "id": "C4",
        "type": "choice",
        "prompt": "2b. Choose the correct word form.",
        "options": [
          "water (noun)",
          "waters (verb)"
        ],
        "answers": [
          "waters (verb)"
        ],
        "explanation": "Waters diễn tả hành động tưới cây, nên đó là động từ.",
        "image": ""
      },
      {
        "id": "C5",
        "type": "choice",
        "prompt": "3a. Choose the correct picture for item 3.",
        "options": [
          "picture a",
          "picture b"
        ],
        "answers": [
          "picture b"
        ],
        "explanation": "Audio dùng snows để nói trời có tuyết rơi. Tranh b cho thấy tuyết đang rơi quanh ghế.",
        "image": ""
      },
      {
        "id": "C6",
        "type": "choice",
        "prompt": "3b. Choose the correct word form.",
        "options": [
          "snow (noun)",
          "snows (verb)"
        ],
        "answers": [
          "snows (verb)"
        ],
        "explanation": "Snows diễn tả hiện tượng tuyết rơi, nên đó là động từ.",
        "image": ""
      }
    ]
  },
  {
    "letter": "D",
    "title": "Look and complete the phrases. Use the names in the pictures.",
    "note": "Quan sát tên của từng bạn rồi dùng dạng sở hữu để hoàn thành cụm từ.",
    "points": 4,
    "questions": [
      {
        "id": "D1",
        "type": "input",
        "prompt": "1. ___ apartment",
        "answers": [
          "emily's"
        ],
        "explanation": "Căn hộ thuộc về Emily, nên thêm 's vào tên: Emily's apartment.",
        "image": "assets/extracted/page2-img1-595x301.png"
      },
      {
        "id": "D2",
        "type": "input",
        "prompt": "2. ___ neighborhood",
        "answers": [
          "jack's"
        ],
        "explanation": "Khu phố thuộc về Jack, nên viết Jack's neighborhood.",
        "image": "assets/extracted/page2-img4-601x301.png"
      },
      {
        "id": "D3",
        "type": "input",
        "prompt": "3. ___ home",
        "answers": [
          "max's"
        ],
        "explanation": "Ngôi nhà thuộc về Max, nên viết Max's home.",
        "image": "assets/extracted/page2-img2-639x320.png"
      },
      {
        "id": "D4",
        "type": "input",
        "prompt": "4. ___ backpack",
        "answers": [
          "julia's"
        ],
        "explanation": "Chiếc ba lô thuộc về Julia, nên viết Julia's backpack.",
        "image": "assets/extracted/page2-img5-523x301.png"
      }
    ]
  },
  {
    "letter": "E",
    "title": "Look and read. Write True or False.",
    "note": "Quan sát tranh, đọc từng câu rồi chọn True nếu đúng hoặc False nếu sai.",
    "points": 4,
    "sectionImage": "assets/extracted/page2-img3-2003x770.png",
    "questions": [
      {
        "id": "E1",
        "type": "choice",
        "prompt": "1. Ben's ball is old.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "explanation": "Quả bóng của Ben trông cũ, vì vậy câu này đúng.",
        "image": ""
      },
      {
        "id": "E2",
        "type": "choice",
        "prompt": "2. Jim's grapes are big.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "explanation": "Jim đang cầm một chùm nho lớn, vì vậy câu này đúng.",
        "image": ""
      },
      {
        "id": "E3",
        "type": "choice",
        "prompt": "3. Lynn's pet is a frog.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "explanation": "Lynn đang cầm một con ếch, vì vậy câu này đúng.",
        "image": ""
      },
      {
        "id": "E4",
        "type": "choice",
        "prompt": "4. Sue's kitten is cute.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "explanation": "Sue đang bế một chú mèo con dễ thương, vì vậy câu này đúng.",
        "image": ""
      }
    ]
  },
  {
    "letter": "F",
    "title": "Complete the questions.",
    "note": "Dùng dạng sở hữu phù hợp để hoàn thành từng câu hỏi.",
    "points": 4,
    "questions": [
      {
        "id": "F1",
        "type": "input",
        "prompt": "1. Saul lives in Fairtown. Is ___ address 52 West Street?",
        "answers": [
          "saul's",
          "his"
        ],
        "explanation": "Địa chỉ thuộc về Saul. Có thể viết Saul's address hoặc thay Saul bằng his.",
        "image": ""
      },
      {
        "id": "F2",
        "type": "input",
        "prompt": "2. Jenna lives on Elm Street. Is ___ street noisy?",
        "answers": [
          "jenna's",
          "her"
        ],
        "explanation": "Jenna là một bạn nữ. Có thể viết Jenna's street hoặc her street.",
        "image": ""
      },
      {
        "id": "F3",
        "type": "input",
        "prompt": "3. Ali lives downtown. Is ___ neighborhood safe?",
        "answers": [
          "ali's",
          "his"
        ],
        "explanation": "Khu phố thuộc về Ali. Có thể viết Ali's neighborhood hoặc his neighborhood.",
        "image": ""
      },
      {
        "id": "F4",
        "type": "input",
        "prompt": "4. Meg lives in an apartment. Is ___ apartment new?",
        "answers": [
          "meg's",
          "her"
        ],
        "explanation": "Meg là một bạn nữ. Có thể viết Meg's apartment hoặc her apartment.",
        "image": ""
      }
    ]
  },
  {
    "letter": "G",
    "title": "Circle the correct words.",
    "note": "Chọn địa điểm phù hợp với hoạt động trong câu.",
    "points": 5,
    "questions": [
      {
        "id": "G1",
        "type": "choice",
        "prompt": "1. I buy shoes in a ___.",
        "options": [
          "department store",
          "park"
        ],
        "answers": [
          "department store"
        ],
        "explanation": "Department store là cửa hàng bách hóa lớn, nơi có thể mua giày.",
        "image": ""
      },
      {
        "id": "G2",
        "type": "choice",
        "prompt": "2. It's quiet in a ___.",
        "options": [
          "library",
          "bakery"
        ],
        "answers": [
          "library"
        ],
        "explanation": "Library là thư viện. Thư viện thường là nơi yên tĩnh.",
        "image": ""
      },
      {
        "id": "G3",
        "type": "choice",
        "prompt": "3. I eat fancy food in a ___.",
        "options": [
          "park",
          "restaurant"
        ],
        "answers": [
          "restaurant"
        ],
        "explanation": "Restaurant là nhà hàng, nơi mọi người dùng bữa.",
        "image": ""
      },
      {
        "id": "G4",
        "type": "choice",
        "prompt": "4. I buy oranges in a ___.",
        "options": [
          "supermarket",
          "drugstore"
        ],
        "answers": [
          "supermarket"
        ],
        "explanation": "Supermarket là siêu thị, nơi bán rau củ và trái cây.",
        "image": ""
      },
      {
        "id": "G5",
        "type": "choice",
        "prompt": "5. I live in a new ___.",
        "options": [
          "hotel",
          "house"
        ],
        "answers": [
          "house"
        ],
        "explanation": "House là ngôi nhà để ở. Hotel là khách sạn dành cho khách lưu trú.",
        "image": ""
      }
    ]
  },
  {
    "letter": "H",
    "title": "Look and write the words.",
    "note": "Dùng các từ trong khung: bakery, hotel, new, old, drugstore, library. Có một từ không dùng.",
    "points": 5,
    "sectionImage": "assets/extracted/section-h-street.jpg",
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1. Write word 1.",
        "answers": [
          "hotel"
        ],
        "explanation": "Tòa nhà số 1 cao và có nhiều cửa sổ phòng. Đó là hotel - khách sạn.",
        "image": ""
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2. Write word 2.",
        "answers": [
          "new"
        ],
        "explanation": "Ngôi nhà số 2 trông mới và gọn gàng, nên dùng new.",
        "image": ""
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3. Write word 3.",
        "answers": [
          "drugstore"
        ],
        "explanation": "Cửa hàng số 3 có biểu tượng thuốc ở cửa sổ. Đó là drugstore - hiệu thuốc.",
        "image": ""
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "4. Write word 4.",
        "answers": [
          "old"
        ],
        "explanation": "Ngôi nhà số 4 trông cũ, nên dùng old.",
        "image": ""
      },
      {
        "id": "H5",
        "type": "input",
        "prompt": "5. Write word 5.",
        "answers": [
          "bakery"
        ],
        "explanation": "Cửa hàng số 5 có hình bánh mì ở cửa sổ. Đó là bakery - tiệm bánh.",
        "image": ""
      }
    ]
  },
  {
    "letter": "I",
    "title": "Look and complete the words.",
    "note": "Quan sát tranh và điền các chữ cái còn thiếu.",
    "points": 2,
    "questions": [
      {
        "id": "I1",
        "type": "input",
        "prompt": "1. _ r _ _ a _ _",
        "answers": [
          "orchard"
        ],
        "explanation": "Tranh có nhiều cây ăn quả mọc thành vườn. Orchard nghĩa là vườn cây ăn quả.",
        "image": "assets/extracted/page3-img1-325x230.png"
      },
      {
        "id": "I2",
        "type": "input",
        "prompt": "2. _ _ _ e _ _ a r _ _ t",
        "answers": [
          "supermarket"
        ],
        "explanation": "Tranh có xe đẩy và nhiều hàng hóa trên kệ. Đó là supermarket - siêu thị.",
        "image": "assets/extracted/page3-img3-337x227.png"
      }
    ]
  },
  {
    "letter": "J",
    "title": "Circle the correct words.",
    "note": "Chọn đúng tính từ sở hữu cho người hoặc nhóm người được nhắc đến.",
    "points": 4,
    "questions": [
      {
        "id": "J1",
        "type": "choice",
        "prompt": "1. This is my sister. ___ name is Isabelle.",
        "options": [
          "My",
          "Her"
        ],
        "answers": [
          "Her"
        ],
        "explanation": "Isabelle là một bạn nữ. Tên của cô ấy là Her name.",
        "image": ""
      },
      {
        "id": "J2",
        "type": "choice",
        "prompt": "2. We live in the country. ___ street is quiet.",
        "options": [
          "Our",
          "Your"
        ],
        "answers": [
          "Our"
        ],
        "explanation": "We nghĩa là chúng tôi/chúng ta, nên tính từ sở hữu là our.",
        "image": ""
      },
      {
        "id": "J3",
        "type": "choice",
        "prompt": "3. Is ___ name Jess?",
        "options": [
          "their",
          "your"
        ],
        "answers": [
          "your"
        ],
        "explanation": "Người nói đang hỏi trực tiếp một bạn: Is your name Jess?",
        "image": ""
      },
      {
        "id": "J4",
        "type": "choice",
        "prompt": "4. I'm Daniel. ___ city is really interesting.",
        "options": [
          "My",
          "His"
        ],
        "answers": [
          "My"
        ],
        "explanation": "Daniel đang tự nói về thành phố của mình, nên dùng my.",
        "image": ""
      }
    ]
  },
  {
    "letter": "K",
    "title": "Look and read. Correct the false sentences.",
    "note": "Quan sát các số trên tranh và viết lại từng câu sai thành câu đúng.",
    "points": 5,
    "sectionImage": "assets/extracted/page4-img1-1951x751.png",
    "questions": [
      {
        "id": "K1",
        "type": "input",
        "prompt": "1. Our town has a bakery.",
        "answers": [
          "my town has a bakery"
        ],
        "explanation": "Số 1 chỉ người đang nói 'Welcome to my town!' trước tiệm bánh. Phải sửa Our thành My: My town has a bakery.",
        "image": ""
      },
      {
        "id": "K2",
        "type": "input",
        "prompt": "2. Her sneakers are old.",
        "answers": [
          "his sneakers are old"
        ],
        "explanation": "Số 2 chỉ một bạn nam. Đồ thuộc về một bạn nam dùng his: His sneakers are old.",
        "image": ""
      },
      {
        "id": "K3",
        "type": "input",
        "prompt": "3. Your town is quiet.",
        "answers": [
          "your town is noisy"
        ],
        "explanation": "Số 3 chỉ bạn nhỏ đang bịt tai vì tiếng ồn. Phải đổi quiet thành noisy.",
        "image": ""
      },
      {
        "id": "K4",
        "type": "input",
        "prompt": "4. Her bicycle is new.",
        "answers": [
          "their bicycles are new"
        ],
        "explanation": "Số 4 chỉ hai bạn và hai chiếc xe đạp. Dùng their và danh từ số nhiều bicycles.",
        "image": ""
      },
      {
        "id": "K5",
        "type": "input",
        "prompt": "5. His dog is loud.",
        "answers": [
          "her dog is loud"
        ],
        "explanation": "Theo đề và đáp án gốc, cần sửa tính từ sở hữu His thành Her: Her dog is loud. Không đổi loud thành quiet.",
        "image": ""
      }
    ]
  },
  {
    "letter": "L",
    "title": "Listen and write the possessives.",
    "note": "Nghe audio và điền đúng tính từ sở hữu vào mỗi dòng.",
    "points": 4,
    "audio": "assets/audio/Listening-L.mp3",
    "questions": [
      {
        "id": "L1",
        "type": "input",
        "prompt": "1. Write possessive 1.",
        "answers": [
          "my"
        ],
        "explanation": "Audio dùng my để nói đồ vật hoặc nơi thuộc về người đang nói.",
        "image": ""
      },
      {
        "id": "L2",
        "type": "input",
        "prompt": "2. Write possessive 2.",
        "answers": [
          "your"
        ],
        "explanation": "Audio dùng your để nói đồ vật hoặc nơi thuộc về người đang được nói trực tiếp.",
        "image": ""
      },
      {
        "id": "L3",
        "type": "input",
        "prompt": "3. Write possessive 3.",
        "answers": [
          "our"
        ],
        "explanation": "Audio dùng our để nói đồ vật hoặc nơi thuộc về chúng tôi/chúng ta.",
        "image": ""
      },
      {
        "id": "L4",
        "type": "input",
        "prompt": "4. Write possessive 4.",
        "answers": [
          "their"
        ],
        "explanation": "Audio dùng their để nói đồ vật hoặc nơi thuộc về nhiều người.",
        "image": ""
      }
    ]
  }
];

const form = document.querySelector("#testForm"), root = document.querySelector("#sections"), jumpRoot = document.querySelector("#sectionJump"), progressText = document.querySelector("#progressText"), progressBar = document.querySelector("#progressBar"), results = document.querySelector("#results"), answerReview = document.querySelector("#answerReview"), scoreValue = document.querySelector("#scoreValue"), scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover1-written-test7-v1-source-audit-v2";
render(); restore(); update();

form.addEventListener("click", e => { const b = e.target.closest("[data-choice]"); if (!b) return; const q = b.closest(".question"); q.querySelectorAll("[data-choice]").forEach(x => { x.classList.toggle("is-selected", x === b); x.setAttribute("aria-pressed", x === b ? "true" : "false"); }); q.dataset.value = b.dataset.value; q.classList.remove("is-missing"); save(); update(); });
form.addEventListener("input", e => { if (!e.target.matches("input")) return; e.target.closest(".question")?.classList.remove("is-missing"); save(); update(); });
form.addEventListener("submit", e => { e.preventDefault(); document.querySelectorAll(".is-missing").forEach(x => x.classList.remove("is-missing")); const m = missing(); if (m.length) { m.forEach(x => x.closest(".question").classList.add("is-missing")); document.querySelector("#submitHelp").textContent = `Bài còn thiếu ${m.length} ý. Em hoàn thành phần được đánh dấu trước khi xem đáp án.`; m[0].closest(".question").scrollIntoView({ behavior: "smooth", block: "center" }); return; } grade(); });
document.querySelector("#restartTest").onclick = () => { if (confirm("Em muốn xóa toàn bộ câu trả lời và làm lại từ đầu?")) { localStorage.removeItem(STORAGE_KEY); location.reload(); } };
document.querySelector("#reviewMistakes").onclick = () => (document.querySelector(".review-card.is-wrong") || answerReview).scrollIntoView({ behavior: "smooth" });

function render() { sections.forEach(s => { const j = document.createElement("button"); j.type = "button"; j.textContent = s.letter; j.dataset.jump = s.letter; j.onclick = () => document.querySelector("#section-" + s.letter).scrollIntoView({ behavior: "smooth" }); jumpRoot.appendChild(j); const el = document.createElement("section"); el.className = "test-section"; el.id = "section-" + s.letter; el.innerHTML = `<header class="section-heading"><span class="section-letter">${s.letter}</span><div><h2>${s.title}</h2><p>${s.note}</p></div><span class="section-points">/${s.points}</span></header>${s.audio ? `<div class="audio-panel"><p>Audio phần ${s.letter}</p><audio controls preload="metadata" src="${s.audio}"></audio></div>` : ""}${sectionImage(s)}<div class="question-list">${s.questions.map((q,i) => question(s,q,i)).join("")}</div>`; root.appendChild(el); }); }
function question(s,q,i) { const label = s.letter + (i + 1); const control = q.type === "choice" ? `<div class="choice-grid">${q.options.map((o,n) => `<button type="button" class="choice" data-choice data-value="${esc(o)}" aria-pressed="false"><span class="choice-key">${String.fromCharCode(65+n)}</span><span>${o}</span></button>`).join("")}</div>` : `<input class="answer-input" autocomplete="off" spellcheck="false" placeholder="Nhập câu trả lời">`; return `<article class="question" data-id="${q.id}"><span class="question-number">${label}</span><div class="question-copy">${q.image ? `<img class="question-image" src="${q.image}" alt="Hình minh họa câu ${label}">` : ""}<p class="question-prompt">${q.prompt}</p>${control}</div></article>`; }
function sectionImage(s) { return s.sectionImage ? `<img class="source-image" src="${s.sectionImage}" alt="Hình minh họa phần ${s.letter}">` : ""; }
function norm(v) { return String(v||"").toLowerCase().replace(/[’‘`]/g,"'").replace(/[?.!,]/g,"").replace(/-/g," ").replace(/\s+/g," ").trim(); }
function matches(value, accepted) { return DiscoverAnswerMatcher.matches(value, accepted); }

function missing() { const out=[]; sections.forEach(s => s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`); if(q.type==="choice"){if(!el.dataset.value) out.push(el.querySelector(".choice"));} else {const f=el.querySelector("input"); if(!f.value.trim()) out.push(f);} })); return out; }
function grade() { let score=0, reviews=[]; sections.forEach(s => s.questions.forEach((q,i) => { const el=document.querySelector(`[data-id="${q.id}"]`), value=q.type==="choice" ? el.dataset.value||"" : el.querySelector("input").value, correct=matches(value,q.answers); if(correct) score++; reviews.push({q,label:s.letter+(i+1),value,correct}); })); scoreValue.textContent=score; scoreMessage.textContent=score===50 ? "Em đã làm đúng toàn bộ bài." : `Em cần chữa ${50-score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`; answerReview.innerHTML=reviews.map(r => `<article class="review-card ${r.correct?"":"is-wrong"}"><div class="review-head"><h3>Câu ${r.label}</h3><span class="review-status">${r.correct?"1/1":"0/1"} điểm</span></div><p class="review-question">${r.q.prompt}</p><div class="review-answer"><span>Em trả lời: <b>${html(r.value||"(trống)")}</b></span><span>Đáp án: <b>${html(DiscoverAnswerDisplay.formatAnswer(r.q.answers[0]))}</b></span></div><p class="explanation"><b>Giải thích:</b> ${html(DiscoverAnswerDisplay.formatExplanation(r.q.explanation))}</p></article>`).join(""); results.hidden=false; form.hidden=true; document.querySelector("#stickyProgress").hidden=true; results.scrollIntoView({behavior:"smooth"}); }
function update() { let total=0; sections.forEach(s => { let c=0; s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`), done=q.type==="choice" ? !!el.dataset.value : !!el.querySelector("input").value.trim(); if(done){total++;c++;} }); const j=document.querySelector(`[data-jump="${s.letter}"]`); j.classList.toggle("has-progress",c>0); j.classList.toggle("is-complete",c===s.questions.length); }); progressText.textContent=`${total} / 50`; progressBar.style.width=`${total*2}%`; }
function save(){const d={};sections.forEach(s=>s.questions.forEach(q=>{const el=document.querySelector(`[data-id="${q.id}"]`);d[q.id]=q.type==="choice"?el.dataset.value||"":el.querySelector("input").value;}));localStorage.setItem(STORAGE_KEY,JSON.stringify(d));}
function restore(){let d={};try{d=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}");}catch{}sections.forEach(s=>s.questions.forEach(q=>{const v=d[q.id];if(!v)return;const el=document.querySelector(`[data-id="${q.id}"]`);if(q.type==="choice"){el.dataset.value=v;el.querySelectorAll("[data-choice]").forEach(b=>{const on=b.dataset.value===v;b.classList.toggle("is-selected",on);b.setAttribute("aria-pressed",on?"true":"false");});}else el.querySelector("input").value=v;}));}
function html(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));} function esc(v){return html(v);}

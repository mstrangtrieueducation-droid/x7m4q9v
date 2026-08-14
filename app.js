const A = "assets/extracted/";
const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image });

const sections = [
  { letter: "A", title: "Circle the correct words.", note: "Chọn từ đúng để hoàn thành từng câu.", points: 3, questions: [
    choice("A1", "1. I don't like this movie. It's ___.", ["boring", "interesting"], "boring", "Người nói không thích bộ phim, nên bộ phim gây chán: boring."),
    choice("A2", "2. It's ___ now. Let's take a nap.", ["noisy", "quiet"], "quiet", "Muốn ngủ một giấc thì nơi đó cần yên tĩnh: quiet."),
    choice("A3", "3. Be careful. It isn't dangerous. It's ___.", ["dangerous", "safe"], "safe", "It isn't dangerous nghĩa là không nguy hiểm, vì vậy từ phù hợp là safe - an toàn.") ] },
  { letter: "B", title: "Look and complete the words.", note: "Quan sát tranh và điền các chữ cái còn thiếu để hoàn thành từ.", points: 4, questions: [
    input("B1", "1. w _ _ l _", ["world"], "Tranh vẽ Trái Đất. World nghĩa là thế giới.", A + "page1-img2-472x338.png"),
    input("B2", "2. t _ _   c o _ _ t _ _", ["the country"], "Tranh có cánh đồng và ít nhà cửa. The country nghĩa là vùng nông thôn.", A + "page1-img7-475x340.png"),
    input("B3", "3. b _ _ l _ _ _ _", ["building"], "Tranh vẽ một tòa nhà lớn. Building nghĩa là tòa nhà.", A + "page1-img3-469x336.png"),
    input("B4", "4. n _ _ _ _ b _ _ h _ _ _", ["neighborhood", "neighbourhood"], "Tranh vẽ nhiều ngôi nhà ở cùng một khu. Neighborhood nghĩa là khu phố.", A + "page1-img8-459x328.png") ] },
  { letter: "C", title: "Listen and check the correct pictures. Circle the correct words.", note: "Mỗi mục có hai ý: nghe để chọn tranh a hoặc b, sau đó chọn đúng dạng danh từ hoặc động từ.", points: 6, audio: "assets/audio/Listening-C.mp3", sectionImage: A + "section-c-listening.jpg", questions: [
    choice("C1", "1a. Choose the correct picture for item 1.", ["picture a", "picture b"], "picture a", "Audio nói về plant với nghĩa danh từ. Tranh a có các cây đang mọc trong mưa."),
    choice("C2", "1b. Choose the correct word form.", ["plant (noun)", "plants (verb)"], "plant (noun)", "Plant chỉ một sự vật, nên đó là danh từ: plant (noun)."),
    choice("C3", "2a. Choose the correct picture for item 2.", ["picture a", "picture b"], "picture b", "Audio dùng waters với nghĩa tưới cây. Tranh b cho thấy một người đang tưới hoa."),
    choice("C4", "2b. Choose the correct word form.", ["water (noun)", "waters (verb)"], "waters (verb)", "Waters diễn tả hành động tưới cây, nên đó là động từ."),
    choice("C5", "3a. Choose the correct picture for item 3.", ["picture a", "picture b"], "picture b", "Audio dùng snows để nói trời có tuyết rơi. Tranh b cho thấy tuyết đang rơi quanh ghế."),
    choice("C6", "3b. Choose the correct word form.", ["snow (noun)", "snows (verb)"], "snows (verb)", "Snows diễn tả hiện tượng tuyết rơi, nên đó là động từ.") ] },
  { letter: "D", title: "Look and complete the phrases. Use the names in the pictures.", note: "Quan sát tên của từng bạn rồi dùng dạng sở hữu để hoàn thành cụm từ.", points: 4, questions: [
    input("D1", "1. ___ apartment", ["emily's"], "Căn hộ thuộc về Emily, nên thêm 's vào tên: Emily's apartment.", A + "page2-img1-595x301.png"),
    input("D2", "2. ___ neighborhood", ["jack's"], "Khu phố thuộc về Jack, nên viết Jack's neighborhood.", A + "page2-img4-601x301.png"),
    input("D3", "3. ___ home", ["max's"], "Ngôi nhà thuộc về Max, nên viết Max's home.", A + "page2-img2-639x320.png"),
    input("D4", "4. ___ backpack", ["julia's"], "Chiếc ba lô thuộc về Julia, nên viết Julia's backpack.", A + "page2-img5-523x301.png") ] },
  { letter: "E", title: "Look and read. Write True or False.", note: "Quan sát tranh, đọc từng câu rồi chọn True nếu đúng hoặc False nếu sai.", points: 4, sectionImage: A + "page2-img3-2003x770.png", questions: [
    choice("E1", "1. Ben's ball is old.", ["True", "False"], "True", "Quả bóng của Ben trông cũ, vì vậy câu này đúng."),
    choice("E2", "2. Jim's grapes are big.", ["True", "False"], "True", "Jim đang cầm một chùm nho lớn, vì vậy câu này đúng."),
    choice("E3", "3. Lynn's pet is a frog.", ["True", "False"], "True", "Lynn đang cầm một con ếch, vì vậy câu này đúng."),
    choice("E4", "4. Sue's kitten is cute.", ["True", "False"], "True", "Sue đang bế một chú mèo con dễ thương, vì vậy câu này đúng.") ] },
  { letter: "F", title: "Complete the questions.", note: "Dùng dạng sở hữu phù hợp để hoàn thành từng câu hỏi.", points: 4, questions: [
    input("F1", "1. Saul lives in Fairtown. Is ___ address 52 West Street?", ["saul's", "his"], "Địa chỉ thuộc về Saul. Có thể viết Saul's address hoặc thay Saul bằng his."),
    input("F2", "2. Jenna lives on Elm Street. Is ___ street noisy?", ["jenna's", "her"], "Jenna là một bạn nữ. Có thể viết Jenna's street hoặc her street."),
    input("F3", "3. Ali lives downtown. Is ___ neighborhood safe?", ["ali's", "his"], "Khu phố thuộc về Ali. Có thể viết Ali's neighborhood hoặc his neighborhood."),
    input("F4", "4. Meg lives in an apartment. Is ___ apartment new?", ["meg's", "her"], "Meg là một bạn nữ. Có thể viết Meg's apartment hoặc her apartment.") ] },
  { letter: "G", title: "Circle the correct words.", note: "Chọn địa điểm phù hợp với hoạt động trong câu.", points: 5, questions: [
    choice("G1", "1. I buy shoes in a ___.", ["department store", "park"], "department store", "Department store là cửa hàng bách hóa lớn, nơi có thể mua giày."),
    choice("G2", "2. It's quiet in a ___.", ["library", "bakery"], "library", "Library là thư viện. Thư viện thường là nơi yên tĩnh."),
    choice("G3", "3. I eat fancy food in a ___.", ["park", "restaurant"], "restaurant", "Restaurant là nhà hàng, nơi mọi người dùng bữa."),
    choice("G4", "4. I buy oranges in a ___.", ["supermarket", "drugstore"], "supermarket", "Supermarket là siêu thị, nơi bán rau củ và trái cây."),
    choice("G5", "5. I live in a new ___.", ["hotel", "house"], "house", "House là ngôi nhà để ở. Hotel là khách sạn dành cho khách lưu trú.") ] },
  { letter: "H", title: "Look and write the words.", note: "Dùng các từ trong khung: bakery, hotel, new, old, drugstore, library. Có một từ không dùng.", points: 5, sectionImage: A + "section-h-street.jpg", questions: [
    input("H1", "1. Write word 1.", ["hotel"], "Tòa nhà số 1 cao và có nhiều cửa sổ phòng. Đó là hotel - khách sạn."),
    input("H2", "2. Write word 2.", ["new"], "Ngôi nhà số 2 trông mới và gọn gàng, nên dùng new."),
    input("H3", "3. Write word 3.", ["drugstore"], "Cửa hàng số 3 có biểu tượng thuốc ở cửa sổ. Đó là drugstore - hiệu thuốc."),
    input("H4", "4. Write word 4.", ["old"], "Ngôi nhà số 4 trông cũ, nên dùng old."),
    input("H5", "5. Write word 5.", ["bakery"], "Cửa hàng số 5 có hình bánh mì ở cửa sổ. Đó là bakery - tiệm bánh.") ] },
  { letter: "I", title: "Look and complete the words.", note: "Quan sát tranh và điền các chữ cái còn thiếu.", points: 2, questions: [
    input("I1", "1. _ r _ _ a _ _", ["orchard"], "Tranh có nhiều cây ăn quả mọc thành vườn. Orchard nghĩa là vườn cây ăn quả.", A + "page3-img1-325x230.png"),
    input("I2", "2. _ _ _ e _ _ a r _ _ t", ["supermarket"], "Tranh có xe đẩy và nhiều hàng hóa trên kệ. Đó là supermarket - siêu thị.", A + "page3-img3-337x227.png") ] },
  { letter: "J", title: "Circle the correct words.", note: "Chọn đúng tính từ sở hữu cho người hoặc nhóm người được nhắc đến.", points: 4, questions: [
    choice("J1", "1. This is my sister. ___ name is Isabelle.", ["My", "Her"], "Her", "Isabelle là một bạn nữ. Tên của cô ấy là Her name."),
    choice("J2", "2. We live in the country. ___ street is quiet.", ["Our", "Your"], "Our", "We nghĩa là chúng tôi/chúng ta, nên tính từ sở hữu là our."),
    choice("J3", "3. Is ___ name Jess?", ["their", "your"], "your", "Người nói đang hỏi trực tiếp một bạn: Is your name Jess?"),
    choice("J4", "4. I'm Daniel. ___ city is really interesting.", ["My", "His"], "My", "Daniel đang tự nói về thành phố của mình, nên dùng my.") ] },
  { letter: "K", title: "Look and read. Correct the false sentences.", note: "Quan sát các số trên tranh và viết lại từng câu sai thành câu đúng.", points: 5, sectionImage: A + "page4-img1-1951x751.png", questions: [
    input("K1", "1. Our town has a bakery.", ["my town has a bakery"], "Số 1 chỉ người đang nói 'Welcome to my town!' trước tiệm bánh. Phải sửa Our thành My: My town has a bakery."),
    input("K2", "2. Her sneakers are old.", ["his sneakers are old"], "Số 2 chỉ một bạn nam. Đồ thuộc về một bạn nam dùng his: His sneakers are old."),
    input("K3", "3. Your town is quiet.", ["your town is noisy"], "Số 3 chỉ bạn nhỏ đang bịt tai vì tiếng ồn. Phải đổi quiet thành noisy."),
    input("K4", "4. Her bicycle is new.", ["their bicycles are new"], "Số 4 chỉ hai bạn và hai chiếc xe đạp. Dùng their và danh từ số nhiều bicycles."),
    input("K5", "5. His dog is quiet.", ["his dog is loud"], "Số 5 chỉ chú chó đang sủa. Phải đổi quiet thành loud: His dog is loud.") ] },
  { letter: "L", title: "Listen and write the possessives.", note: "Nghe audio và điền đúng tính từ sở hữu vào mỗi dòng.", points: 4, audio: "assets/audio/Listening-L.mp3", questions: [
    input("L1", "1. Write possessive 1.", ["my"], "Audio dùng my để nói đồ vật hoặc nơi thuộc về người đang nói."),
    input("L2", "2. Write possessive 2.", ["your"], "Audio dùng your để nói đồ vật hoặc nơi thuộc về người đang được nói trực tiếp."),
    input("L3", "3. Write possessive 3.", ["our"], "Audio dùng our để nói đồ vật hoặc nơi thuộc về chúng tôi/chúng ta."),
    input("L4", "4. Write possessive 4.", ["their"], "Audio dùng their để nói đồ vật hoặc nơi thuộc về nhiều người.") ] }
];

const form = document.querySelector("#testForm"), root = document.querySelector("#sections"), jumpRoot = document.querySelector("#sectionJump"), progressText = document.querySelector("#progressText"), progressBar = document.querySelector("#progressBar"), results = document.querySelector("#results"), answerReview = document.querySelector("#answerReview"), scoreValue = document.querySelector("#scoreValue"), scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover1-written-test7-v1";
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
function matches(v,a) { return a.some(x => norm(x) === norm(v)); }
function missing() { const out=[]; sections.forEach(s => s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`); if(q.type==="choice"){if(!el.dataset.value) out.push(el.querySelector(".choice"));} else {const f=el.querySelector("input"); if(!f.value.trim()) out.push(f);} })); return out; }
function grade() { let score=0, reviews=[]; sections.forEach(s => s.questions.forEach((q,i) => { const el=document.querySelector(`[data-id="${q.id}"]`), value=q.type==="choice" ? el.dataset.value||"" : el.querySelector("input").value, correct=matches(value,q.answers); if(correct) score++; reviews.push({q,label:s.letter+(i+1),value,correct}); })); scoreValue.textContent=score; scoreMessage.textContent=score===50 ? "Em đã làm đúng toàn bộ bài." : `Em cần chữa ${50-score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`; answerReview.innerHTML=reviews.map(r => `<article class="review-card ${r.correct?"":"is-wrong"}"><div class="review-head"><h3>Câu ${r.label}</h3><span class="review-status">${r.correct?"1/1":"0/1"} điểm</span></div><p class="review-question">${r.q.prompt}</p><div class="review-answer"><span>Em trả lời: <b>${html(r.value||"(trống)")}</b></span><span>Đáp án: <b>${html(r.q.answers[0])}</b></span></div><p class="explanation"><b>Giải thích:</b> ${r.q.explanation}</p></article>`).join(""); results.hidden=false; form.hidden=true; document.querySelector("#stickyProgress").hidden=true; results.scrollIntoView({behavior:"smooth"}); }
function update() { let total=0; sections.forEach(s => { let c=0; s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`), done=q.type==="choice" ? !!el.dataset.value : !!el.querySelector("input").value.trim(); if(done){total++;c++;} }); const j=document.querySelector(`[data-jump="${s.letter}"]`); j.classList.toggle("has-progress",c>0); j.classList.toggle("is-complete",c===s.questions.length); }); progressText.textContent=`${total} / 50`; progressBar.style.width=`${total*2}%`; }
function save(){const d={};sections.forEach(s=>s.questions.forEach(q=>{const el=document.querySelector(`[data-id="${q.id}"]`);d[q.id]=q.type==="choice"?el.dataset.value||"":el.querySelector("input").value;}));localStorage.setItem(STORAGE_KEY,JSON.stringify(d));}
function restore(){let d={};try{d=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}");}catch{}sections.forEach(s=>s.questions.forEach(q=>{const v=d[q.id];if(!v)return;const el=document.querySelector(`[data-id="${q.id}"]`);if(q.type==="choice"){el.dataset.value=v;el.querySelectorAll("[data-choice]").forEach(b=>{const on=b.dataset.value===v;b.classList.toggle("is-selected",on);b.setAttribute("aria-pressed",on?"true":"false");});}else el.querySelector("input").value=v;}));}
function html(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));} function esc(v){return html(v);}

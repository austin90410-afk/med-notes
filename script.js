// 檢查答案的邏輯：這就是你要的「告訴我對或錯」
function checkAnswer(caseNum, selectedOption, correctAnswer) {
    const explanation = document.getElementById('explanation' + caseNum);
    explanation.style.display = 'block'; // 讓原本隱藏的區塊顯示出來

    if (selectedOption === correctAnswer) {
        // 如果答對了：顯示綠色背景、正確訊息、以及「下一題」按鈕
        explanation.innerHTML = `
            <div style="color: #155724; background-color: #d4edda; padding: 15px; border-radius: 5px; border-left: 5px solid #28a745;">
                <strong>✅ 正確！</strong><br>
                ${getDetailedExp(caseNum)}
                <br>
                <button class="next-btn" onclick="showCase(${caseNum + 1})">點此挑戰下一題 →</button>
            </div>
        `;
    } else {
        // 如果答錯了：顯示紅色背景、錯誤訊息
        explanation.innerHTML = `
            <div style="color: #721c24; background-color: #f8d7da; padding: 15px; border-radius: 5px; border-left: 5px solid #dc3545;">
                <strong>❌ 答錯了！</strong><br>
                提示：請重新觀察病例中的關鍵臨床表現。
            </div>
        `;
    }
    explanation.scrollIntoView({ behavior: 'smooth' });
}

// 這裡存放你的專業詳解內容
function getDetailedExp(caseNum) {
    if (caseNum === 1) {
        return "這是典型的 MVP（二尖瓣脫垂），常伴隨 Mid-systolic click。這與馬凡氏症候群 (Marfan syndrome) 常伴隨的黏液樣變性有關。";
    } else if (caseNum === 2) {
        return "這是 Rheumatoid Arthritis（類風濕性關節炎）。特徵是對稱性小關節受損，且 Anti-CCP 具有高度特異性。";
    }
    return "";
}

// 跳轉頁面的邏輯
function showCase(caseNum) {
    const targetCase = document.getElementById('case' + caseNum);
    if (!targetCase) {
        alert("恭喜！你已經完成了目前所有的案例練習。");
        return;
    }
    // 隱藏所有題項
    const cases = document.querySelectorAll('.case-section');
    cases.forEach(c => c.classList.remove('active'));
    
    // 顯示目標題項
    targetCase.classList.add('active');
    window.scrollTo(0, 0);
}
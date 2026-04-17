// 檢查答案的邏輯
function checkAnswer(caseNum, selectedOption, correctAnswer) {
    const explanation = document.getElementById('explanation' + caseNum);
    
    // 建立一個顯示對錯的區塊內容
    if (selectedOption === correctAnswer) {
        explanation.innerHTML = `
            <div style="color: #155724; background-color: #d4edda; padding: 15px; border-radius: 5px; border-left: 5px solid #28a745;">
                <strong>✅ 正確！</strong><br>
                ${getDetailedExp(caseNum)}
                <button class="next-btn" onclick="showCase(${caseNum + 1})">挑戰下一題 →</button>
            </div>
        `;
    } else {
        explanation.innerHTML = `
            <div style="color: #721c24; background-color: #f8d7da; padding: 15px; border-radius: 5px; border-left: 5px solid #dc3545;">
                <strong>❌ 答錯了！</strong><br>
                提示：請重新閱讀病例中的關鍵字（如：${caseNum === 1 ? 'Mid-systolic click' : 'Morning stiffness > 2 hrs'}）。
            </div>
        `;
    }
    
    explanation.style.display = 'block';
    explanation.scrollIntoView({ behavior: 'smooth' });
}

// 根據題號提供詳解內容
function getDetailedExp(caseNum) {
    if (caseNum === 1) {
        return "這是典型的 MVP（二尖瓣脫垂），常伴隨 Mid-systolic click。站立時左心室容積減小，會使脫垂更明顯。";
    } else if (caseNum === 2) {
        return "這是 Rheumatoid Arthritis（類風濕性關節炎）。特徵是對稱性小關節受損，且 Anti-CCP 具有高度特異性。";
    }
    return "";
}

// 切換案例的邏輯 (維持不變)
function showCase(caseNum) {
    const targetCase = document.getElementById('case' + caseNum);
    if (!targetCase) {
        alert("恭喜！你已經完成了所有案例練習。");
        return;
    }
    const cases = document.querySelectorAll('.case-section');
    cases.forEach(c => c.classList.remove('active'));
    const explanations = document.querySelectorAll('.explanation');
    explanations.forEach(e => e.style.display = 'none');
    targetCase.classList.add('active');
    window.scrollTo(0, 0);
}
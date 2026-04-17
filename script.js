function check(isCorrect) {
    const result = document.getElementById('result');
    if (isCorrect) {
        result.innerHTML = "✅ 正確！這與馬凡氏症候群 (Marfan syndrome) 常伴隨的黏液樣變性有關。";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ 再想想！注意 Mid-systolic click 的特徵。";
        result.style.color = "red";
    }
}
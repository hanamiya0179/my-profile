// 📦 1. ゲームをすべて1つの箱（配列）に統合する（これで確率は完全に均等になります）
const games = [
    "DBD (PC)",
    "マイクラ (PC)",
    "モンハンサンブレイク (Switch)", // 💎 特別な演出をさせたいゲーム
    "スマブラ (Switch)",
    "モンスト (スマホ)",
    "プロセカ (スマホ)",
    "ホロドリ (スマホ)",
    "アーケア (スマホ)",
    "グルミク (スマホ)",
    "さくっちいじめ (集団リンチ)"
];

// 🎯 2. HTMLのボタンと、結果を表示する場所をJavaScriptに教えてあげる
const btn = document.getElementById("gacha-btn");
const resultText = document.getElementById("gacha-result");

// ⚡ 3. ボタンがクリックされたときの処理
btn.addEventListener("click", function() {
    
    // 🎲 箱の中から完全に均等な確率で1つ選ぶ
    const randomIndex = Math.floor(Math.random() * games.length);
    const chosenGame = games[randomIndex];
    
    // 🌟 選ばれたゲームの名前が「さくっち」と完全に一致するかどうかで条件分岐する
    if (chosenGame === "さくっちいじめ (集団リンチ)") {
        // 🎉 【さくっちが出たときだけ発動！】
        resultText.textContent = `🎰 本日のオススメ：💥超激レア出現!!💥  ${chosenGame} `;
        resultText.classList.add("rare-effect"); // 派手な演出の目印をつける
    } else {
        // 💧 【さくっち以外のすべてのゲームのとき】
        resultText.textContent = `🎰 本日のオススメ：【 ${chosenGame} 】`;
        resultText.classList.remove("rare-effect"); // 演出の目印を剥ぎ取る
    }
});

// 📱 スマホでボタンを押したときのアニメーション（:active）を瞬間発動させる設定
document.addEventListener("touchstart", function() {}, {passive: true});

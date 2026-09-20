// 📱 スマホ用タッチ遅延対策（以前追加したもの）
document.addEventListener("touchstart", function() {}, {passive: true});

// 🎮 ガチャに登場するゲームのリスト
const games = [
    { name: "PC: DBD", rare: false },
    { name: "PC: マイクラ", rare: false },
    { name: "Switch: モンスターハンターサンブレイク", rare: false },
    { name: "Switch: スマブラ", rare: false },
    { name: "スマホ: モンスト", rare: false },
    { name: "スマホ: プロセカ", rare: false },
    { name: "さくっちいじめ (集団リンチ)", rare: true }//激レア枠
];

// 🧱 画面の要素（ボタンや文字）を取得
const gachaBtn = document.getElementById("gacha-btn");
const gachaResult = document.getElementById("gacha-result");

// 🎰 ボタンがクリックされた時の処理
gachaBtn.addEventListener("click", function() {
    
    // 1. 連打防止（ガチャ中はボタンを押せなくする）
    gachaBtn.disabled = true;
    
    // 2. 結果画面を「ガチャを引いている最中…」の表示にする
    gachaResult.textContent = "ストライクショットーーー！！！";
    gachaResult.className = ""; // 一度演出の見た目をリセット
    
    // 📳 3. ボタンに「ブルブル震える」目印を付ける（CSSが発動！）
    gachaBtn.classList.add("btn-shake");
    
    // ⏳ 4. 【1秒のタメ】1000ミリ秒（1秒）待ってから、中身のプログラムを実行する
    setTimeout(function() {
        
        // 📳 震える目印を外す（ボタンを元の状態に戻す）
        gachaBtn.classList.remove("btn-shake");
        
        // 🎲 ランダムにゲームを1つ選ぶ
        const randomIndex = Math.floor(Math.random() * games.length);
        const selectedGame = games[randomIndex];
        
        // 📢 画面に選ばれたゲーム名を表示する
        gachaResult.textContent = `結果：${selectedGame.name}`;
        
        // ✨ もし選ばれたゲームが「激レア（rare: true）」だった場合
        if (selectedGame.rare) {
            // 🎯 文字をピカピカ光らせる
            gachaResult.className = "rare-effect";
            
            // ⚡ 【新演出】画面全体（body）にフラッシュの目印を一瞬付ける
            document.body.classList.add("screen-flash");
            
            // フラッシュのアニメーションが終わる頃（0.4秒後）に目印を消す（次また光らせるため）
            setTimeout(function() {
                document.body.classList.remove("screen-flash");
            }, 400);
            
        } else {
            // 普通のゲームだった場合は演出なし
            gachaResult.className = "";
        }
        
        // 🔓 ガチャが終わったので、ボタンをまた押せるようにする
        gachaBtn.disabled = false;
        
    }, 1000); // 💡 1000ミリ秒 ＝ 1秒
});

// 🍔 ハンバーガーメニューの開閉スイッチ機能
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function() {
    // ボタンとメニューに「open」というクラスを付けたり消したり（トグル）する
    menuBtn.classList.toggle("open");
    navMenu.classList.toggle("open");
});

// =======================================================
// 🔼 3. 「上へ戻る」ボタンのコントロール機能
// =======================================================
const pageTopBtn = document.getElementById("page-top-btn");

// 🔄 画面のスクロールを見張る処理
window.addEventListener("scroll", function() {
    // 💡 現在どれくらい下にスクロールしたか（px）を取得
    const scrollAmount = window.scrollY;
    
    // ヘッダーの高さ（700px）を超えたら「show」をつけて表示、上に戻ったら消す
    if (scrollAmount > 700) {
        pageTopBtn.classList.add("show");
    } else {
        pageTopBtn.classList.remove("show");
    }
});

// 👆 ボタンがクリックされた時の処理
pageTopBtn.addEventListener("click", function() {
    // 💡 1秒（1000ms）かけて、画面の一番上（y: 0）まで滑らかに戻す魔法の命令
    window.scrollTo({
        top: 0,
        behavior: "smooth" // スムーズにスクロールさせる設定
    });
});

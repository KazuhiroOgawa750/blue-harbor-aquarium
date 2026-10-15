'use strict';

// 課題1：ご利用案内の表示・非表示
// 「詳しく見る ＋」ボタンで案内を表示し、もう一度押すと非表示にする。
// ボタンの文字も「閉じる −」と「詳しく見る ＋」で切り替える。


// 課題2：生きもの紹介の切り替え
// 使用するデータは用意されています。配列を変更する必要はありません。
const creatures = [
  { number: '01', name: 'クラゲ', image: 'images/jellyfish.svg', description: 'ゆったりと水中を漂う、幻想的な生きものです。' },
  { number: '02', name: 'ペンギン', image: 'images/penguin.svg', description: '水の中では翼のようなひれを使って素早く泳ぎます。' },
  { number: '03', name: 'ウミガメ', image: 'images/turtle.svg', description: '大きなひれを動かして、広い海をゆったり泳ぎます。' }
];
let creatureIndex = 0;

function showCreature() {
  // creatureIndex番目の画像・名前・説明文・表示番号を画面に反映する。
}

// 「次へ」「前へ」のクリック処理を作る。
// 最後の次は最初に戻り、最初の前は最後に戻る。


// 課題4：プルダウンから別ページへ移動
// id="page-select" の値が空文字でないときだけ、そのURLへ移動する。


// 課題5：案内パネルを閉じる
// id="notice-close" をクリックすると、id="notice-panel" を非表示にする。

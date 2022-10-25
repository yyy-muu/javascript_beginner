(() => {
  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  // DOM 要素の中から用件に当てはまる要素を取得する
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = 'is-active';
  const navLen = $nav.length


  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

  // click event
  const handleClick = (e) => {
    //aのリンク要素を無効化する
    e.preventDefault();

    // クリックされたターゲットの要素（ここではnav）、そのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    // 一旦対象外のnav contentのリセット、後ほど対象だけアクティブ化する
    let index = 0;
    while (index < navLen) {
      $content[index].style.display = "none";
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    // 対象コンテンツをアクティブ化
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    // ターゲット要素に対して、任意のCSSクラスを適用する
    $nav[targetVal].classList.add(ACTIVE_CLASS)
  };

  let index = 0;
  // $navの個数だけクリックイベントを発火
  while (index < navLen) {
    $nav[index].addEventListener("click", (e) => handleClick(e));
    index++;
  }

})();

(() => {

  class Accordion {
    // 初期化
    constructor(obj) {



      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
        $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
        index++;
      }
    }

    // クラス内で変数を定義する時は、constは不要
    // 呼び出す時は、thisをつける
    clickHandler = (e) => {

      e.preventDefault();

      // $triggerの次の要素を取得する
      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;
      // クリックしたとき、答えの要素が見える状態であれば、隠しておく
      if ($content.style.display === 'block') {
        $content.style.display = 'none';
      } else {
        $content.style.display = 'block';
      }
    };
  }

  const fuckingAccordion = new Accordion({
    hookName: '#js-faq',
    tagName: 'p'
  });

  const sampleAccordion = new Accordion({
    hookName: "#js-accordion",
    tagName: "a",
  });

  const miniAccordion = new Accordion({
    hookName: "#js-mini",
    tagName: "p",
  });

})();

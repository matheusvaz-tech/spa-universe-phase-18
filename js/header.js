export function Header() {
  let itemsHeader = document.querySelectorAll("a");

  for (let i = 0; i < itemsHeader.length; i++) {
    const itemHeader = itemsHeader[i];
    itemHeader.addEventListener("click", itemBold);

    function itemBold() {
      itemHeader.classList.add("bold");
    }
  }
}

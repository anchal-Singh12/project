let bagItems;
onLoad();
function onLoad(){
  let bagItemsStr=localStorage.getItem('bagItems');
  bagItems=bagItemsStr ? JSON.parse(bagItemsStr):[];  
  displayItemOnHomepage();
  displayBagIcon();
}
function addTobag(itemId){

    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();

}
function displayBagIcon(){
    let bag_count=document.querySelector('.bag-count');
    if(bagItems.length>0){
        bag_count.style.visibility='visible';
        bag_count.innerText=bagItems.length;
    } else {
        bag_count.style.visibility='hidden';
    }
}



function displayItemOnHomepage(){
  let itemsContainerElement= document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }

  let innerHtml='';
  items.forEach(item =>{
    innerHtml+=`
    <div class="item-container">
            <img  class="item-image" src="${item.image}" alt="item-image">
            <div class="rating">
                 ${item.rating.stars}⭐ |${item.rating.count}
            </div>
            <div class="com-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount">${item.discount_percentage}% {OFF}</span>
            </div>
            <button class="btn-addbag" onclick="addTobag(${item.id})">Add to bag</button>
    </div>
`
});
itemsContainerElement.innerHTML=innerHtml;

}


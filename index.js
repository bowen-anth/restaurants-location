const mainContainer = document.querySelector(".main-container");

let multipleItemContainerHtml = "";

let itemContainerHtml = (i) => `
<div class="item-container">
<div class="left-container">
  <img
    class="food-pic"
    src="https://source.unsplash.com/random/100x100/?food&${i}"
    width="100px"
    height="auto"
    alt="a random pic of food"
  />
  <div class="restaurant-info-container">
    <p class="restaurant-p">Aenean eget tristiqu</p>
    <fieldset class="rating">
      <input type="radio" id="star5-${i}" name="rating-${i}" value="5" /><label
        class="full"
        for="star5-${i}"
        title="Awesome - 5 stars"
      ></label>
      <input
        type="radio"
        id="star4half-${i}"
        name="rating-${i}"
        value="4 and a half"
      /><label
        class="half"
        for="star4half-${i}"
        title="Pretty good - 4.5 stars"
      ></label>
      <input
        type="radio"
        id="star4-${i}"
        name="rating-${i}"
        value="4"
        checked
      /><label
        class="full"
        for="star4-${i}"
        title="Pretty good - 4 stars"
      ></label>
      <input
        type="radio"
        id="star3half-${i}"
        name="rating-${i}"
        value="3 and a half"
      /><label
        class="half"
        for="star3half-${i}"
        title="Meh - 3.5 stars"
      ></label>
      <input type="radio" id="star3-${i}" name="rating-${i}" value="3" /><label
        class="full"
        for="star3-${i}"
        title="Meh - 3 stars"
      ></label>
      <input
        type="radio"
        id="star2half-${i}"
        name="rating-${i}"
        value="2 and a half"
      /><label
        class="half"
        for="star2half-${i}"
        title="Kinda bad - 2.5 stars"
      ></label>
      <input type="radio" id="star2-${i}" name="rating-${i}" value="2" /><label
        class="full"
        for="star2-${i}"
        title="Kinda bad - 2 stars"
      ></label>
      <input
        type="radio"
        id="star1half-${i}"
        name="rating-${i}"
        value="1 and a half"
      /><label
        class="half"
        for="star1half-${i}"
        title="Meh - 1.5 stars"
      ></label>
      <input type="radio" id="star1-${i}" name="rating-${i}" value="1" /><label
        class="full"
        for="star1-${i}"
        title="Sucks big time - 1 star"
      ></label>
      <input
        type="radio"
        id="starhalf-${i}"
        name="rating-${i}"
        value="half"
      /><label
        class="half"
        for="starhalf-${i}"
        title="Sucks big time - 0.5 stars"
      ></label>
    </fieldset>
    <br />
    <button class="button label">varius</button
    ><button class="button label">eget</button
    ><button class="button label">eleifend</button>
  </div>
</div>
<div class="right-container">
  <img
    class="distance-arrow"
    width="50px"
    height="auto"
    src="https://img.icons8.com/ios-filled/50/FFFFFF/up-right--v1.png"
    alt="distance arrow"
  />
  <p class="distance-p">${i}.5 km</p>
</div>
</div>`;

const renderItems = () => {
  for (let i = 0; i < 9; i++) {
    multipleItemContainerHtml += itemContainerHtml(i);
  }
};

const appendItems = () => {
  renderItems();
  mainContainer.innerHTML = multipleItemContainerHtml;
};

appendItems();

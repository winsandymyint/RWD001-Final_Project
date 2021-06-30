import { categories } from "./MockData.js";


var card_holder = document.getElementById('card_holder');
var title_for_handmade = document.getElementById('title_for_handmade');

title_for_handmade.textContent = "Felt Handmade";
for (var i = 0; i < categories.length; i++) {  
  if(categories[i].category == 'felt'){
    var row_column = document.createElement('div');
    row_column.setAttribute('class',`column ${categories[i].category}`);
    var container = document.createElement('div');
      container.classList = "container";
      container.style.backgroundImage = `url(${categories[i].image})`;
      var overlay = document.createElement('div');
        overlay.classList = "overlay";
        var overlay_div1 = document.createElement('div');
          overlay_div1.setAttribute('class','items');
        var overlay_div2 = document.createElement('div');
          overlay_div2.setAttribute('class','items head');
          var overlay_div2_p = document.createElement('p');
            overlay_div2_p.textContent = categories[i].name;
          var overlay_div2_hr = document.createElement('hr');
        var overlay_div3 = document.createElement('div');
          overlay_div3.setAttribute('class','items price');
          var overlay_div3_p = document.createElement('p');
            overlay_div3_p.setAttribute('class','new');
            overlay_div3_p.textContent = `${categories[i].price} Ks`;
        var overlay_div4 = document.createElement('div');
          overlay_div4.setAttribute('class','items price');
          var overlay_div4_span = document.createElement('span');
            overlay_div4_span.textContent = 'Purchase';

            overlay_div2.appendChild(overlay_div2_p);
            overlay_div2.appendChild(overlay_div2_hr);
            overlay_div3.appendChild(overlay_div3_p);
            overlay_div4.appendChild(overlay_div4_span);

        overlay.appendChild(overlay_div1);
        overlay.appendChild(overlay_div2);
        overlay.appendChild(overlay_div3);
        overlay.appendChild(overlay_div4);
        container.appendChild(overlay);
    row_column.appendChild(container);
    card_holder.appendChild(row_column);
  }
}
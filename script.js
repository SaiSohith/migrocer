let check;
    fetch("./products.json")
    .then(response => {
    return response.json();
    })
    .then(jsondata => check=jsondata);

function update() {
    let select = document.getElementById('category');
    let select1 = document.getElementById('category_2');
    let select2 = document.getElementById('category_3');
    
    let o1 = select.options[select.selectedIndex].value;
    let o2 = select1.options[select1.selectedIndex].value;
    let o3 = select2.options[select2.selectedIndex].value;
    
    console.log(o1);
    console.log(o2);
    console.log(o3);
    
    let trav=check.data
    // console.log(trav);
    
    // trav.forEach(function (tr) {
    //     if(tr.category_level1===o1 && tr.category_level2==o2 && tr.category_level3==o3){
    //         console.log(tr);
    //     }
    // });
    let app = document.getElementById('render');
    let html = '<ul>'+
    // console.log(trav);  
    trav.map(function(tr){
        return '<li>'+
                '<strong>Name: </strong>' + tr.name + '<br/>' +
                '<strong>ID: </strong>' + tr.id + '<br/>' +
                '<strong>Category: </strong>' + tr.category_level1 + '<br/>' +
                '<strong>Category_level2: </strong>' + tr.category_level2 + '<br/>' +
                '<strong>Category_level3: </strong>' + tr.category_level3 + '<br/>' +
              '</li>';
      }).join('');
      + '</ul>';

    app.innerHTML = html;

    
}


// window.onload = function display() {
//     let tra=check
    
//   }
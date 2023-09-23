(() => {
  const App = {
    htmlElements:{
      table: document.querySelector('.table'),
    },
    init(){
      console.log("start... ");
      App.handler.createInitialTable();
    },
    handler: {
      createInitialTable: ()=>{
        for(let i = 0; i<8; i++){
         let tr = App.methods.createdElemTr();
         console.log(tr);
          for(let j = 0; j<8; j++){
            let td = App.methods.createElemTd();
            let ver = j - i;
            if(ver%2 == 0){
              td.style.backgroundColor = 'white';
            }else{
              td.style.backgroundColor = 'black';
            }
            tr.appendChild(td);
          };
          App.htmlElements.table.appendChild(tr);
        };
      }
    },
    methods: {
      createdElemTr(){
        let tr = document.createElement("tr");
        tr.className="element-tr";
        return tr;
      },
      createElemTd(){
        let td = document.createElement("td");
        td.className =  "element-td";
        return td;
      },
/*       assignColorTable(){
        let td = document.getElementsByClassName("element-td");
        for(let j = 0; j<8; j++){
          if(j%2 == 0){
            td[j].style.backgroundColor = 'white';
          }else{
            td[j].style.backgroundColor = 'black';
          }
        }
        return td;
      }*/
    },
  };
  App.init();
})()
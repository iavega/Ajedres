'use client';
import style from '../page.module.css'

(() => {
  const App = {
    htmlElements:{
      table: document.querySelector('table')
    },
    init: () =>{
      console.log("start... ");
      addEventListener('load', () => {
        App.handler.createInitialTable();
      })
    },
    handler: {
      createInitialTable: ()=>{
          for(let i = 0; i<8; i++){
          let tr = App.methods.createdElemTr();
            for(let j = 0; j<8; j++){
              let td = App.methods.createElemTd();
              App.methods.assignColorTable(td, j, i)
              tr.appendChild(td);
            };
            console.log(tr)
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
        return td;
      },
      assignColorTable(td, j, i){
        let ver = j - i;
            if(ver%2 == 0){
              td.className = style.boxWhite;
            }else{
              td.className = style.boxBlack;
            }
        return td;
      }
    },
  };
  App.init();
})()

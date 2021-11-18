const data=[
    {
        name:"Abhishree",
        score:5,
        ll1:true,
        ll2:true,
        ll3:true
    },
    {
        name:"Me",
        score:95,
        ll1:true,
        ll2:true,
        ll3:true
    },
    {
        name:"Shit",
        score:24,
        ll1:true,
        ll2:true,
        ll3:true
    },
    {
        name:"ALI",
        score:50,
        ll1:true,
        ll2:true,
        ll3:true
    },
    {
        name:"Ranuk",
        score:15,
        ll1:true,
        ll2:true,
        ll3:true
    }
]
const genrateTable=(data)=>{
    const table=document.querySelector(".tables");
    data.forEach((item,idx)=>{
        const li=document.createElement("li");
        li.className="base-row";
        const div1=document.createElement("div");
        const div2=document.createElement("div");
        const div4=document.createElement("div");
        const div3=document.createElement("div");
        div1.className="col-1";
        div2.className="col-2";
        div3.className="col-3";
        div4.className="col-4";
        div1.innerHTML=idx+1;
        div3.innerHTML=item.name;
        div2.innerHTML=item.score;
        li.appendChild(div1);
        li.appendChild(div3);
        li.appendChild(div2);
        li.appendChild(div4);
        table.appendChild(li);
        console.log(item.idx);
    });
};
genrateTable(data);
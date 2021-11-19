const data=[
    {
        name:"Abhishree",
        score:95,
        ll1:true,
        ll2:true,
        ll3:true,
        ll:3
    },
    {
        name:"Me",
        score:95,
        ll1:true,
        ll2:true,
        ll3:true,
        ll:2
    },
    {
        name:"Shit",
        score:24,
        ll1:true,
        ll2:true,
        ll3:true,
        ll:3
    },
    {
        name:"ALI",
        score:50,
        ll1:true,
        ll2:true,
        ll3:true,
        ll:3
    },
    {
        name:"Ranuk",
        score:15,
        ll1:true,
        ll2:true,
        ll3:true,
        ll:3
    }
];
data.sort((a, b)=>{
    if(a.score - b.score)
        return  b.score-a.score;
    else
        return a.ll-b.ll;});
const genrateTable=(data)=>{
    const table=document.querySelector(".tables");
    // data.sort((a,b)=>(a.price>b.price));
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
        if(item.ll1)
            div4.innerHTML+="<img src='ll1.png' alt='lifeline-1'></img>";
        if(item.ll2)
            div4.innerHTML+="<img src='ll2.png' alt='lifeline-2'></img>";
        if(item.ll3)
            div4.innerHTML+="<img src='ll3.png' alt='lifeline-3'></img>";
        li.appendChild(div1);
        li.appendChild(div3);
        li.appendChild(div2);
        li.appendChild(div4);
        table.appendChild(li);
    });
};
genrateTable(data);

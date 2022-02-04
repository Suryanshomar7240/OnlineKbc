const data = [
    {
        name: "Team Jhatin",
        score: 0,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team RAW",
        score: 0,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team -3",
        score: 0,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team -4",
        score: 0,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team -5",
        score: 0,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team -6",
        score: 0,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team -7",
        score: 0,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team -8",
        score: 0,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team -9",
        score: 0,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team -10",
        score: 0,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team -11",
        score: 0,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
    {
        name: "Team -12",
        score: 0,
        // ll1: true,
        // ll2: true,
        // ll3: true,
        // ll: 3,
        // time: 150
        member: 5
    },
];
// data.sort((a, b) => {
//     if ((a.score - b.score) != 0)
//         return b.score - a.score;
//     else if ((a.time - b.time) != 0)   // commented for future kbc
//         return a.time - b.time;
//     else
//         return a.ll - b.ll;
// });
data.sort((a, b) => {
    if ((a.score - b.score) != 0)
        return b.score - a.score;
});
const genrateTable = (data) => {
    const table = document.querySelector(".tables");
    // data.sort((a,b)=>(a.price>b.price));
    data.forEach((item, idx) => {
        const li = document.createElement("li");
        li.className = "base-row";
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const div4 = document.createElement("div");
        const div3 = document.createElement("div");
        div1.className = "col_1";
        div2.className = "col_2";
        div3.className = "col_3";
        div4.className = "col_5";
        div1.innerHTML = idx + 1;
        div3.innerHTML = item.name;
        div2.innerHTML = item.score;
        div4.innerHTML = item.member;
        // if(item.ll1)
        //     div4.innerHTML+="<img src='img/audience poll.png' alt='lifeline-1'></img>";
        // if(item.ll2)
        //     div4.innerHTML+="<img src='img/DoubleDip.png' alt='lifeline-2'></img>";
        // if(item.ll3)
        //     div4.innerHTML+="<img src='img/google.png' alt='lifeline-3'></img>";
        li.appendChild(div1);
        li.appendChild(div3);
        li.appendChild(div2);
        li.appendChild(div4);
        table.appendChild(li);
    });
};
genrateTable(data);

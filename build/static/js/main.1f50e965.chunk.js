(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"electabuzz",image:"assets/images/electabuzz.png",count:0},{id:2,name:"electivire",image:"assets/images/electivire.png",count:0},{id:3,name:"elekid",image:"assets/images/elekid.png",count:0},{id:4,name:"galvantula",image:"assets/images/galvantula.png",count:0},{id:5,name:"jolteon",image:"assets/images/jolteon.png",count:0},{id:6,name:"joltik",image:"assets/images/joltik.png",count:0},{id:7,name:"minun",image:"assets/images/minun.png",count:0},{id:8,name:"pikachu",image:"assets/images/pikachu.png",count:0},{id:9,name:"plusle",image:"assets/images/plusle.png",count:0},{id:10,name:"raichu",image:"assets/images/raichu.png",count:0},{id:11,name:"zapdos",image:"assets/images/zapdos.png",count:0},{id:12,name:"abra",image:"assets/images/abra.png",count:0}]},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(3),i=a.n(c),r=a(4),o=a(5),m=a(7),l=a(6),u=a(8);a(15);var g=function(e){return n.a.createElement("div",{className:"score-bar"},n.a.createElement("div",{className:"score"},"Score: ",e.score),n.a.createElement("div",{id:"win-lose"},"Correct!"),n.a.createElement("div",{className:"high-score"},"High Score: ",e.highscore))},d=(a(16),function(e){return n.a.createElement("div",{className:"card",onClick:function(){e.cardClick(e.id)}},n.a.createElement("img",{className:"card-image",src:e.image,alt:"tile"}))}),h=a(1),f=(a(17),function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={cards:h,score:0,highscore:0},a.gameOver=function(){return a.state.score>a.state.highscore&&a.setState({highscore:a.state.score},function(){console.log("New Highscore: ",this.state.highscore)}),a.state.cards.forEach(function(e){e.count=0}),a.state.score===h.length?alert("You Win with a score of ".concat(a.state.score,"!")):alert("You lost. Your score was ".concat(a.state.score,". Please try again.")),a.setState({score:0}),a.shuffleCards(a.state.cards),!0},a.cardClick=function(e){a.state.cards.find(function(t,s){if(t.id===e){if(0===h[s].count)return h[s].count=h[s].count+1,a.setState({score:a.state.score+1},function(){console.log(this.state.score),this.correctText(),this.state.score===h.length&&this.gameOver()}),a.shuffleCards(a.state.cards),!0;a.gameOver()}})},a.shuffleCards=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),s=[e[a],e[t]];e[t]=s[0],e[a]=s[1]}return e},a.correctText=function(){var e=document.getElementById("win-lose");e.style.opacity=1,setTimeout(function(){e.style.opacity=0},750)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"wrapper"},n.a.createElement(g,{score:this.state.score,highscore:this.state.highscore}),n.a.createElement("div",{className:"card-container"},this.state.cards.map(function(t){return n.a.createElement(d,{cardClick:e.cardClick,key:t.id,id:t.id,image:t.image})})),n.a.createElement("div",{className:"inscrtuctions"},"Click an image to begin. Try not to click the same image twice!"))}}]),t}(n.a.Component));a(18);i.a.render(n.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.1f50e965.chunk.js.map
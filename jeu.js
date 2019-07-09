var personnage = {
    nom: "aurora",
    xp: 0,
    santemax: 150,
    sante: 150,
    force: 40,
    magie: 50,
    lvl: 1,
    xpseuil: 50,
    PO: 50,
};

// LISTE MECHANT
var insect = {
    nom: "scaribos",
    sante: 70,
    santemax: 70,
    force: 15,
    xpdonné: 30,
    POdonné: 5,
};
var gobelin = {
    nom: "goblinos",
    sante: 250,
    santemax:250,
    force: 30,
    xpdonné: 70,
    POdonné: 20,
};
var boss = {
    nom: "Alexandre",
    sante: 1000,
    santemax:1000,
    force: 70,
    magie: 70,
    xpdonné: 500,
    POdonné: 150,
};

// partage de donné personnage
document.getElementById("nom").innerText = personnage.nom;
document.getElementById("lvl").innerText = personnage.lvl;
document.getElementById("sante").innerText = personnage.sante;
document.getElementById("santemax").innerText = personnage.santemax;
document.getElementById("force").innerText = personnage.force;
document.getElementById("xp").innerText = personnage.xp;
document.getElementById("xpseuil").innerText = personnage.xpseuil;
document.getElementById("PO").innerText = personnage.PO;
// partage de donné insect
document.getElementById("nominsect").innerText = insect.nom;
document.getElementById("santeinsect").innerText = insect.sante;
document.getElementById("santemaxinsect").innerText = insect.santemax;
document.getElementById("forceinsect").innerText = insect.force;
document.getElementById("xpdonneinsect").innerText = insect.xpdonné;
// partage de donné gobelin
document.getElementById("nomgobelin").innerText = gobelin.nom;
document.getElementById("santegobelin").innerText = gobelin.sante;
document.getElementById("santemaxgobelin").innerText = gobelin.santemax;
document.getElementById("forcegobelin").innerText = gobelin.force;
document.getElementById("xpdonnegobelin").innerText = gobelin.xpdonné;
// partage de donné boss
document.getElementById("nomboss").innerText = boss.nom;
document.getElementById("santeboss").innerText = boss.sante;
document.getElementById("santemaxboss").innerText = boss.santemax;
document.getElementById("forceboss").innerText = boss.force;
document.getElementById("xpdonneboss").innerText = boss.xpdonné;


//onClick gagner
//document.getElementById('gagner').addEventListener("click", gagner);



//monter en lvl
function gagner(x) {
    personnage.xp += x;
    if (personnage.xp >= personnage.xpseuil) {
        personnage.xp = personnage.xp-personnage.xpseuil;
        personnage.lvl += 1;
        personnage.magie += 8;
        personnage.force += 7;
        personnage.santemax += 20;
        personnage.sante = personnage.santemax;
        personnage.xpseuil = Math.floor(personnage.xpseuil * 1.5);
        document.getElementById("lvlup").innerHTML = "+LVL UP";
        document.getElementById("forceup").innerHTML = "+7";
        console.log(decrire());
    }
    else {
        console.log(decrire());
        document.getElementById("lvlup").innerHTML = "";
        document.getElementById("forceup").innerHTML = "";
    }
};


//POTION
function potion() {
    document.getElementById("lvlup").innerHTML = "";
    if (personnage.sante + 50 <= (personnage.santemax)) {
        personnage.sante += 50;
        console.log('Vos regagnez 50 point de vie');
        document.getElementById("nom").innerText = personnage.nom;
        document.getElementById("lvl").innerText = personnage.lvl;
        document.getElementById("sante").innerText = personnage.sante;
        document.getElementById("santemax").innerText = personnage.santemax;
        document.getElementById("force").innerText = personnage.force;
        document.getElementById("xp").innerText = personnage.xp;
        document.getElementById("xpseuil").innerText = personnage.xpseuil;
        document.getElementById("santeplus").innerHTML = "+50";
        document.getElementById("santedown").innerHTML = "";
        document.getElementById("xpup").innerHTML = "";
    }
    else {
        document.getElementById("santeplus").innerHTML = "+"+(personnage.santemax-personnage.sante);
        console.log('vous avez récupéré: '+(personnage.santemax-personnage.sante)+' PV');
        personnage.sante = personnage.sante+(personnage.santemax-personnage.sante);
        document.getElementById("sante").innerText = personnage.sante;
        document.getElementById("santedown").innerHTML = "";
        document.getElementById("xpup").innerHTML = "";
    }
};
//ACTIVER POTION
document.getElementById('potion').addEventListener("click", potion);



// fonction decrire
function decrire() {
    return `${personnage.nom} a ${personnage.sante} points de vie (dont ${personnage.santemax} de point de vie MAX) et ${personnage.force} en force et ${personnage.magie} en magie. Son lvl est de ${personnage.lvl} et son xp de ${personnage.xp}. prochain lvl a ${personnage.xpseuil} xp`;
};


//FIGHT INSECT 
function fightinsect() {
    document.getElementById("lvlup").innerHTML = "";
    let coeffight = Math.floor((Math.random() * (personnage.force / 2)) - (personnage.force / 4));
    let coeffightinsect = Math.floor((Math.random() * (insect.force / 2)) - (insect.force / 4));
    console.log('un ' + insect.nom + ' vous attaque!');
    insect.sante -= (personnage.force + coeffight);
    personnage.sante -= (insect.force + coeffightinsect);
    console.log('vous retirez: ' + (personnage.force + coeffight) + 'PV, ses PV sont maintenant a: ' + insect.sante);
    console.log('il vous a retiré: ' + (insect.force + coeffightinsect) + 'PV, t\'es PV sont maintenant a: ' + personnage.sante);

    document.getElementById("santeinsectdown").innerHTML = "-"+(personnage.force + coeffight);
    document.getElementById("santeplus").innerHTML = "";
    document.getElementById("santedown").innerText = "-"+(insect.force + coeffightinsect);


// partage de donné insect
document.getElementById("nominsect").innerText = insect.nom;
document.getElementById("santeinsect").innerText = insect.sante;
document.getElementById("santemaxinsect").innerText = insect.santemax;
document.getElementById("forceinsect").innerText = insect.force;
document.getElementById("xpdonneinsect").innerText = insect.xpdonné;

    if (insect.sante <= 0) {
        gagner(insect.xpdonné);
        decrire();
        console.log('le scaraïboq est dead');
        insect.sante = insect.santemax;
        document.getElementById("nom").innerText = personnage.nom;
        document.getElementById("lvl").innerText = personnage.lvl;
        document.getElementById("sante").innerText = personnage.sante;
        document.getElementById("santemax").innerText = personnage.santemax;
        document.getElementById("force").innerText = personnage.force;
        document.getElementById("xp").innerText = personnage.xp;
        document.getElementById("xpseuil").innerText = personnage.xpseuil;
        document.getElementById("xpup").innerText = "+30";

    }
    else if (personnage.sante <= 0) {
        document.location.reload();
        alert("vous êtes mort");
    }
    else {
        document.getElementById("nom").innerText = personnage.nom;
        document.getElementById("lvl").innerText = personnage.lvl;
        document.getElementById("sante").innerText = personnage.sante;
        document.getElementById("santemax").innerText = personnage.santemax;
        document.getElementById("force").innerText = personnage.force;
        document.getElementById("xp").innerText = personnage.xp;
        document.getElementById("xpseuil").innerText = personnage.xpseuil;
        document.getElementById("xpup").innerText = "";

    }
};
//lancement fight insect
document.getElementById('insect').addEventListener("click", fightinsect);
//FUITE INSECT
function fuiteInsect() {
    insect.sante=70;
    document.getElementById("santeinsect").innerText = insect.sante;
    document.getElementById("santeinsectdown").innerHTML = "";
};
document.getElementById('stopinsect').addEventListener("click", fuiteInsect);


//FIGHT GOBELIN 

function fightgobelin() {
    document.getElementById("lvlup").innerHTML = "";
    let coeffight = Math.floor((Math.random() * (personnage.force / 2)) - (personnage.force / 4));
    let coeffightgobelin = Math.floor((Math.random() * (gobelin.force / 2)) - (gobelin.force / 4));
    console.log('un ' + gobelin.nom + ' vous attaque!');
    gobelin.sante -= (personnage.force + coeffight);
    personnage.sante -= (gobelin.force + coeffightgobelin);
    console.log('vous retirez: ' + (personnage.force + coeffight) + 'PV, ses PV sont maintenant a: ' + gobelin.sante);
    console.log('il vous a retiré: ' + (gobelin.force + coeffightgobelin) + 'PV, t\'es PV sont maintenant a: ' + personnage.sante);

    document.getElementById("santegobelin").innerText = gobelin.sante;
    document.getElementById("santeplus").innerHTML = "";
    document.getElementById("santedown").innerText = "-"+(gobelin.force + coeffightgobelin);
    document.getElementById("santegobelindown").innerHTML = "-"+(personnage.force + coeffight);

    if (gobelin.sante <= 0) {
        gagner(gobelin.xpdonné);
        decrire();
        console.log('le goblinos est dead');
        gobelin.sante = 250;
        document.getElementById("nom").innerText = personnage.nom;
        document.getElementById("lvl").innerText = personnage.lvl;
        document.getElementById("sante").innerText = personnage.sante;
        document.getElementById("santemax").innerText = personnage.santemax;
        document.getElementById("force").innerText = personnage.force;
        document.getElementById("xp").innerText = personnage.xp;
        document.getElementById("xpseuil").innerText = personnage.xpseuil;
        document.getElementById("xpup").innerText = "+70";

    }
    else if (personnage.sante <= 0) {
        document.location.reload();
        alert("vous êtes mort");
    }
    else {
        document.getElementById("nom").innerText = personnage.nom;
        document.getElementById("lvl").innerText = personnage.lvl;
        document.getElementById("sante").innerText = personnage.sante;
        document.getElementById("santemax").innerText = personnage.santemax;
        document.getElementById("force").innerText = personnage.force;
        document.getElementById("xp").innerText = personnage.xp;
        document.getElementById("xpseuil").innerText = personnage.xpseuil;
        document.getElementById("xpup").innerText = "";

    }
};
document.getElementById('gobelin').addEventListener("click", fightgobelin);



//coef combat
/*let coeffight = Math.floor((Math.random()*(personnage.force/2))-(personnage.force/4));

let coeffightinsect = Math.floor((Math.random()*(insect.force/2))-(insect.force/4));*/

//FIGHT BOSS 
function fightboss() {
    document.getElementById("lvlup").innerHTML = "";
    let coeffight = Math.floor((Math.random() * (personnage.force / 2)) - (personnage.force / 4));
    let coeffightboss = Math.floor((Math.random() * (boss.force / 2)) - (boss.force / 4));
    console.log('un ' + boss.nom + ' vous attaque!');
    boss.sante -= (personnage.force + coeffight);
    personnage.sante -= (boss.force + coeffightboss);
    console.log('vous retirez: ' + (personnage.force + coeffight) + 'PV, ses PV sont maintenant a: ' + boss.sante);
    console.log('il vous a retiré: ' + (boss.force + coeffightboss) + 'PV, t\'es PV sont maintenant a: ' + personnage.sante);
    document.getElementById("santeboss").innerText = boss.sante;

    
    document.getElementById("santeplus").innerHTML = "";
    document.getElementById("santedown").innerText = "-"+(boss.force + coeffightboss);
    document.getElementById("santebossdown").innerHTML = "-"+(personnage.force + coeffight);

    if (boss.sante <= 0) {
        gagner(boss.xpdonné);
        decrire();
        console.log('le goblinos est dead');
        boss.sante = 1000;
        document.getElementById("nom").innerText = personnage.nom;
        document.getElementById("lvl").innerText = personnage.lvl;
        document.getElementById("sante").innerText = personnage.sante;
        document.getElementById("santemax").innerText = personnage.santemax;
        document.getElementById("force").innerText = personnage.force;
        document.getElementById("xp").innerText = personnage.xp;
        document.getElementById("xpseuil").innerText = personnage.xpseuil;
        document.getElementById("xpup").innerText = "+500";
    }
    else if (personnage.sante <= 0) {
        document.location.reload();
        alert("vous êtes mort");
    }
    else {
        document.getElementById("nom").innerText = personnage.nom;
        document.getElementById("lvl").innerText = personnage.lvl;
        document.getElementById("sante").innerText = personnage.sante;
        document.getElementById("santemax").innerText = personnage.santemax;
        document.getElementById("force").innerText = personnage.force;
        document.getElementById("xp").innerText = personnage.xp;
        document.getElementById("xpseuil").innerText = personnage.xpseuil;
        document.getElementById("xpup").innerText = "";

    }
};
document.getElementById('boss').addEventListener("click", fightboss);
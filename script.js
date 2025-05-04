let Metre = true;
let poid = true;

function calculerIMC() {
    const poids = parseFloat(document.getElementById('Poids').value);
    const taille = parseFloat(document.getElementById('Taille').value);
    const saveChecked = document.getElementById('saveInputs').checked;


    const tailleFinale = Metre ? taille : taille / 100;
    const poidsFinale = poid ? poids : poids / 1000;

    const imc = poidsFinale / (tailleFinale * tailleFinale);

    let message = "";

    if (isNaN(imc) || imc < 0) {
        if ((isNaN(poids) || poids < 0) && (isNaN(taille) || taille < 0)) {
            message = "Veuiller remplir correctement les champs !!!";
            document.getElementById('IMC_affichage1').innerText = `${message}`;
        }
        else if (isNaN(poids) || poids < 0) {
            message = "le poid n'est pas correctement remplit !!!";
            document.getElementById('IMC_affichage1').innerText = `${message}`;
        }
        else if (isNaN(taille) || taille < 0) {
            message = "la taille n'est pas correctement remplit !!!";
            document.getElementById('IMC_affichage1').innerText = `${message}`;
        }
    }
    else {
        if (imc < 18.5) {
            message = "maigreur.";
        } else if (imc >= 18.5 && imc < 25) {
            message = "normal.";
        } else if (imc >= 25 && imc < 30) {
            message = "surpoids.";
        } else if (imc >= 30 && imc < 35) {
            message = "obésité.";
        } else if (imc >= 35 && imc < 40) {
            message = "sévère.";
        } else {
            message = "obésité morbide";
        }
        document.getElementById('IMC_affichage').innerText = `IMC : ${imc.toFixed(2)}`;
        document.getElementById('IMC_affichage1').innerText = `${message}`;
    }
    if (saveChecked) {
        console.log("save")
        document.getElementById('saveMessage').innerText = "✅ Données sauvegardées.";
    } else {
        console.log("don't save")
        document.getElementById('Poids').value = '';
        document.getElementById('Taille').value = '';
        document.getElementById('saveMessage').innerText = "❌ Données non sauvegardées.";
    }
}

function changerUnite() {
    const tailleInput = document.getElementById('Taille');
    const switchBtn = document.getElementById('switch');
    const bataille = document.getElementById('ba_taille');


    let valeur = parseFloat(tailleInput.value);

    if (tailleInput.placeholder == "Taille en cm ('180')."){
        tailleInput.placeholder = "Taille en m ('1.80').";
        switchBtn.innerText = "Passer en cm";
        bataille.innerText = "Taille en mètre :";
        Metre = true;
    } else {
        tailleInput.placeholder = "Taille en cm ('180').";
        switchBtn.innerText = "Passer en m";
        bataille.innerText = "Taille en cm :";
        Metre = false;
    }
}

function changerUnite_p() {
    const poidsInput = document.getElementById('Poids');
    const switchBtn = document.getElementById('switch_p');
    const baPoids = document.getElementById('ba_poids');

    let valeur = parseFloat(poidsInput.value);

    if (poidsInput.placeholder == "Poids en gramme ('80')."){
        poidsInput.placeholder = "Poids en kg ('80').";
        switchBtn.innerText = "Passer en gramme";
        baPoids.innerText = "Poids en kg :";
        poid = true;
    } else {
        poidsInput.placeholder = "Poids en gramme ('80').";
        switchBtn.innerText = "Passer en kg";
        baPoids.innerText = "Poids en g :";
        poid = false;
    }

}
function calculerIMC() {
    const poids = parseFloat(document.getElementById('Poids').value);
    const taille = parseFloat(document.getElementById('Taille').value);

    const imc = poids / (taille * taille);

    console.log(imc)

    let message = "";

    if (isNaN(imc) || imc == 0) {
        if ((isNaN(poids) || poids == 0) && (isNaN(taille) || taille == 0)) {
            message = "Veuiller remplir correctement les champs !!!";
            document.getElementById('IMC_affichage').innerText = `IMC : ${imc.toFixed(2)}`;
            document.getElementById('IMC_affichage1').innerText = `${message}`;
        }
        else if (isNaN(poids) || poids == 0) {
            message = "le poid n'est pas correctement remplit !!!";
            document.getElementById('IMC_affichage').innerText = `IMC : ${imc.toFixed(2)}  Le champs du poid est mal remplit :${poids}`;
            document.getElementById('IMC_affichage1').innerText = `${message}`;
        }
        else if (isNaN(taille) || taille == 0) {
            message = "la taille n'est pas correctement remplit !!!";
            document.getElementById('IMC_affichage').innerText = `IMC : ${imc.toFixed(2)}  Le champs de la taille est mal remplit :${taille}`;
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
}


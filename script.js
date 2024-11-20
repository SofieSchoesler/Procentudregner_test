function calculatePercentage() {
    const group1 = parseInt(document.getElementById('group1').value) || 0;
    const group2 = parseInt(document.getElementById('group2').value) || 0;
    const group3 = parseInt(document.getElementById('group3').value) || 0;
    const group4 = parseInt(document.getElementById('group4').value) || 0;

    const totalSick = group1 + group2 + group3 + group4;
    const totalChickens = 100; // 25 høns i 4 grupper

    const percentage = (totalSick / totalChickens) * 100;

    document.getElementById('result').innerText = `Procent syge høns: ${percentage.toFixed(2)}%`;
}

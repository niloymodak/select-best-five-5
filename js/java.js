let count = 0;
function selectPlayer(id) {
    count++;
    if (count > 5) {
        alert('You have Selected 5 Players. You are done!')
    }
    else {
        const playerName = document.getElementById(id).value;
        let ol = document.getElementById("list");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(playerName));
        ol.appendChild(li);
        document.getElementById(id).disabled = true;
        document.getElementById(id).style.background = 'rgba(197, 235, 252, 0.653)';
        document.getElementById(id).style.border = 'none';

    }
}
document.getElementById('calculate').addEventListener('click', function () {
    const perPlayer = document.getElementById('playerCost').value;
    const playercost = parseInt(perPlayer);
    if (count <= 5) {
        document.getElementById('playerExpense').innerText = (count * playercost);
    }
    else {
        document.getElementById('playerExpense').innerText = (5 * playercost);
    }
});
document.getElementById('calculateTotal').addEventListener('click', function () {
    const playerExpense = document.getElementById('playerExpense').innerText;
    const expensePlayer = parseInt(playerExpense);
    const managerCost = document.getElementById('managerCost').value;
    const costManager = parseInt(managerCost);
    const coachCost = document.getElementById('coachCost').value;
    const costCoach = parseInt(coachCost);
    document.getElementById('totalCost').innerText = (expensePlayer + costManager + costCoach);
});
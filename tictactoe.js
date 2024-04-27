const gameBoard= document.createElement('div');
document.body.appendChild(gameBoard);
gameBoard.id ='gameBoard';

const rows = 3;
const colums = 3;

for (let i=0; i< rows; i++){
    const row = document.createElement('div');
    gameBoard.appendChild(row);

    for(let j = 0; j < colums;j++){
        const cell = document.createElement('span')
        row.appendChild(cell);
        
        cell.addEventListener('click',handleClick);
        cell.className= 'cell';

    }
}
function handleClick(event){
    event.target.innerHTML='Q';


}
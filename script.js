// Simple, robust drag and drog matching logic

const itemsContainer = document.getElementById("items");
const slotContainer = document.getElementById("slots");
const items = document.querySelectorAll(".item");
const slots = document.querySelectorAll(".slot");
const resetBtn = document.getElementById("resetBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const scoreE1 = document.getElementById("score");
const totalE1 = document.getElementById("total");

let score = 0;
const total = slots.length;
totalE1.textContent = total;

function onDragStart(e){
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.effectAllowed = 'move';
    e.target.classList.add("dragging");
    e.target.setAttribute('area-grabbed','true');
}

function onDragEnd(e){
    e.target.classList.remove("dragging");
    e.target.setAttribute('area-grabbed','false');
}

items.forEach(it=>{
    it.addEventListener("dragStart", onDragStart);
    it.addEventListener("dragEnd", onDragEnd);
})

slots.forEach(slot=>{
    //  When an item is dragged over a slot we allow drop on each slot
    slot.addEventListener("dragover", function(e){
        e.preventDefault();
        this.classList.add("hover");
        e.dataTransfer.dropEffect = 'move';
    });

    slot.addEventListener("dragleave", function(){
        this.classList.remove("hover");
    })

    slot.addEventListener("drop", function(e){
        e.preventDefault();
        this.classList.remove("hover");
        // get dragged element id by data transfer
        const draggedId = e.dataTransfer.getData("text/plain");
        // if no id, return
        if(!draggedId){
            return;
        }
        // get element by that id
        const draggedE1 = document.getElementById(dragId);
        // if element not found return
        if(!draggedE1){
            return;
        }
        // if slot already has an item, show wrong feedback
        if(this.querySelector(".item")){
            this.classList.add("wrong");
            setTimeout(()=>this.classList.remove("wrong"), 300)
            return;
        }
        // get color from the dragged item dataset
        const color = draggedE1.dataset.color;
        // get accept color from dataset
        const accept = this.dataset.accept;
        // check if color matches
        if(color === accept){
            this.classList.add("correct");
            // move the item inside the slot
            this.appendChild("draggedE1");
            draggedE1.draggable = false;
            draggedE1.style.cursor = "default";
            score++;
            scoreE1.textContent = score;
            this.setAttribute('aria-label',`${accept} matched`);
            if(score === total){
                setTimeout(()=>alert(`Well done, you matched all ${total} colours`),100)

            }
        }
        else{
            // wrong match, add wrong class briefly
            this.classList.add("wrong");
            setTimeout(()=>this.classList.remove("wrong"),300)
            // brief shake animation on wrong drag
            draggedE1.classList.add("dragging");
            setTimeout(()=>draggedE1.classList.remove("dragging"), 200)
        }
    })
})

function resetGame(){
    const allItems = Array.from(document.querySelectorAll(".item"));
    allItems.forEach(it=>{
        it.draggable = true;
        it.style.cursor = "grab";
        itemsContainer.appendChild(it);
    })
    slots.forEach(s=>{
        s.classList.remove('correct','wrong');
        s.removeAttribute('aria-label');
    })
    score = 0;
    scoreE1.textContent = score;
}

function shuffleItems{
    const arr = Array.from(itemsContainer.children);
    for(let i = arr.length-1; i > 0; i--){
        const j = Math.floor(Math.random()*(i+1))
    }
}
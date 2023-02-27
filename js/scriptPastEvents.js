const pastEvents =document.getElementById('past-events');

function createPastEvents(arrayData){
    let card = '';
    for(const event of arrayData){
        if(parent(event.date) < parseInt(currentDate)){
            card += 
            `
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="${event.image}" class="card-img-top alt=${event.name}>
                    <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                    <a href="details.html" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
            <div class="card-footer pt-3 pb-3 d-flex justify-content-around align-items-xl-baseline">
                <p class="mb-0 d-flex flex-row flex-md-column flex-xl-row">
                    <span>
                        <i class="bi bi-tag"></i>
                        price:&nbsp;
                    </span>
                    ${event.price}
                </p>
                <a href="details.html">Details</a>
            </div>
            `
        }
    }

    return card
}

let cardElements = createPastEvents(events);
pastEvents.innerHTML = cardElements;
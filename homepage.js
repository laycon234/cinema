let screen = document.getElementById("screen");
function dm() {
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}
let moviesarray = [
  {
    id: 1,
    image: "./m6.jpg",
    title: "Black panther",
    video: "https://youtu.be/_Z3QKkl1WyM",
    description:
      "",
  },
  {
    id: 2,
    image: "./m2.jpg",
    title: "Dunkrik",
    description:
      "",
  },
  {
    id: 3,
    image: "./m3.jpg",
    title: "Batman vs Superman",
    description:
      "",
  },
  {
    id: 4,
    image: "./home1.jpg",
    title: "Venom",
    description:
      "",
  },
  {
    id: 5,
    image: "./home2.jpg",
    title: "Avengers",
    description:
      " ",
  },
  {
    id: 6,
    image: "./coming1.jpg",
    title: "Johnny English",
    description:
      "",
  },
  {
    id: 7,
    image:
      "./m7.jpg",
    title: "Thor",
    description:
      "",
  },
  // {
  //   id: 8,
  //   image: "./battle on bukka street.jpg",
  //   title: "Black panther",
  //   description: "",
  // },
  {
    id: 9,
    image: "./m1.png",
    title: "Venom",
    description:
      "",
  },
  {
    id: 10,
    image: "./coming2.jpg",
    title: "Warcraft",
    description:
      "",
  },
  {
    id: 11,
    image: "./coming3.jpg",
    title: "Rampage",
    description:
      "",
  },
  {
    id: 12,
    image: "./coming4.jpg",
    title: "Iron Lady",
    description: "",
  },
  {
    id: 13,
    image: "./coming5.jpg",
    title: "Justice League",
    description:
      "",
  },
  {
    id: 14,
    image: "./coming6.jpg",
    title: "Doctor Strange",
    description:
      "",
  },
  {
    id: 15,
    image: "./coming7.jpg",
    title: "Black Widow",
    description:
      "",
  },
  {
    id: 16,
    image: "./coming8.jpg",
    title: "Captain Marvel",
    description:
      "",
  },
  {
    id: 17,
    image: "./coming2.jpg",
    title: "Warcraft",
    description:
      "",
  },
  {
    id: 18,
    image: "./coming10.jpg",
    title: "Guardians of the Galaxy",
    description: "",
  },
  {
    id: 19,
    image: "./coming3.jpg",
    title: "Rampage",
    description: "",
  },
  {
    id: 20,
    image: "./m2.jpg",
    title: "Dunkrik",
    description: "",
  },
];
// let moviesarray = JSON.parse(localStorage.getItem("moviesarray"));
// console.log(moviesarray);
for (let index = 0; index < moviesarray.length; index++) {
  const element = moviesarray[index];
  document.getElementById("screen").innerHTML += `
    <div class="allmovie">
      <div class="movie">
        <div class="mv-img mx-4 mt-2 ">
          <img src="${element.image}" alt="">  
        </div>
        <h4 class="mx-4">${element.title}</h4>
        <button class="btn btn-outline-danger mx-4" onclick="moviedetials(${index})"><a class="cvc" href="#dtss">Click to see full details</a></button>
      </div>
    </div>
`;
}
// let moviesarray = JSON.parsh(localStorage.getItem("moviesarray"));
function moviedetials(index) {
  document.getElementById("movie_details").innerHTML = "";
  document.getElementById("movie_details").innerHTML += `
  <div id="dtss">
      <div>
          <div class="det-img">
              <img src="${moviesarray[index].image}" alt="">
          </div>
          <h1 class="text-warning h1dts">${moviesarray[index].title}</h1>
          <h3 class="text-light h3dts">${moviesarray[index].description}</h3>
      </div>
      <div class="d-flex">
      <button type="button" class="btn btn-danger mx-4 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          WATCH TRAILER
      </button>
      <div class="modal fade modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Watch Trailer for ${moviesarray[index].title}</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <div class="mx-5">
                        <iframe width="660" height="340" src="https://www.youtube.com/embed/_Z3QKkl1WyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                        </iframe>
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
      <button type="button" class="btn btn-danger mx-4 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
          Book Ticket
      </button>
      <div class="modal fade modal-xl" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Make Payment for ${moviesarray[index].title} </h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <div class="aboutticket d-flex">
                          <section class="ticket ">
                              <h2>Ticket</h2>
                              <p>Price: $100 per person</p>
                              <div class="quantity">
                                <button class="btn btn-outline-danger" id="decreasePersonsBtn" onclick="decreaseNumPersons()">-</button>
                                <button class="btn btn-outline-danger" id="increasePersonsBtn" onclick="increaseNumPersons()">+</button>
                                <h3>Number of Persons: <br> <span id="numPersons">1</span></h3>
                              </div>
                              <h3>Total:  $<span id="ticketAmount">100</span></h3>
                          </section>
                          <section class="refreshment mx-4 ">
                              <h2>Refreshment</h2>
                              <p>Price: $5 per popcorn and drink</p>
                              <div class="quantity">
                                  <button class="btn btn-outline-danger" id="decreaseRefreshmentBtn" onclick="removeRefreshment()">-</button>
                                  <button  class="btn btn-outline-danger" id="increaseRefreshmentBtn" onclick="addRefreshment()">+</button>
                                  <h4>Number of Refreshment for Each Person: <br> <span id="numRefreshments">0</span></h4>
                              </div>
                              <h3>Total: $<span id="refreshmentAmount">0</span></h3>
                          </section>
                        <section class="checkout">
                            <h2>Checkout</h2>
                            <button class="btn btn-outline-primary" id="checkoutBtn" onclick="makePayment()">Checkout</button>
                            <h3>Total Amount: $<span id="totalAmount">100</span></h3>
                        </section>
                    </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
        
      </div>
  </div>
  `;
}
// index();

//  <img class="det-img" src="${moviesarray[index].image}" alt="">

// Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.

{
  /* <button type="button" class="btn btn-danger mx-4 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  WATCH TRAILER
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_Z3QKkl1WyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */
}
function makePayment() {
  let ticketAmount = ticketPrice * numPersons;
  let refreshmentAmount = refreshmentPrice * numRefreshments * numPersons;
  let totalAmount = ticketAmount + refreshmentAmount;
  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-52df64732ffd5c7c412d93d3aaf42cb6-X",
    tx_ref: "titanic-48981487343MDI0NzMx",
    amount: totalAmount,
    currency: "USD",
    payment_options: "card, mobilemoneyghana, ussd",
    redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "jaybeejidex@gmail.com",
      phone_number: "08024024197",
      name: "Ismael Abdullahi",
    },
    customizations: {
      title: "The Viva Cinema",
      description:
        "Enjoy unlimited fun and total comfort watching movies at our cinemas with friends and loved ones🥳",
      logo: "https://vivacinemas.com/wp-content/uploads/2022/04/logo.webp",
    },
  });
  window.print();
}
function gotosignin() {
  window.location.href = "./signup.html";
}
// initial values
let ticketPrice = 100;
let refreshmentPrice = 5;
let numPersons = 1;
let numRefreshments = 0;

// functions for updating the amounts
function updateTicketAmount() {
  let ticketAmount = ticketPrice * numPersons;
  document.getElementById("ticketAmount").innerHTML = ticketAmount;
  updateTotalAmount();
}

function addRefreshment() {
  numRefreshments += 1;
  document.getElementById("numRefreshments").innerHTML = numRefreshments;
  updateRefreshmentAmount();
}

function removeRefreshment() {
  if (numRefreshments > 0) {
    numRefreshments -= 1;
    document.getElementById("numRefreshments").innerHTML = numRefreshments;
    updateRefreshmentAmount();
  }
}

function updateRefreshmentAmount() {
  let refreshmentAmount = refreshmentPrice * numRefreshments * numPersons;
  document.getElementById("refreshmentAmount").innerHTML = refreshmentAmount;
  updateTotalAmount();
}

function increaseNumPersons() {
  numPersons += 1;
  document.getElementById("numPersons").innerHTML = numPersons;
  updateTicketAmount();
}

function decreaseNumPersons() {
  if (numPersons > 1) {
    numPersons -= 1;
    document.getElementById("numPersons").innerHTML = numPersons;
    updateTicketAmount();
  }
}

function updateTotalAmount() {
  let ticketAmount = ticketPrice * numPersons;
  let refreshmentAmount = refreshmentPrice * numRefreshments * numPersons;
  let totalAmount = ticketAmount + refreshmentAmount;
  document.getElementById("totalAmount").innerHTML = totalAmount;
}

// initial updates
updateTicketAmount();
updateRefreshmentAmount();
updateTotalAmount();
//npm init react-app reactjs
//https://apply.workable.com/kuda/
//https://web.whatsapp.com/desktop/windows/release/x64/WhatsAppSetup.exe
// My backend
// PYTHON
// MSQL
// DJANGO

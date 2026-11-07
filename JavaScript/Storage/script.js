const Jsondata  = {
    title: "MyPhone 18",
    description: "very good phone is deep beetroot Color",
    button1: "₹25000",
    button2: "buynow",
  };

  const dataReadyToStore = JSON.stringify(Jsondata);
  localStorage.setItem("myNewData",dataReadyToStore);
  localStorage.setItem("your Name","Kalpesh Sahu");

  const getLSData = localStorage.getItem("myNewData");

  document
  .querySelector("body");
  .appendChild((document.createElement("div").innerText=getLSData));

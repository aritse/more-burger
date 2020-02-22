$(document).ready(() => {
  $("#add-customer-form").submit(event => {
    event.preventDefault();
    const customerName = $("#customerName")
      .val()
      .trim();
    $.ajax("/customer", {
      method: "post",
      data: { name: customerName }
    })
      .then(() => location.reload())
      .catch(error => console.log(error));
  });

  $("#add-burger-form").submit(event => {
    event.preventDefault();
    const burgerName = $("#burgerName")
      .val()
      .trim();
    $.ajax("/burger", {
      method: "post",
      data: { burgerName }
    })
      .then(() => location.reload())
      .catch(error => console.log(error));
  });

  $(".devour-button").click(function() {
    const burgerId = $(this).data("id");
    const customerId = $("#customer-select option:selected").data("id");

    if (customerId) {
      $.ajax("/burger/" + burgerId, {
        method: "PUT",
        data: { devoured: 1, CustomerId: customerId }
      })
        .then(() => location.reload())
        .catch(error => console.log(error));
    } else {
      alert("Who is eating me?");
    }
  });

  $(".delete-btn").click(function() {
    const burgerId = $(this).data("id");
    $.ajax("/burger/" + burgerId, {
      method: "DELETE"
    })
      .then(() => location.reload())
      .catch(error => console.log(error));
  });

  $("#customer-select").change(function() {
    const customerId = $("#customer-select option:selected").data("id");
    if (customerId) {
      $("#devoured")
        .children()
        .css("display", "none")
        .removeClass();
      $(`#devoured>li[data-id=${customerId}]`)
        .css("display", "")
        .addClass("list-group-item d-flex justify-content-between text-dark");
    } else {
      $("#devoured")
        .children()
        .css("display", "")
        .addClass("list-group-item d-flex justify-content-between text-dark");
    }
  });
});

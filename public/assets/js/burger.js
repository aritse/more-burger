$(document).ready(() => {
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

  $("#customerSelect").change(() => {
    const id = $("#customer-select option:selected").data("id");
    $.ajax("/burger/" + id, {
      method: "GET"
    })
      .then(() => location.reload())
      .catch(err => console.log(err));
  });
});
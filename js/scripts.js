// Business logic:

function equilateral(side1, side2, side3) { // All 3 sides are equal
  if (side1 === side2 && side1 === side3) {
    return true;
  }
  else {
    return false;
  }
}

function isosceles(side1, side2, side3) { // Only two sides are equal
  if (this.valid(side1, side2, side3)) {
    if (side1 === side2 && side1 != side3) {
      return true;
    }
    else if (side2 === side3 && side2 != side1) {
      return true;
    }
    else if (side3 === side1 && side3 != side2) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

function scalene(side1, side2, side3) { // No sides are equal
  if (this.valid(side1, side2, side3)) {
    if (side1 === side2 || side1 === side3) {
      return false;
    }
    else if (side2 === side3) {
      return false;
    }
    else {
      return true;
    }
  }
  else {
    return false;
  }
}

function valid(side1, side2, side3) { // Sum of any two sides is less than or equal to the third
  if ((side1 + side2) <= side3) {
    return false;
  }
  else if ((side2 + side3) <= side1) {
    return false;
  }
  else if ((side1 + side3) <= side2) {
    return false;
  }
  else {
    return true;
  }
}

// User interface logic:

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("#side1").val());
    const side2 = parseInt($("#side2").val());
    const side3 = parseInt($("#side3").val());
    const equ = equilateral(side1, side2, side3);
    const iso = isosceles(side1, side2, side3);
    const sca = scalene(side1, side2, side3);
    const val = valid(side1, side2, side3);
    $("#equilateral").text(equ);
    $("#isosceles").text(iso);
    $("#scalene").text(sca);
    $("#valid").text(val);
  });
});